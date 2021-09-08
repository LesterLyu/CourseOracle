const User = require("../models/user");
const Course = require("../models/course");
const CourseRating = require("../models/courseRating")
const CourseMaterial = require("../models/courseMaterial")
const Prof = require("../models/prof")
const PurchaseHistory = require("../models/purchaseHistory")
const {getProfNameById, cleanCourseMaterial} = require("../utils/helpers")
const {APIError} = require('../utils/errors');
const PROFIT_RATE = 1;

const createMaterial = async (req, res, next) => {
  const {courseCode, instituteName, year, semester, description, profs = [], type, price, fileId} = req.body;

  // Should never reach this
  if (!req.session.userId) {
    return next(APIError(400, 'Authentication required.'));
  }

  // Find course
  const courseDoc = await Course.findOne({code: courseCode, institute: instituteName});
  if (!courseDoc) {
    return res.status(400).json({error: "Course not found."});
  }

  const newCourseMaterial = new CourseMaterial({
    course: courseCode, institute: instituteName,
    year, semester, description, profs, type, price,
    user: req.session.userId, file: fileId,
  });
  await newCourseMaterial.save();
  res.json({success: true});
};

const getMaterials = async (req, res) => {
  const result = {};
  const course = req.query.course;
  const institution = req.query.institution;
  const buyerEmail = req.session.email || ''; // if user is not login, then ''
  if (!course || !institution) {
    return res.status(400).json({error: "invalid request"});
  }
  const foundCourse = await Course.findOne({code: course, institute: institution});
  if (!foundCourse) {
    return res.status(404).json({error: "Course not found"});
  }
  const profsName = await getProfNameById(foundCourse.profs);
  result.course = {
    name: course,
    school: institution,
    description: foundCourse.description,
    professors: profsName,
  }

  const foundCourseMaterials = await CourseMaterial.find({course: course, institute: institution});
  result.courseMaterial = await cleanCourseMaterial(foundCourseMaterials, buyerEmail)
  res.json(result);
};

const purchaseMaterial = async (req, res) => {
  const email = req.session.email;
  const materialId = req.body.materialId;
  if (!email || !materialId) {
    res.status(400).json({error: "invalid request"});
  }
  const buyer = await User.findOne({email: email});
  if (!buyer) {
    res.status(400).json({error: "invalid request"});
  } else {
    const purchaseHistory = await PurchaseHistory.findOne({user: buyer._id, material: materialId})
    if (purchaseHistory) {
      res.status(400).json({error: "invalid request"});
    } else {
      const material = await CourseMaterial.findById(materialId)
      const offerer = await User.findById(material.user)
      if (buyer.balance - material.price >= 0) { // buy material successfully
        buyer.balance = buyer.balance - material.price;
        offerer.balance = offerer.balance + material.price * PROFIT_RATE;
        buyer.save();
        offerer.save()
        const newPurchaseHistory = new PurchaseHistory({user: buyer._id, material: materialId, price: material.price});
        newPurchaseHistory.save(function (err, data) {
          if (err) {
            console.log(err);
          }
        })
        // TODI: find file and send it back
        res.json({file: 'temp file'})
      } else {
        res.status(400).json({error: "insuffient balance"});
      }
    }
  }
}

const rateMaterial = async (req, res) => {
  const email = req.session.email;
  const materialId = req.body.materialId;
  const rating = req.body.rate;
  if (!email || !materialId || !rating) {
    return res.status(400).json({error: "invalid request"});
  }
  const buyer = await User.findOne({email});
  if (!buyer) {
    return res.status(400).json({error: "invalid request"});
  } else {
    const purchaseHistory = await PurchaseHistory.findOne({user: buyer._id, material: materialId})
    if (!purchaseHistory) { // material to be rated should be already in purchaseHistory
      res.status(400).json({error: "invalid request"});
    } else {
      purchaseHistory.updateOne({rate: rating}, function (err) {
        if (err) {
          console.log(err);
        }
      })
      // update courseMaterial like and unlike
      const material = await CourseMaterial.findById(materialId);
      if (rating == 4 || rating == 5) {
        material.like += 1;
      } else if (rating == 0 || rating == 1) {
        material.unlike += 1;
      }
      material.save();
      res.send({});
    }
  }
}

// only update purchaseHistory.tip
// purchaseHistory.tip is accumulative
const tipMaterial = async (req, res) => {
  const email = req.session.email;
  const materialId = req.body.materialId;
  const tip = parseInt(req.body.tip);

  if (!email || !materialId || !tip) {
    return res.status(400).json({error: "invalid request"});
  }
  const buyer = await User.findOne({email});
  if (!buyer) {
    return res.status(400).json({error: "invalid request"});
  } else {
    const purchaseHistory = await PurchaseHistory.findOne({user: buyer._id, material: materialId})
    if (!purchaseHistory || !purchaseHistory.rate) { // material to be rated should be already in purchaseHistory
      res.status(400).json({error: "invalid request"});
    } else {
      const material = await CourseMaterial.findById(materialId)
      const offerer = await User.findById(material.user)
      if (buyer.balance - tip >= 0) {
        buyer.balance = buyer.balance - tip;
        offerer.balance = offerer.balance + tip * PROFIT_RATE;
        buyer.save()
        offerer.save()
        if (!purchaseHistory.tip) {
          purchaseHistory.tip = tip;
        } else {
          purchaseHistory.tip += tip;
        }
        purchaseHistory.save()
        res.send({})
      } else {
        res.status(400).send({error: 'insufficient balance'})
      }
    }
  }
}

module.exports = {
  getMaterials,
  purchaseMaterial,
  rateMaterial,
  tipMaterial,
  createMaterial
};
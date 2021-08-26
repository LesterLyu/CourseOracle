const User = require("../models/user");
const Course = require("../models/course");
const CourseRating = require("../models/courseRating")
const CourseMaterial = require("../models/courseMaterial")
const Prof = require("../models/prof")
const PurchaseHistory = require("../models/purchaseHistory")
const {getProfNameById, cleanCourseMaterial} = require("../utils/helpers")


const getMaterials = async (req, res) => {
    result = {}
    const course = req.query.course
    const institution = req.query.institution;
    const buyerEmail = req.query.buyerEmail; // if user is not login, then ''
    if (!course|| !institution) {
        return res.status(400).json({ error: "invalid request" });
    }
    const foundCourse = await Course.findOne({code: course, institute: institution});
    if (!foundCourse) {
        return res.status(404).json({ error: "Course not found" });
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
    const email = req.body.userEmail;
    const materialId = req.body.materialId;
    const price = req.body.price;
    if (!email || !materialId || !price){
        res.status(400).json({ error: "invalid request" });
    }
    const buyer = await User.findOne({email: email});
    if (!buyer){ 
        res.status(400).json({ error: "invalid request" });
    }else{
        const purchaseHistory = await PurchaseHistory.findOne({user: buyer._id, material: materialId})
        if (purchaseHistory){
            res.status(400).json({ error: "invalid request" });
        }else{
            const newPurchaseHistory = new PurchaseHistory({user: buyer._id, material: materialId, price: price});
            newPurchaseHistory.save(function(err, data){
                if (err) { console.log(err);}
            })
            // TODI: find file and send it back
            res.json({file: 'temp file'})
        }
    }
}

const rateMaterial = async (req, res) => {
    const email = req.body.userEmail;
    const materialId = req.body.materialId;
    const rating = req.body.rate;
    if (!email || !materialId || !rating) {
        return res.status(400).json({ error: "invalid request" });
    }
    const buyer = await User.findOne({email: email});
    if (!buyer){ 
        return res.status(400).json({ error: "invalid request" });
    }else{
        const purchaseHistory = await PurchaseHistory.findOne({user: buyer._id, material: materialId})
        if (!purchaseHistory){ // material to be rated should be already in purchaseHistory
            res.status(400).json({ error: "invalid request" });
        }else{
            purchaseHistory.updateOne({rate: rating}, function(err){
                if (err){console.log(err);}
            })
            // update courseMaterial like and unlike
            const material = await CourseMaterial.findById(materialId);
            if (rating == 4 || rating == 5){
                material.like += 1;
            }else if(rating == 0 || rating == 1){
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
    const email = req.body.userEmail;
    const materialId = req.body.materialId;
    const tip = parseInt(req.body.tip);
    if (!email || !materialId || !tip) {
        return res.status(400).json({ error: "invalid request" });
    }
    const buyer = await User.findOne({email: email});
    if (!buyer){ 
        return res.status(400).json({ error: "invalid request" });
    }else{
        const purchaseHistory = await PurchaseHistory.findOne({user: buyer._id, material: materialId})
        if (!purchaseHistory || !purchaseHistory.rate){ // material to be rated should be already in purchaseHistory
            res.status(400).json({ error: "invalid request" });
        }else{
            if (!purchaseHistory.tip){
                purchaseHistory.tip = tip;
            }else{
                purchaseHistory.tip += tip;
            }
            purchaseHistory.save()
            res.send({})
        }
    }
}

module.exports = {
    getMaterials,
    purchaseMaterial,
    rateMaterial,
    tipMaterial
};
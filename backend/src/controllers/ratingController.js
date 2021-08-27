const User = require("../models/user");
const Institute = require("../models/institute")
const Prof = require("../models/prof")
const CourseRating = require("../models/courseRating")
const {APIError} = require("../utils/errors");

const ratingKeys = ['institute', 'course', 'prof', 'score', 'comment', 'year', 'semester'];

async function postRating(req, res, next) {
    // const user = await User.findOne({address: req.body.address});
    // if (!user) {
    //     return next(new APIError(403, 'Please login before submit'));
// }
    let prof;
    let institute = await Institute.findOne({name: req.body.institute});
    console.log(req.body);
    // console.log(req)
    if (!institute) {
        institute = new Institute({
            name: req.body.institute,
        })
        institute.save((err) => {
            return res.status(500).send(err);
        })
    }
    prof = await Prof.findOne({name: req.body.prof, institute: institute._id});
    if (!prof) {
        prof = new Prof({
            name: req.body.prof,
            institute: institute,
        });
        prof.save((err) => {
            return res.status(500).send(err);
        })
    }
    const ratingKeys = ['institute', 'course', 'prof', 'score', 'comment', 'year', 'semester'];

    const newRating = new CourseRating({
        institute: institute,
        course: req.body.course,
        prof: prof,
        score: req.body.score,
        comment: req.body.comment,
        year: req.body.year,
        semester: req.body.semester,
        user: 1,
    });

    let err = await newRating.save();
    if (err) {
        console.log(err);
        return res.status(500).send(err);
    }

    return res.send("New rating posted");
}

async function getRating(req, res, next) {
    console.log(req.query['institute'])
    let institute = await Institute.findOne({name: req.query['institute']});
    if (!institute) {
        console.log("Institute not found");
        return res.json({
            success: true,
            data: {}
        });
    }
    let ratings = await CourseRating.find({institute: institute._id, course: req.query['course']});
    let data = [];
    for (let i = 0; i < ratings.length; i++) {
        let rating = ratings[i].toObject();
        let profObj =  await Prof.findOne({_id: rating['prof']});
        rating['prof'] = profObj.name;
        let instituteObj = await Institute.findOne({_id: rating['institute']});
        rating['institute'] = instituteObj.name;
        data.push(rating);
    }
    res.json({
        success: true,
        data: data
    })
}

async function likeRating(req, res, next) {
    let err = await CourseRating.updateOne({_id: req.body['_id']}, {$inc: {like: 1}});
    res.send("Success to like");
}

async function unlikeRating(req, res, next) {
    let err = await CourseRating.updateOne({_id: req.body['_id']}, {$inc: {unlike: 1}});
    res.send("Success to dislike");
}

async function cancelLikeRating(req, res, next) {
    let err = await CourseRating.updateOne({_id: req.body['_id']}, {$inc: {like: -1}});
    res.send("Success to cancel like");
}

async function cancelUnlikeRating(req, res, next) {
    let err = await CourseRating.updateOne({_id: req.body['_id']}, {$inc: {unlike: -1}});
    res.send("Success to cancel unlike");
}

module.exports = {
    postRating, getRating,
    likeRating, unlikeRating,
    cancelLikeRating, cancelUnlikeRating,
};

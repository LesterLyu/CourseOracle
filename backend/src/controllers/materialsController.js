const User = require("../models/user");
const Course = require("../models/course");
const CourseRating = require("../models/courseRating")
const Prof = require("../models/prof")


const getMaterials = async (req, res) => {
    //not finish yet
    if (!req.params.course || !req.params.institution) {
        return res.status(400).json({ error: "invalid request" });
    }
    const course = req.params.course;
    const institution = req.params.institution;

    const user = await User.findOne({address:req.params.address});
    if (!user) {
        return res.status(404).json({ error: "user not found" });
    }
    res.send(user);
};

module.exports = {
    getMaterials
};
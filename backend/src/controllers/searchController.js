const Course = require("../models/course")
const Institute = require("../models/institute")
const {APIError} = require("../utils/errors");




async function getUniversities(req,res,next){
  // console.log(req.query['institute'])
  let institutes = await Institute.find({});
  // if (!institutes) {
  //   console.log("No institute");
  //   return res.json({
  //     success: true,
  //     data: {}
  //   });
  // }

  let data = [];
  for (let i=0; i<institutes.length; i++){
    // let institute = institutes[i].toObject();
    data.push(institutes[i].name)
  }

  res.json({
    success:true,
    data:data
  })
}




async function getCourses(req,res,next){
  console.log(req.query['institute'])


  // let courses = await Course.find({institute: req.query['institute']});
  // let courses = await Course.find().populate({
  //   path: 'institute',
  //   match: { institute: { name: req.query['institute'] }}
  // }).exec();

  // let targetInstitute = await Institute.findOne({name:req.query['institute']});
  // console.log(targetInstitute.name)
  // console.log(targetInstitute._id)
  //
  //
  // let courses = await Course.find({institute:targetInstitute._id});
  // console.log(courses.length)

  let courses = await Course.find({institute: req.query['institute']});
  console.log(courses.length)


  let data = []
  for (let i=0; i<courses.length; i++){
    let course = courses[i].toObject();

    console.log(course)
    let courseCode = course.code
    data.push(courseCode)

  }

  res.json({
    success: true,
    data: data
  })

}

module.exports = {
  getUniversities, getCourses
};
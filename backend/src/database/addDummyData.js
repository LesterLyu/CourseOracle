const User = require("../models/user");
const Course = require("../models/course");
const CourseRating = require("../models/courseRating")
const CourseMaterial = require("../models/courseMaterial")
const Prof = require("../models/prof")
const PurchaseHistory = require("../models/purchaseHistory")
const Institute = require("../models/institute")
const {db} = require('../loaders/mongodb');
const { StreamDescription } = require("mongodb");

 function createInstitute(name, country){
    const institute = new Institute({
        name: name,
        country: country,
        website: 'www.baidu.com',
    })
    institute.save(function(err, data){
        if (err) { console.log(err);}
        console.log('create test institute ' + name);
    })
 }

 function createUser(number) {
    const user = new User({first_name: 'testUser', last_name: number, 
                           email: 'testUser'+number+'@xyz.com', 
                           description: "description", 
                           profile_picture: "https://source.unsplash.com/random"})
    user.save(function(err, data){
        if (err) { console.log(err);}
        console.log('create test user ' + number);
    })
}

 function createCourses(code, institute, profs){
    const course = new Course({code: code,
                name: code + ' name',
                description: code + ' description',
                institute: institute,
                profs: profs
            })
    course.save(function(err){
        if (err) { console.log(err);}
        console.log('create test course ' + code + ' in ' + institute);
    })
}

  function createProf(name, institute){
    Institute.find({name: institute}).exec(function(err, data){
        if (!data){
            console.log('please run addInstitute function first')
        }else{
            const prof = new Prof({name: name, institute: data._id})
            return prof.save(function(err){
                if (err) { console.log(err);}
                console.log('create test prof ' + name + ' in ' + institute);
            })
        }
    })
}

  function createCourseMaterial(course, institute){
     User.find().exec(function(err, data){
      const courseMaterial = new CourseMaterial({
          course: course, institute: institute,
          year: Math.floor(1850 + Math.random() * 200),
          semester: 'fall',
          description: course + ' in ' + institute + ' description',
          profs: [],
          type: 'final exam',
          user: data[0]._id,
          price: 5
      })

      courseMaterial.save(function(err, data){
        if (err) { console.log(err);}
        console.log('create test course material ' + data._id)
      })
    })
  }

  function createPurchaseHistory(userIndex, materialIndex){
    User.find().exec(function(err, data){
        if (!data || userIndex >= data.length){
            console.log('please run addUser first')
        }else{
            var userId = data[userIndex]._id;
            CourseMaterial.find().exec(function(err, data){
                if (!data || materialIndex >= data.length){
                    console.log('please run addCourseMaterial first')
                }else{
                    var materialId = data[materialIndex]._id;
                    const purchaseHistory = new PurchaseHistory({
                        user: userId,
                        material: materialId,
                        price: 5,
                    })
                    purchaseHistory.save(function(err, data){
                        if (err) { console.log(err);}
                        console.log('create test purchase history ' + data._id)
                    })
                }
            })
        }
    })
  }

  function addInstitute(){
      createInstitute('utsg', 'Canada')
      createInstitute('utsc', 'Canada')
      createInstitute('utm', 'Canada')
  }

  function addUser(){
    for (let i = 0; i < 10; i++){
        createUser(i.toString())
    }
  }

  function addProfessor(){
    createProf('Alice', 'utsc')
    createProf('Bob', 'utsc')
    createProf('Coco', 'utsc')
    createProf('Dex', 'utsc')
    createProf('Ellen', 'utsc')
    createProf('Frank', 'utsc')
    createProf('George', 'utsc')
    createProf('Helen', 'utsc')
    createProf('Irene', 'utsc')
    createProf('Jack', 'utsc') 
  }

  function addCourse(){
    Prof.find().exec(function(err, data){
            var PROFESSOR_ID = data.map((i) => {
                return i._id
            })
            if (PROFESSOR_ID.length < 10){
                console.log('Please run addProfessor function first')
            }else{
                createCourses('csc148', 'utsg', [0, 1, 2].map((i) => PROFESSOR_ID[i]))
                createCourses('csc108', 'utsg', [3].map((i) => PROFESSOR_ID[i]))
                createCourses('csc165', 'utsg', [2, 3, 4].map((i) => PROFESSOR_ID[i]))
                createCourses('csc148', 'utsc', [5, 6].map((i) => PROFESSOR_ID[i]))
                createCourses('csc108', 'utsc', [1].map((i) => PROFESSOR_ID[i]))
                createCourses('csc165', 'utsc', [5, 6].map((i) => PROFESSOR_ID[i]))
                createCourses('csc148', 'utm', [5, 6, 7, 8, 9].map((i) => PROFESSOR_ID[i]))
                createCourses('csc108', 'utm', [1].map((i) => PROFESSOR_ID[i]))
                createCourses('csc165', 'utm', [5, 6].map((i) => PROFESSOR_ID[i]))
            }
        }
    )
}

function addCourseMaterial(){
    createCourseMaterial('csc148', 'utsc')
    createCourseMaterial('csc148', 'utsc')
    createCourseMaterial('csc148', 'utsc')
    createCourseMaterial('csc148', 'utsc')
    createCourseMaterial('csc148', 'utsc')
    createCourseMaterial('csc108', 'utsg')
    createCourseMaterial('csc108', 'utm')
    createCourseMaterial('csc108', 'utm')
    createCourseMaterial('csc108', 'utm')
}

function step1() {
    db.dropDatabase()
    addUser()
    addInstitute()
}

function step2(){
    addProfessor()
}

function step3(){
    addCourse()
    addCourseMaterial()
}

function step4(){
    createPurchaseHistory(0, 0)
    createPurchaseHistory(0, 1)
    createPurchaseHistory(1, 0)
    createPurchaseHistory(1, 1)
}



// run step1 to step4 in order
// step1()
// step2()
// step3()
// step4()







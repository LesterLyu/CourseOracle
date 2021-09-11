const User = require("../models/user");
const Course = require("../models/course");
const CourseRating = require("../models/courseRating")
const CourseMaterial = require("../models/courseMaterial")
const Prof = require("../models/prof")
const PurchaseHistory = require("../models/purchaseHistory")
const Institute = require("../models/institute")

async function createInstitute(name, country) {
  const institute = new Institute({
    name: name,
    country: country,
    website: 'www.baidu.com',
  });
  await institute.save();
  console.log('create test institute ' + name);
}

async function createUser(number) {
  const user = new User({
    first_name: 'testUser', last_name: number,
    email: 'testUser' + number + '@xyz.com',
    description: "description",
    profile_picture: "https://source.unsplash.com/random"
  })
  await user.save();
  console.log('create test user ' + number);
}

async function createCourses(code, institute, profs) {
  const course = new Course({
    code: code,
    name: code + ' name',
    description: code + ' description',
    institute: institute,
    profs: profs
  })
  await course.save();
  console.log('create test course ' + code + ' in ' + institute);

}

async function createProf(name, institute) {
  const instituteDoc = await Institute.findOne({name: institute});
  if (!instituteDoc) {
    console.log('please run addInstitute function first');
    return;
  }
  const prof = new Prof({name: name, institute: instituteDoc._id});
  await prof.save();
  console.log('create test prof ' + name + ' in ' + institute);
}

async function createCourseMaterial(course, institute) {
  const userDocs = await User.find();
  const courseMaterial = new CourseMaterial({
    course: course, institute: institute,
    year: Math.floor(1850 + Math.random() * 200),
    semester: 'fall',
    description: course + ' in ' + institute + ' description',
    profs: [],
    type: 'final exam',
    user: userDocs[0]._id,
    price: 5
  });
  await courseMaterial.save();
  console.log('create test course material ' + courseMaterial._id)
}

async function createPurchaseHistory(userIndex, materialIndex) {
  const userDocs = await User.find();
  if (!userDocs || userIndex >= userDocs.length) {
    console.log('please run addUser first');
    return;
  }
  const userId = userDocs[userIndex]._id;

  const courseMaterialDocs = await CourseMaterial.find();
  if (!courseMaterialDocs || materialIndex >= courseMaterialDocs.length) {
    console.log('please run addCourseMaterial first');
    return;
  }
  const materialId = courseMaterialDocs[materialIndex]._id;


  const purchaseHistory = new PurchaseHistory({
    user: userId,
    material: materialId,
    price: 5,
  })
  await purchaseHistory.save();
  console.log('create test purchase history ' + purchaseHistory._id)
}

async function addInstitute() {
  await createInstitute('utsg', 'Canada');
  await createInstitute('utsc', 'Canada');
  await createInstitute('utm', 'Canada');
}

async function addUser() {
  for (let i = 0; i < 10; i++) {
    await createUser(i.toString())
  }
}

async function addProfessor() {
  await createProf('Alice', 'utsc')
  await createProf('Bob', 'utsc')
  await createProf('Coco', 'utsc')
  await createProf('Dex', 'utsc')
  await createProf('Ellen', 'utsc')
  await createProf('Frank', 'utsc')
  await createProf('George', 'utsc')
  await createProf('Helen', 'utsc')
  await createProf('Irene', 'utsc')
  await createProf('Jack', 'utsc')
}

async function addCourse() {
  const profDocs = await Prof.find();
  const PROFESSOR_ID = profDocs.map((i) => {
    return i._id;
  });

  if (PROFESSOR_ID.length < 10) {
    console.log('Please run addProfessor function first');
    return;
  }

  await createCourses('csc148', 'utsg', [0, 1, 2].map((i) => PROFESSOR_ID[i]))
  await createCourses('csc108', 'utsg', [3].map((i) => PROFESSOR_ID[i]))
  await createCourses('csc165', 'utsg', [2, 3, 4].map((i) => PROFESSOR_ID[i]))
  await createCourses('csc148', 'utsc', [5, 6].map((i) => PROFESSOR_ID[i]))
  await createCourses('csc108', 'utsc', [1].map((i) => PROFESSOR_ID[i]))
  await createCourses('csc165', 'utsc', [5, 6].map((i) => PROFESSOR_ID[i]))
  await createCourses('csc148', 'utm', [5, 6, 7, 8, 9].map((i) => PROFESSOR_ID[i]))
  await createCourses('csc108', 'utm', [1].map((i) => PROFESSOR_ID[i]))
  await createCourses('csc165', 'utm', [5, 6].map((i) => PROFESSOR_ID[i]))

}

async function addCourseMaterial() {
  await createCourseMaterial('csc148', 'utsc')
  await createCourseMaterial('csc148', 'utsc')
  await createCourseMaterial('csc148', 'utsc')
  await createCourseMaterial('csc148', 'utsc')
  await createCourseMaterial('csc148', 'utsc')
  await createCourseMaterial('csc108', 'utsg')
  await createCourseMaterial('csc108', 'utm')
  await createCourseMaterial('csc108', 'utm')
  await createCourseMaterial('csc108', 'utm')
}

async function runAll() {
  const mongodbLoader = require("../loaders/mongodb");
  await mongodbLoader.load();

  // Comment out the lines you don't want.

  // await db.dropDatabase();
  // await addUser();

  // Remove everything but users
  await Promise.all([Institute, Course, Prof, CourseMaterial, CourseRating, PurchaseHistory].map(
    async Model => await Model.deleteMany({})
  ));

  await addInstitute();
  await addProfessor();
  await addCourse();
  await addCourseMaterial();

  await createPurchaseHistory(0, 0)
  await createPurchaseHistory(0, 1)
  await createPurchaseHistory(1, 0)
  await createPurchaseHistory(1, 1)
  process.exit(0);
}


runAll();
// Usage:
// Run this file directly;
// Comment out the operation you don't need, i.e. addUser()

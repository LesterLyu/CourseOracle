import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Course from '../../pages/Course';
import InstitutionPage from "../../pages/Institutes/Institutions";
import CourseMaterial from "../../pages/Materials/CourseMaterial";
import CourseRatings from "../../pages/Rating/CourseRatings";

export const config = [
  {path: '/', exact: true, Component: Home},
  {path: '/login', exact: true, Component: Login},
  {path: '/register', exact: true, Component: Register},
  {path: '/course/:institute/:course', exact: true, Component: Course},
  {path: '/institutes', exact: true, Component: InstitutionPage},
  {path: '/materials/:instituteName/:courseName', exact: true, Component: CourseMaterial},
  {path: '/rating/:course', exact: true, Component: CourseRatings},
]

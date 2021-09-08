import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Course from '../../pages/Course';
import InstitutionPage from "../../pages/Institutes/Institutions";
import ProfPage from "../../pages/Prof";
import Upload from "../../pages/Upload";

export const config = [
  {path: '/', exact: true, Component: Home},
  {path: '/login', exact: true, Component: Login},
  {path: '/register', exact: true, Component: Register},
  {path: '/course/:institute/:course', exact: false, Component: Course},
  {path: '/institutes', exact: true, Component: InstitutionPage},
  {path: '/prof/:name', exact: true, Component: ProfPage},
  {path: '/upload', exact: true, Component: Upload},
  {path: '/upload/:institute/:course', exact: true, Component: Upload},
]

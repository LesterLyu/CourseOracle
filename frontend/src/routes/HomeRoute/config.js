import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

export const config = [
  {path: '/', exact: true, Component: Home},
  {path: '/login', exact: true, Component: Login},
  {path: '/register', exact: true, Component: Register},
]

import CourseMaterial from '../../pages/Materials/CourseMaterial';
import Checkout from '../../pages/Materials/Checkout';
import RateMaterial from '../../pages/Materials/RateMaterial';
import Home from '../../pages/Home';

export const config = [
  {path: '/material/:course', exact: true, Component: CourseMaterial},
  // TODO: delete following routes in prod env
  {path: '/material/checkout', exact: true, Component: Checkout},
  {path: '/material/rate', exact: true, Component: RateMaterial},
]
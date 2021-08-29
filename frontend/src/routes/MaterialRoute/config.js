import CourseMaterial from '../../pages/Materials/CourseMaterial';

export const config = [
  {path: '/materials/:instituteName/:courseName', exact: true, Component: CourseMaterial},
]
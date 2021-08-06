import Profile from '../../pages/Dashboard/Profile';
import MyMaterials from '../../pages/Dashboard/MyMaterials';
import MyReviews from '../../pages/Dashboard/MyReviews';
import Purchase from '../../pages/Dashboard/Purchase';
import RateCourse from '../../pages/Dashboard/RateCourse';
import UploadCourseMaterial from '../../pages/Dashboard/UploadCourseMaterial';

// Find icons here https://next.material-ui.com/components/material-icons/#main-content
// and https://materialdesignicons.com/ (takes 1 minute to load)
// Or create custom icon https://next.material-ui.com/components/icons/
import {Person, Help, Store, Reviews, Storage, RateReview, UploadFile} from "@material-ui/icons";

export const config = [
  {path: '/dashboard', exact: true, Component: Profile},
  {path: '/dashboard/profile', exact: true, Component: Profile},
  {path: '/dashboard/my-materials', exact: true, Component: MyMaterials},
  {path: '/dashboard/my-reviews', exact: true, Component: MyReviews},
  {path: '/dashboard/purchase', exact: true, Component: Purchase},
  {path: '/dashboard/rate-course', exact: true, Component: RateCourse},
  {path: '/dashboard/upload', exact: true, Component: UploadCourseMaterial},
]

export const navConfig = [
  {label: 'My Profile', Icon: Person, path: '/dashboard/profile'},
  {label: 'My Materials', Icon: Storage, path: '/dashboard/my-materials'},
  {label: 'My Reviews', Icon: Reviews, path: '/dashboard/my-reviews'},
  {label: 'Purchase', Icon: Store, path: '/dashboard/purchase'},
  {label: 'Rate Course', Icon: RateReview, path: '/dashboard/rate-course'},
  {label: 'Upload Materials', Icon: UploadFile, path: '/dashboard/upload'},
  {label: 'Contact Us', Icon: Help, path: '/dashboard/help'},
]

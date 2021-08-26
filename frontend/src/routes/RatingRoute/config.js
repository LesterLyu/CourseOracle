import CourseRatings from "../../pages/Rating/CourseRatings";

export const config=[
    {path: '/rating/:course', exact: true, Component: CourseRatings},
]
import CourseRatings from "../../pages/Rating/CourseRatings";

export const config=[
    {path: '/rating/:institute/:course', exact: true, Component: CourseRatings},
]
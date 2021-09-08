import React, {useEffect, useState} from 'react';
import {useParams, Switch, Route, useHistory, useLocation} from 'react-router-dom';
import {Container, Box, Tab, Tabs, Typography} from "@material-ui/core";
import {styled} from "@material-ui/core/styles";
import Link from "../../components/Link";
import CourseMaterial from "../Materials/CourseMaterial";
import CourseRatings from "../Rating/CourseRatings";
import {getCourseData} from "../../api/course";

const StyledTab = styled(Tab)(({theme}) => ({
  textTransform: 'none',
  fontSize: 16,
}));

export default function Course() {
  const history = useHistory();
  const location = useLocation();
  const {course, institute} = useParams();
  const [tabValue, setTabValue] = useState(location.pathname.endsWith('rating') ? 0 : 1);
  const [courseData, setCourseData] = useState();

  useEffect(() => {
    // Redirect to .../rating if url ended with course id
    if (location.pathname.toLowerCase().endsWith(course.toLowerCase()))
      history.push(`/course/${institute}/${course}/rating`);
  });

  useEffect(() => {
    (async function(){
      setCourseData(await getCourseData(course, institute));
    })();
  }, [course, institute]);

  const handleTabChange = (e, newValue) => {
    setTabValue(newValue);
    if (newValue === 0)
      history.push(`/course/${institute}/${course}/rating`);
    else
      history.push(`/course/${institute}/${course}/material`);
  }

  return (
    <Container>
      <Typography variant={"h3"} sx={{pt: 1}}>
        {course}
      </Typography>

      {courseData?.professors?.length && <Typography variant={"h5"} color={"textSecondary"} sx={{pt: 1, pb: 1}}>
        professors: {courseData.professors.map((p, idx) =>
        <Link key={p} href={'/prof/' + p}>{p + (idx !== courseData.professors.length - 1 ? ', ' : '')}</Link>)}
      </Typography>}

      {courseData?.description && <Typography variant={"h5"} color={"textSecondary"} sx={{pt: 1, pb: 1}}>
        {courseData.description}
      </Typography>}

      <Box sx={{borderBottom: 1, borderColor: 'divider', mb: 1}}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <StyledTab label="Course Ratings"/>
          <StyledTab label="Course Materials"/>
        </Tabs>
      </Box>

      <Switch>
        <Route path={'/course/:institute/:course/material'} exact>
          <CourseMaterial courseName={course} instituteName={institute}/>
        </Route>

        <Route path={'/course/:institute/:course/rating'} exact>
          <CourseRatings courseName={course} instituteName={institute}/>
        </Route>
      </Switch>

    </Container>
  );
}
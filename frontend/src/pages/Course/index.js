import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useParams, Switch, Route, useHistory, useLocation} from 'react-router-dom';
import {Container, Box, Tab, Tabs, Typography, Button, useMediaQuery, useTheme} from "@mui/material";
import {styled} from "@mui/material/styles";
import Link from "../../components/Link";
import CourseMaterial from "../Materials/CourseMaterial";
import CourseRatings from "../Rating/CourseRatings";
import {getCourseData} from "../../api/course";
import {Add} from "@mui/icons-material";

const StyledTab = styled(Tab)(({theme}) => ({
  textTransform: 'none',
  fontSize: 16,
  '&.Mui-selected': {
    backgroundColor: '#f1f8ff'
  }
}));

export default function Course() {
  const history = useHistory();
  const location = useLocation();
  const {course, institute} = useParams();
  const [tabValue, setTabValue] = useState(location.pathname.endsWith('rating') ? 0 : 1);
  const [courseData, setCourseData] = useState();

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const addRatingPanelRef = useRef();

  useEffect(() => {
    // Redirect to .../rating if url ended with course id
    if (location.pathname.toLowerCase().endsWith(course.toLowerCase())) {
      setTabValue(0);
      history.push(`/course/${institute}/${course}/rating`);
    }
  }, [location, history, institute, course]);

  useEffect(() => {
    (async function () {
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

  const uploadButton = useMemo(() => (
    <Button variant="contained" color="info" startIcon={<Add/>}
            onClick={() => history.push(`/upload/${institute}/${course}`)}>
      Upload Material
    </Button>
  ), [course, history, institute]);

  const addRatingButton = useMemo(() => (
    <Button variant="contained" color="info" startIcon={<Add/>}
            onClick={() => addRatingPanelRef.current?.scrollIntoView({behavior: "smooth"})}>
      Add Rating
    </Button>
  ), [addRatingPanelRef]);

  return (
    <Container>
      <Typography variant={"h3"} sx={{pt: 1}}>
        {course}
      </Typography>

      <Box sx={{display: 'flex'}}>
        <Box sx={{flexGrow: 1, width: '80%'}}>
          {courseData?.professors?.length && <Typography variant={"h5"} color={"textSecondary"} sx={{pt: 1, pb: 1}}>
            professors: {courseData.professors.map((p, idx) =>
            <Link key={p} href={'/prof/' + p}>{p + (idx !== courseData.professors.length - 1 ? ', ' : '')}</Link>)}
          </Typography>}

          {courseData?.description && <Typography variant={"body1"} color={"textSecondary"} sx={{pt: 1, pb: 1}}>
            {courseData.description}
          </Typography>}
        </Box>

        <div>
          {(tabValue === 1 && !isSmScreen) && uploadButton}
          {(tabValue === 0 && !isSmScreen) && addRatingButton}
        </div>
      </Box>

      {(tabValue === 1 && isSmScreen) && uploadButton}
      {(tabValue === 0 && isSmScreen) && addRatingButton}


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
          <CourseRatings courseName={course} instituteName={institute} addRatingPanelRef={addRatingPanelRef}/>
        </Route>
      </Switch>

    </Container>
  );
}
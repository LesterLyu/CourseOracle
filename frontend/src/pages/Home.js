import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
// See https://next.material-ui.com/system/styled/
import {styled} from '@mui/material/styles';
import {
  Autocomplete, Container, Paper, TextField, Typography, Box, FormGroup, FormControlLabel,
  Checkbox, Button, Grid, Divider, InputAdornment, ThemeProvider, createTheme
} from "@mui/material";
import {
  Search as SearchIcon, ArrowForwardSharp as ArrowForwardSharpIcon,
  School as SchoolIcon
} from "@mui/icons-material";

import {HomeBackgroundWrapper} from "../components/Background";
import {getCourseNames} from "../api/course";
import {getInstituteNames} from "../api/institute";

const textFieldTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgb(36,36,36, 0.85)',
      paper: 'rgb(36,36,36)'
    }
  },
});

const autoCompleteStyle = {
  color: 'white',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ccc',
  },
  "& .MuiInputLabel-root": {
    color: '#eee',
  },
}

const StyledCheckbox = styled(Checkbox)(({
  color: '#ccc',
  '&.Mui-checked': {
    color: '#ccc',
  },
}));

export default function HomePage() {
  const history = useHistory();
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const [instituteLst, setInstituteLst] = useState([]);
  const [courseLst, setCourseLst] = useState([]);
  const [selectedInstitute, setSelectedInstitute] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    (async function () {
      const instituteLst = await getInstituteNames()
      console.log('results', instituteLst)
      setInstituteLst(instituteLst)
    })()
  }, [])


  useEffect(() => {
    (async function () {
      const courseLst = await getCourseNames(selectedInstitute);
      console.log('course results')
      console.log(courseLst)
      setCourseLst(courseLst)

      return courseLst;
    })()

  }, [selectedInstitute])

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };


  const handleInstituteChange = async (event, value) => {
    setSelectedInstitute(value);
  };

  const handleCourseChange = async (event, value) => {
    setSelectedCourse(value);
  };


  return (
    <HomeBackgroundWrapper>
      <Container justify="center">

        <Box sx={{display: 'flex'}}>
          <Typography variant={"h1"} fontFamily={'sans-serif'} fontSize={60}
                      sx={{pt: 5, color: "#eee", fontWeight: 500, pb: 5}}>
            Course Oracle
          </Typography>
        </Box>

        <Paper sx={{height: '300px', pt: 5, borderRadius: 10, bgcolor: 'rgb(36,36,36, 0.85)'}}>

          <ThemeProvider theme={textFieldTheme}>
            <Grid container spacing={4} sx={{marginTop: '40px'}} justifyContent="center">
              <Grid item xs={6} md={8}>
                <Grid container direction={'column'} alignItems="stretch">
                  <Grid item>
                    <Paper sx={{height: 70, backgroundColor: 'rgb(36,36,36, 0.65)'}}>

                      <Grid spacing={1} container direction={'row'} sx={{height: 60}}>
                        <Grid item sx={{transition: 'all 0.3s', width: selectedInstitute ? '60%' : '100%'}}>
                          <Autocomplete
                            sx={autoCompleteStyle}
                            options={instituteLst}
                            onInputChange={handleInstituteChange}
                            renderInput={(params) => (
                              <TextField {...params}
                                         label="Institute Name"
                                         InputProps={{
                                           ...(params.InputProps),
                                           startAdornment: (
                                             <InputAdornment position="start">
                                               <SchoolIcon/>
                                             </InputAdornment>
                                           ),
                                         }}
                              />
                            )}

                          />
                        </Grid>

                        {selectedInstitute && <Grid item>
                          <Divider sx={{height: 50, m: 0.5, borderColor: '#666'}} orientation="vertical"/>
                        </Grid>}

                        <Grid item xs justifyContent="center">
                          {selectedInstitute &&
                          <Autocomplete
                            sx={autoCompleteStyle}
                            autoHighlight
                            freeSolo
                            options={courseLst}
                            disableClearable
                            onInputChange={handleCourseChange}
                            renderInput={(params) => (
                              <TextField {...params} label="Course Code" variant="outlined"
                                         InputProps={{
                                           ...(params.InputProps),
                                           startAdornment: (
                                             <InputAdornment position="start">
                                               <SearchIcon/>
                                             </InputAdornment>
                                           ),
                                         }}
                              />
                            )}
                          />}

                        </Grid>

                      </Grid>


                    </Paper>
                  </Grid>

                  <Grid item>
                    <Box sx={{pt: 2}}>
                      {/*============================Do not delete! this is for multiple choices=====================*/}
                      <FormGroup row>
                        <FormControlLabel
                          sx={{color: 'white'}}
                          control={
                            <StyledCheckbox
                              checked={state.checkedA}
                              onChange={handleChange}
                              name="checkedA"
                              color="primary"
                            />
                          }
                          label="Course Materials"
                        />

                        <FormControlLabel
                          sx={{color: 'white'}}
                          control={
                            <StyledCheckbox
                              checked={state.checkedC}
                              onChange={handleChange}
                              name="checkedC"
                              color="primary"
                            />
                          }
                          label="Course Ratings"
                        />
                      </FormGroup>

                      {/*<RadioGroup row name="row-radio-buttons-group">*/}
                      {/*  <FormControlLabel value="CourseMaterials" sx={{color: 'white'}}*/}
                      {/*                    control={<StyledRadioButton*/}
                      {/*                      checked={state.checkedA}*/}
                      {/*                      onChange={handleChange}*/}
                      {/*                      name="checkedA"*/}
                      {/*                      color="primary"/>} label="Course Materials"/>*/}

                      {/*  <FormControlLabel value="CourseRatings" sx={{color: 'white'}}*/}
                      {/*                    control={<StyledRadioButton*/}
                      {/*                      checked={state.checkedB}*/}
                      {/*                      onChange={handleChange}*/}
                      {/*                      name="checkedB"*/}
                      {/*                      color="primary"/>} label="Course Ratings"/>*/}
                      {/*</RadioGroup>*/}
                    </Box>
                  </Grid>

                </Grid>
              </Grid>

              <Grid item xs={4} md={2}>
                <Button
                  sx={{mt: 1}}
                  size="large"
                  variant="contained"
                  color="primary"
                  endIcon={<ArrowForwardSharpIcon/>}
                  onClick={() => {
                    history.push(`/course/${selectedInstitute}/${selectedCourse}/rating`);
                  }}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Paper>

      </Container>
    </HomeBackgroundWrapper>
  )
}

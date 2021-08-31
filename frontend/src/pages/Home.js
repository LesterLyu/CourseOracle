import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
// See https://next.material-ui.com/system/styled/
import {styled, alpha} from '@material-ui/core/styles';
import {Autocomplete, Container, InputBase, Paper, TextField} from "@material-ui/core";
import {Search as SearchIcon} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import {Grid} from '@material-ui/core';
import {HomeBackgroundWrapper} from "../components/Background";
import SchoolIcon from '@material-ui/icons/School';
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';
import {getJson} from "../api/helpers"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex', alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
  },
}));

const StyledCheckbox = styled(Checkbox)(({
  color: '#ccc',
  '&.Mui-checked': {
    color: '#ccc',
  },
}));

const StyledRadioButton = styled(Radio)(({
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
      const url = '/api/universities';
      const instituteLst = await getJson(url)
      console.log('results', instituteLst.data)
      setInstituteLst(instituteLst.data)
    })()
  }, [])


  useEffect(() => {
    (async function () {
      const url = '/api/courses?institute=' + selectedInstitute;
      const courseLst = await getJson(url)
      console.log('course results')
      console.log(courseLst)
      setCourseLst(courseLst.data)

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

          <Grid container spacing={4} sx={{marginTop: '40px'}} justifyContent="center">
            <Grid item xs={6} md={8}>
              <Grid container direction={'column'} alignItems="stretch">
                <Grid item>
                  <Paper sx={{height: 70}}>
                    <Search>
                      <Grid spacing={1} container direction={'row'} sx={{height: 60}}>
                        <Grid item sx={{width: '60%'}}>
                          <Autocomplete
                            options={instituteLst}
                            disableClearable
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

                        <Grid item>
                          <Divider sx={{height: 50, m: 0.5}} orientation="vertical"/>
                        </Grid>


                        <Grid item xs justifyContent="center">
                          {selectedInstitute.length > 0 &&
                          <Autocomplete
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
                    </Search>
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
                sx={{mt: '-1px'}}
                size="large"
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardSharpIcon/>}
                onClick={() => {
                  history.push(`/materials/${selectedInstitute}/${selectedCourse}`);
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Paper>

      </Container>
    </HomeBackgroundWrapper>
  )
}

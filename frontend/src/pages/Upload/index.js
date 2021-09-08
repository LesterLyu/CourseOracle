import React, {useContext, useState, useCallback, useEffect} from "react";
import {useHistory, useParams} from 'react-router-dom';
import {
  Link, Container, Divider, Paper, Typography, TextField, Box, Button, FormControl,
  FormLabel, Autocomplete, Radio, RadioGroup, FormControlLabel, InputAdornment, Grid
} from "@mui/material";
import {UserContext} from "../../contexts";
import SubmitButton from '../../components/SubmitButton';
import {styled} from "@mui/material/styles";
import {useDropzone} from 'react-dropzone';
import {MATERIAL_TYPE, SEMESTER, USER_TYPE} from "../../constants";
import {School as SchoolIcon, CloudUpload as CloudUploadIcon, AttachMoney} from "@mui/icons-material";
import {getCourseNames} from "../../api/course";
import {getInstituteNames} from "../../api/institute";
import {DatePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {getProfNamesByInstitute} from "../../api/prof";
import {deleteUploadedFile, uploadFile} from "../../api/upload";
import {uploadMaterial} from "../../api/material";

const StyledPaper = styled(Paper)(({theme}) => ({
  padding: 40,
  [theme.breakpoints.down('sm')]: {
    margin: 0,
    padding: 14,
    marginTop: 10,
  }
}));

const StyledContainer = styled(Container)(({theme}) => ({
  // flex: 1;
  flexed: true,
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: '2px',
  borderRadius: '2px',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
}));


export default function UploadPage() {
  const userContext = useContext(UserContext);
  const history = useHistory();
  if (userContext.type === USER_TYPE.GUEST) {
    history.push('/login');
  }

  const {course, institute} = useParams();
  const [waiting, setWaiting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [prevFile, setPrevFile] = useState();
  const [uploadedFileId, setUploadedFileId] = useState();

  const [institutes, setInstitutes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [profNames, setProfNames] = useState([]);

  const [selectedInstitute, setSelectedInstitute] = useState(institute);
  const [selectedCourse, setSelectedCourse] = useState(course);
  const [selectedProfs, setSelectedProfs] = useState([]);

  const [type, setType] = useState('Other');
  const [semester, setSemester] = useState(SEMESTER.FALL);
  const [description, setDescription] = useState('');
  const [year, setYear] = useState(new Date());
  const [price, setPrice] = useState(1);

  useEffect(() => {
    (async function () {
      const instituteNames = await getInstituteNames();
      setInstitutes(instituteNames);
    })()
  }, []);

  useEffect(() => {
    (async function () {
      setCourses(await getCourseNames(selectedInstitute));
      setProfNames(await getProfNamesByInstitute(selectedInstitute));
    })()
  }, [selectedInstitute]);

  async function onDrop(acceptedFiles) {
    // Delete last upload
    if (prevFile) {
      prevFile.xhr.abort();
      await deleteUploadedFile(uploadedFileId);
    }

    if (acceptedFiles[0]) {
      const [promise, xhr] = uploadFile(acceptedFiles[0], (progress) => {
        setUploadProgress(progress);
      });
      const res = await promise;
      setUploadedFileId(res.id);
      setPrevFile({...acceptedFiles[0], xhr});
    }
  }

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({multiple: false, onDrop});

  const submit = () => {
    (async function () {
      await uploadMaterial({
        courseCode: selectedCourse, instituteName: selectedInstitute, year: year.getFullYear(), semester, description,
        profs: selectedProfs, type, price, fileId: uploadedFileId
      });
      history.push(`/course/${selectedInstitute}/${selectedCourse}/material`);
    })();
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  }


  return (
    <Container>

      <Container maxWidth="lg">
        <Box sx={{paddingTop: '40px', display: 'flex'}}/>
        <StyledPaper elevation={5}>
          <Typography variant="h4" sx={{
            color: 'rgb(0,32,81)',
            fontWeight: 400,
            marginBottom: 3,
            display: 'flex'
          }}>
            Upload Course Materials
          </Typography>

          <Autocomplete
            sx={{pb: 3}}
            options={institutes}
            disableClearable
            disabled={!!institute}
            defaultValue={selectedInstitute}
            onInputChange={(e, value) => setSelectedInstitute(value)}
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

          <Autocomplete
            sx={{pb: 3}}
            options={courses}
            disableClearable
            disabled={!!course}
            defaultValue={selectedCourse}
            onInputChange={(e, value) => setSelectedCourse(value)}
            renderInput={(params) => (
              <TextField {...params}
                         label="Course Code"
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


          <Grid container spacing={2}>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  views={['year']}
                  value={year}
                  onChange={(value) => setYear(value)}
                  label="Year"
                  renderInput={(params) => <TextField {...params} fullWidth/>}
                />
              </LocalizationProvider>

            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                sx={{pb: 3}}
                defaultValue={semester}
                onInputChange={(e, value) => setSemester(value)}
                renderInput={params => <TextField {...params} label="Semester"/>}
                options={Object.values(SEMESTER)}
              />
            </Grid>
          </Grid>

          <Autocomplete
            sx={{pb: 3}}
            multiple
            renderInput={params => <TextField {...params} label="Instructors"/>}
            options={profNames}
            onInputChange={(e, value) => setSelectedProfs(value)}
          />

          <TextField
            sx={{pb: 3}}
            fullWidth
            label="Price"
            value={price}
            type="number"
            onChange={e => setPrice(e.target.value)}
            InputProps={{
              startAdornment:
                <InputAdornment position="start">
                  <AttachMoney/>
                </InputAdornment>
            }}
          />

          <TextField
            multiline
            fullWidth
            minRows={4}
            label="Descriptions"
            onChange={e => setDescription(e.target.value)}
          />

          <FormControl component="fieldset" variant="outlined">
            <FormLabel component="legend" sx={{pt: 3}}>Material Type</FormLabel>
            <RadioGroup row onChange={handleTypeChange} value={type}>
              <FormControlLabel value={MATERIAL_TYPE.FINAL_EXAM}
                                control={<Radio color="primary"/>}
                                label="Final Exam"/>

              <FormControlLabel value={MATERIAL_TYPE.PAST_EXAM}
                                control={<Radio color="primary"/>}
                                label="Past Exam"/>

              <FormControlLabel value={MATERIAL_TYPE.PROFESSOR_COURSE_NOTE}
                                control={<Radio color="primary"/>}
                                label="Professor Course Note"/>

              <FormControlLabel value={MATERIAL_TYPE.STUDENT_COURSE_NOTE}
                                control={<Radio color="primary"/>}
                                label="Student Course Note"/>

              <FormControlLabel value={"Other"}
                                control={<Radio color="primary"/>}
                                label="Other"/>
            </RadioGroup>
          </FormControl>

          <Divider/>
          <section className="container">
            <StyledContainer {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag some files here, or click to select files</p>
            </StyledContainer>
            <aside>
              {acceptedFiles[0] &&
              (<>
                  <Typography variant="h6" fontSize={16} pt={1}>
                    Uploaded File:
                  </Typography>
                  <Typography variant="h6" fontSize={16} pt={1}>
                    {Math.round(uploadProgress * 100)}% - {acceptedFiles[0].path} ({acceptedFiles[0].size} Bytes)
                  </Typography>
                </>
              )}

            </aside>
          </section>


          <Divider/>
          <SubmitButton
            startIcon={<CloudUploadIcon fontSize="large"/>}
            color="info"
            variant="contained"
            sx={{
              marginTop: 3,
            }}
            onClick={submit}
            loading={waiting}>
            Upload
          </SubmitButton>

        </StyledPaper>
      </Container>
    </Container>
  )
}
import React, {useCallback, useEffect, useState} from 'react';
import {
  CardMedia,
  Typography,
  Box,
  FormControl,
  Select,
  Input,
  MenuItem,
  InputLabel,
  Autocomplete, TextField, Rating, Tooltip, FormControlLabel, Checkbox, Button, Paper
} from "@mui/material";

import {LocalizationProvider, DatePicker} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {getJson, postJson} from "../../api/helpers";
import InfoIcon from '@mui/icons-material/Info';

const cfxScanAddr = "https://testnet.confluxscan.io/transaction/";

const semesterOptions = [
  'Fall',
  'Summer',
  'Winter',
];

const isSemesterInclude = (semesters, semester) => {
  return semesters.includes(semester)
}

const isProfInclude = (profs, prof) => {
  return profs.includes(prof)
}

const ratingFormStyle = {
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'space-between',
}

export default function CourseRatings({courseName: courseCode, instituteName, addRatingPanelRef}) {

  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    console.log(instituteName);
    const url = '/api/rating?institute=' + instituteName + '&course=' + courseCode;
    const tmp = await getJson(url)
    if (tmp.error) {
      alert(tmp.error)
    } else {
      setData(tmp.data);
      setProf(Array.from(new Set(tmp.data.map((obj) => obj.prof))))
      console.log(tmp);
    }
    return tmp;
  }, [courseCode, instituteName]);

  useEffect(() => {
    getData();
  }, [getData]);

  const [semesters, setSemester] = useState(semesterOptions);
  const handleChangeSemesterMultiple = (event) => {
    setSemester(event.target.value);
  }

  const profOptions = Array.from(new Set(data.map((obj) => obj.prof)));
  const [profs, setProf] = useState(profOptions);
  const handleChangeProfMultiple = (event) => {
    setProf(event.target.value);
  }

  const [newProf, setNewProf] = useState("");
  const [newScore, setNewScore] = useState(0);
  const [newComment, setNewComment] = useState("");
  // TODO: get this value props
  // const [newCourse, setNewCourse] = useState("");
  const [newYear, setNewYear] = useState(new Date());
  const [newSemester, setNewSemester] = useState(semesterOptions[0]);
  const [onChain, setOnChain] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = '/api/rating';
    const newRating = {
      institute: instituteName,
      course: courseCode,
      prof: newProf,
      score: newScore,
      comment: newComment,
      year: newYear.getFullYear(),
      semester: newSemester,
      onChain: onChain
    };
    // console.log(newRating);
    let res = await postJson(url, newRating);
    if (!res.error) {
      await getData();
    } else {
      alert(res.error);
    }
  }

  const handleNewProfChange = (event, value) => {
    setNewProf(value);
  }

  const handleNewSemesterChange = (event, value) => {
    setNewSemester(value);
  }

  const handleOnChain = (event, value) => {
    setOnChain(value);
  }

  return (
    <React.Fragment>
      <Box pl={3}>
        <FormControl width='100px' style={{margin: 5}} variant="outlined">
          <InputLabel id="semester-selection-label">Semester</InputLabel>
          <Select
            labelId="semester-selection-label"
            id="semester-selection"
            multiple
            value={semesters}
            onChange={handleChangeSemesterMultiple}
            input={<Input/>}
            style={{minWidth: 120}}
          >
            {semesterOptions.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl width='100px' style={{margin: 5}}>
          <InputLabel id="prof-selection-label">Prof</InputLabel>
          <Select
            labelId="prof-selection-label"
            id="prof-selection"
            multiple
            value={profs}
            onChange={handleChangeProfMultiple}
            input={<Input/>}
            style={{minWidth: 120}}
          >
            {profOptions.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box width="90%">
        {
          data.map(rating => (
            isSemesterInclude(semesters, rating.semester) &&
            isProfInclude(profs, rating.prof) &&
            <Box border={1} width={1} m={3} display="flex" key={rating._id}>
              <Box style={{width: '20%'}} borderRight={1}>
                <Box borderBottom={1} display="flex">
                  <Typography fontWeight="fontWeightBold" pr={1}>User:</Typography>
                  <Typography>{rating.user}</Typography>
                </Box>
                <CardMedia
                  style={{
                    height: 0,
                    paddingTop: '100%', // 16:9,
                    marginTop: '30'
                  }}
                  image='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                  title="user image"
                />
              </Box>
              <Box style={{width: '80%'}}>
                <Box borderBottom={1} display="flex" justifyContent="flex-start">
                  <Typography fontWeight="fontWeightBold" pl={1} pr={1}>Prof:</Typography>
                  <Typography>{rating.prof}</Typography>
                  <Typography fontWeight="fontWeightBold" pl={1} pr={1}>Score:</Typography>
                  <Typography>{rating.score}/5</Typography>
                  <Typography fontWeight="fontWeightBold" pl={1} pr={1}>Year:</Typography>
                  <Typography>{rating.year}</Typography>
                  <Typography fontWeight="fontWeightBold" pl={1} pr={1}>Semester:</Typography>
                  <Typography>{rating.semester}</Typography>
                  {rating.chainTransactionID &&
                  <Tooltip title={<a style={{color: 'white'}} target="_blank" rel="noreferrer"
                                     href={cfxScanAddr + rating.chainTransactionID}>Visit comment content on chain</a>}
                           placement="top-start">
                    <InfoIcon/>
                  </Tooltip>}
                </Box>
                <Box pl={1} display="flex" justifyContent="flex-start">
                  <Box style={{width: '80%'}}>
                    <Typography fontWeight="fontWeightBold">Comment:</Typography>
                    <Typography style={{display: 'inline-block'}}>{rating.comment}</Typography>
                  </Box>
                  <Box style={{width: '30%'}} display='flex' flexGrow={1} borderLeft={1}>
                    <Box>
                      <CardMedia
                        style={{
                          height: "100px",
                          width: "100px"
                        }}
                        image='https://www.kindpng.com/picc/m/136-1366147_thumb-up-icon-color-thumbs-up-png-transparent.png'
                        title="Like"
                        // TODO: link to like or dislike
                      />
                      <Typography align='center'>{rating.like}</Typography>
                    </Box>
                    <Box pl={5}>
                      <CardMedia
                        style={{
                          height: "100px",
                          width: "100px",
                        }}
                        image='https://www.pngitem.com/pimgs/m/366-3667940_thumbs-down-icon-png-transparent-png.png'
                        title="Unlike"
                        // TODO: link to like or dislike
                      />
                      <Typography align='center'>{rating.unlike}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))
        }
      </Box>
      <Paper variant={"outlined"} sx={{p: 3, m: 3, width: '90%'}} ref={addRatingPanelRef}>
        <Typography variant='h6'>Add a New Rating</Typography>
        <form onSubmit={handleSubmit} style={ratingFormStyle}>
          <Box pb={2}>
            <Rating
              name="simple-controlled"
              value={newScore}
              onChange={(event, newValue) => {
                setNewScore(newValue);
              }}
              stype={{margin: '10px'}}
            />
          </Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              views={["year"]}
              label="Year"
              value={newYear}
              onChange={(newValue) => {
                setNewYear(newValue);
              }}
              renderInput={(params) => <TextField {...params} required/>}
            />
          </LocalizationProvider>
          <Autocomplete
            sx={{pb: 1}}
            freeSolo
            options={profOptions}
            disableClearable
            onInputChange={handleNewProfChange}
            renderInput={(params) => (
              <TextField {...params} label="Prof" margin="normal" fullWidth required/>
            )}
          />
          <Autocomplete
            sx={{pb: 2}}
            renderInput={(params) => <TextField {...params} label="Semester" fullWidth required/>}
            options={semesterOptions}
            required
            onInputChange={handleNewSemesterChange}
          />
          <TextField
            label="Comment"
            multiline
            fullWidth
            value={newComment}
            required
            minRows={3}
            onChange={(e) => setNewComment(e.target.value)}>
          </TextField>
          <Box sx={{pt: 2}}>
            <Button variant="contained" sx={{mr: 3}} type="submit">Add Rating</Button>
            <FormControlLabel
              control={
                <Checkbox
                  checked={onChain}
                  onChange={handleOnChain}
                  name="checkedChain"
                  color="primary"
                />
              }
              label="Store on CFX chain?"
            />
          </Box>

        </form>
      </Paper>
    </React.Fragment>
  )
}


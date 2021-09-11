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
  Autocomplete, TextField, Rating, Tooltip, FormControlLabel, Checkbox, Button, Paper, Divider, Link, IconButton
} from "@mui/material";

import {LocalizationProvider, DatePicker} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {getJson, postJson} from "../../api/helpers";
import InfoIcon from '@mui/icons-material/Info';
import {ThumbUp} from "@mui/icons-material";

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
      <Box pt={2}>
        <FormControl sx={{minWidth: 120}}>
          <InputLabel>Semester</InputLabel>
          <Select
            label="Semester"
            multiple
            value={semesters}
            onChange={handleChangeSemesterMultiple}
          >
            {semesterOptions.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{minWidth: 120, ml: 3}}>
          <InputLabel>Prof</InputLabel>
          <Select
            label="Prof"
            multiple
            value={profs}
            onChange={handleChangeProfMultiple}
          >
            {profOptions.map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box>
        {
          data.map(rating => (
            isSemesterInclude(semesters, rating.semester) &&
            isProfInclude(profs, rating.prof) &&
            <Paper elevation={4} sx={{my: 3, p: 2, width: '80%'}} key={rating._id}>
              {rating.chainTransactionID && (
                <Button sx={{float: 'right', top: 0, right: 0}} target="_blank" href={cfxScanAddr + rating.chainTransactionID} startIcon={<InfoIcon/>}>
                  on-chain TX
                </Button>
              )}
              <Typography variant="h6" fontWeight={500} pl={'4px'}>{rating.year} {rating.semester}</Typography>
              <Box display="flex" alignItems="center" py={1}>
                <Rating
                  value={rating.score}
                  readOnly
                />
              </Box>
              <Divider/>

              <div>
                <Box display="flex" justifyContent="flex-start">
                  <Typography fontWeight="fontWeightBold" pl="4px" pr={1}>Prof:</Typography>
                  <Typography pr={3}>{rating.prof}</Typography>
                  <Typography fontWeight="fontWeightBold" pr={1}>Rated By:</Typography>
                  <Typography pr={3}>{rating.user}</Typography>
                </Box>
                <Box pl={1} display="flex" justifyContent="flex-start">
                  <Box style={{width: '80%', whiteSpace: 'pre-wrap'}}>
                    <Typography>{'\n'}{rating.comment}</Typography>
                  </Box>
                  <Box sx={{width: '30%', pl: 3}} display='flex' flexGrow={1} borderLeft={1} borderColor="rgb(0,0,0,0.15)">
                    <Box>
                      <IconButton size="large">
                        <ThumbUp/>
                      </IconButton>
                      <Typography align='center'>{rating.like}</Typography>
                    </Box>
                    <Box pl={5}>
                      <IconButton size="large">
                        <ThumbUp/>
                      </IconButton>
                      <Typography align='center'>{rating.unlike}</Typography>
                    </Box>
                  </Box>
                </Box>
              </div>
            </Paper>
          ))
        }
      </Box>
      <Paper elevation={5} sx={{p: 3, my: 6, width: '80%'}} ref={addRatingPanelRef}>
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


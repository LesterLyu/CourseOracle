import React, {useEffect, useState} from 'react';
import {
    CssBaseline,
    Typography,
    Box,
    FormControl,
    Select,
    Input,
    MenuItem,
    InputLabel,
    Autocomplete, TextField, Stack
} from "@material-ui/core";

import CardMedia from "@material-ui/core/CardMedia";
import DatePicker from '@material-ui/lab/DatePicker';
import {LocalizationProvider} from "@material-ui/lab";
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import { useParams } from "react-router-dom";
import {getJson, postJson} from "../../api/helpers";


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


export default function CourseRatings({courseName, insituteName}) {

    const [data, setData] = useState([]);
    // setData();
    async function getData(){
        console.log(instituteName);
        const url = '/api/rating?institute=' + instituteName + '&course=' + courseCode;
        const tmp = await getJson(url)
        if (tmp.error){
            alert(tmp.error)
        } else {
            setData(tmp.data);
            console.log(tmp);
        }
        return tmp;
    }

    useEffect(async () => {
        async function callGetData(){
            const tmp = await getData()
        }
        await callGetData()
    }, [])
    const params = useParams();
    const instituteName = params.institute;
    const courseCode = params.course;
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
    const [newCourse, setNewCourse] = useState(""); // TODO: get this value props
    const [newYear, setNewYear] = useState(new Date());
    const [newSemester, setNewSemester] = useState(semesterOptions[0]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = '/api/rating';
        const newRating = { institute: instituteName,
            course: courseCode,
            prof: newProf,
            score: newScore,
            comment: newComment,
            year: newYear.getFullYear(),
            semester: newSemester,};
        let res = await postJson(url, newRating);
        // console.log(res);
        if (!res.error){
            await getData();
        }else{
            alert(res.error);
        }
    }

    const handleNewProfChange = (event, value) => {
        setNewProf(value);
    }

    const handleNewSemesterChange = (event, value) => {
        setNewSemester(value);
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
                        input={<Input />}
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
                        input={<Input />}
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
                            <Box style={{width:'20%'}} borderRight={1}>
                                <Box borderBottom={1}  display="flex">
                                    <Typography fontWeight="fontWeightBold" pr={1}>User:</Typography>
                                    <Typography>{rating.user}</Typography>
                                </Box>
                                <CardMedia
                                    style={{
                                        height: 0,
                                        paddingTop: '100%', // 16:9,
                                        marginTop:'30'
                                    }}
                                    image='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
                                    title="user image"
                                />
                            </Box>
                            <Box style={{width:'80%'}}>
                                <Box borderBottom={1} display="flex" justifyContent="flex-start">
                                    <Typography fontWeight="fontWeightBold" pl={1} pr={1}>Prof:</Typography>
                                    <Typography>{rating.prof}</Typography>
                                    <Typography fontWeight="fontWeightBold" pl={1} pr={1}>Score:</Typography>
                                    <Typography>{rating.score}/5</Typography>
                                    <Typography fontWeight="fontWeightBold" pl={1} pr={1}>Year:</Typography>
                                    <Typography>{rating.year}</Typography>
                                    <Typography fontWeight="fontWeightBold" pl={1} pr={1}>Semester:</Typography>
                                    <Typography>{rating.semester}</Typography>
                                </Box>
                                <Box pl={1} display="flex" justifyContent="flex-start">
                                    <Box style={{width:'80%'}}>
                                        <Typography fontWeight="fontWeightBold">Comment:</Typography>
                                        <Typography style={{display: 'inline-block'}}>{rating.comment}</Typography>
                                    </Box>
                                    <Box style={{width:'30%'}} display='flex' flexGrow={1} borderLeft={1}>
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
            <Box width="90%" p={3} m={3} border={1} >
                <Typography variant='h6'>Add a New Rating</Typography>
                <form onSubmit={handleSubmit}>
                    <label>Score</label>
                    <input
                        type="number"
                        min='0'
                        max='5'
                        required
                        value={newScore}
                        onChange={(e)=> setNewScore(e.target.value)}
                    />
                    <label>Year</label>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            views={["year"]}
                            label="Year"
                            value={newYear}
                            onChange={(newValue) => {
                                setNewYear(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} helperText={null}/>}
                        />
                    </LocalizationProvider>
                    <Box style={{width:'20%'}}>
                        <Autocomplete
                            freeSolo
                            options={profOptions}
                            disableClearable
                            onInputChange={handleNewProfChange}
                            renderInput={(params) => (
                                <TextField {...params} label="Prof" margin="normal" variant="outlined" />
                            )}
                        />
                    </Box>
                    <Box style={{width:'20%'}}>
                        <Autocomplete
                            renderInput={(params) => <TextField {...params} label="Semester" variant="outlined" />}
                            options={semesterOptions}
                            onInputChange={handleNewSemesterChange}
                        />
                    </Box>
                    <label>Comment</label>
                    <textarea
                        required
                        value={newComment}
                        rows="4" cols="50"
                        onChange={(e) => setNewComment(e.target.value)}>
                    </textarea>
                    <button>Add Rating</button>
                </form>
            </Box>
        </React.Fragment>
    )
}


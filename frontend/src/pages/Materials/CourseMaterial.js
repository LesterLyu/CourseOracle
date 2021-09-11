import React, {useState, useEffect} from 'react';
import {
  Button, Card, CardActions, CardContent, Grid, Typography, styled,
  Popover, IconButton, Box, Chip, CardMedia, Divider
} from "@mui/material"
import Checkout from './Checkout.js'
import RateMaterial from './RateMaterial.js'
import RewardOfferer from './RewardOfferer'
import {getMaterials} from "../../api/material"
import {MATERIAL_TYPE} from "../../constants";
import {ThumbDown, ThumbUp} from "@mui/icons-material";

const StyledCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));


export default function CourseMaterial({courseName, instituteName}) {
  // const [courseInfo, setCourseInfo] = useState({
  //   professors: []
  // })
  const [anchorPosition, setAnchorPosition] = React.useState(null);
  const [currId, setCurrId] = React.useState(null);

  const [materials, setMaterials] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    (async function () {
      const data = await getMaterials(courseName, instituteName);
      if (data.error) {
        alert(data.error)
      } else {
        // setCourseInfo(data.course);
        setMaterials(data.courseMaterial);
        setSelectedMaterials(data.courseMaterial);
      }
    })();
  }, [courseName, instituteName])


  const handleClick = (event) => {
    setCurrId(event.target.value)
    setAnchorPosition({top: event.clientY, left: event.clientX});
  };

  const handleClose = () => {
    setAnchorPosition(null);
  };

  const isOpen = (id) => {
    return id === currId && Boolean(anchorPosition)
  };

  const handleChangeType = (type) => () => {
    setSelectedType(type);
    if (type === 'All') {
      setSelectedMaterials(materials);
    } else {
      setSelectedMaterials(materials.filter((material) => material.type === type))
    }
  }

  return (
    <React.Fragment>
      <div style={{marginTop: "5px"}}>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant={selectedType === 'All' ? 'contained' : 'outlined'} color="primary"
                    onClick={handleChangeType('All')}>
              All
            </Button>
          </Grid>
          <Grid item>
            <Button variant={selectedType === MATERIAL_TYPE.STUDENT_COURSE_NOTE ? 'contained' : 'outlined'}
                    color="primary" onClick={handleChangeType(MATERIAL_TYPE.STUDENT_COURSE_NOTE)}>
              Student Course Note
            </Button>
          </Grid>
          <Grid item>
            <Button variant={selectedType === MATERIAL_TYPE.PROFESSOR_COURSE_NOTE ? 'contained' : 'outlined'}
                    color="primary" onClick={handleChangeType(MATERIAL_TYPE.PROFESSOR_COURSE_NOTE)}>
              Professor Course Note
            </Button>
          </Grid>
          <Grid item>
            <Button variant={selectedType === MATERIAL_TYPE.PAST_EXAM ? 'contained' : 'outlined'} color="primary"
                    onClick={handleChangeType(MATERIAL_TYPE.PAST_EXAM)}>
              Past Exam
            </Button>
          </Grid>
          <Grid item>
            <Button variant={selectedType === MATERIAL_TYPE.FINAL_EXAM ? 'contained' : 'outlined'} color="primary"
                    onClick={handleChangeType(MATERIAL_TYPE.FINAL_EXAM)}>
              Final Exam
            </Button>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={4} sx={{pt: 4}}>
        {selectedMaterials.map((m) => (
          <Grid item key={m.id} xs={12} sm={6} md={4}>
            <StyledCard elevation={3}>
              {/*<Description sx={{fontSize: '10vw', width: 100, color: 'rgb(67,161,112)', height: 'initial'}}/>*/}

              <CardMedia
                sx={{paddingTop: '56.25%', filter: 'blur(1px) brightness(80%)'}}
                image={process.env.PUBLIC_URL + '/blur-doc.png'}
                title="Preview"
              />
              <Divider/>
              <CardContent style={{flexGrow: 1}}>
                <Typography gutterBottom variant="h5" component="h2">
                  {m.semester[0].toUpperCase()}{m.semester.slice(1)} {m.year}
                </Typography>
                <Chip label={m.type}/>
                <Chip color="info" sx={{ml: 1}} label={`Price: ${m.price}`}/>
                {m.prof?.length > 0 && <Typography variant="body2">
                  Prof: {m.prof.map((p) => <a key={p} href={'profs/' + p}><Chip>{p + ' '}</Chip></a>)}
                </Typography>}
                <Typography variant="body2" mt={2}>
                  Offered By: {m.offer_by}
                </Typography>
              </CardContent>
              <CardActions sx={{display: 'flex'}}>
                <Box display="flex" alignItems="center" flexGrow={1} ml={1}>
                  <Typography>{m.like}</Typography>
                  <IconButton size="large">
                    <ThumbUp/>
                  </IconButton>
                  <Typography>{m.unlike}</Typography>
                  <IconButton size="large">
                    <ThumbDown/>
                  </IconButton>
                </Box>
                {m.status === 0 &&
                <Button value={m.id} variant="contained" color="primary" onClick={handleClick} sx={{mr: 2}}>
                  Buy
                </Button>
                }

                {m.status > 0 &&
                <Button value={m.id} variant="outlined" color="primary" sx={{mr: 1}}>
                  View
                </Button>
                }

                {m.status === 1 &&
                <Button value={m.id} variant="outlined" color="primary" onClick={handleClick} sx={{mr: 2}}>
                  Rate
                </Button>
                }

                {m.status === 2 &&
                <Button value={m.id} variant="outlined" color="secondary" onClick={handleClick} sx={{mr: 2}}>
                  Reward
                </Button>
                }
                <Popover
                  open={isOpen(m.id)}
                  anchorReference="anchorPosition"
                  anchorPosition={anchorPosition}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  {m.status === 0 &&
                  <Checkout
                    product={m} handleClose={handleClose}
                    materials={materials} setMaterials={setMaterials}
                  />
                  }
                  {m.status === 1 &&
                  <RateMaterial
                    product={m} handleClose={handleClose}
                    materials={materials} setMaterials={setMaterials}
                  />
                  }
                  {m.status === 2 &&
                  <RewardOfferer
                    product={m} handleClose={handleClose}
                  />
                  }
                </Popover>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
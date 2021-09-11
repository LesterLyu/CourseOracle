import React, {useState, useEffect} from 'react';
import {
  Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, styled,
  Popover
} from "@mui/material"
import Checkout from './Checkout.js'
import RateMaterial from './RateMaterial.js'
import RewardOfferer from './RewardOfferer'
import {getMaterials} from "../../api/material"
import {MATERIAL_TYPE} from "../../constants";

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
            <StyledCard>
              <CardMedia
                style={{paddingTop: '56.25%'}}
                image={m.cover_page}
                title="Image title"
              />
              <CardContent style={{flexGrow: 1}}>
                <Typography gutterBottom variant="h5" component="h2">
                  semester: {m.year} - {m.semester}
                </Typography>
                {/* <Typography>
                      id: {m.id}
                    </Typography> */}
                <Typography>
                  price: {m.price}
                </Typography>
                <Typography>
                  type: {m.type}
                </Typography>
                <Typography>
                  offer_by: {m.offer_by}
                </Typography>
                <Typography>
                  prof: {m.prof.map((p) => <a key={p} href={'profs/' + p}>{p + ' '}</a>)}
                </Typography>
                <Typography>
                  like: {m.like}
                </Typography>
                <Typography>
                  unlike: {m.unlike}
                </Typography>
              </CardContent>
              <CardActions>


                {m.status === 0 &&
                <Button value={m.id} variant="contained" color="primary" onClick={handleClick}>
                  Buy
                </Button>
                }

                {m.status === 1 &&
                <Button value={m.id} variant="outlined" color="primary" onClick={handleClick}>
                  Rate
                </Button>
                }

                {m.status === 2 &&
                <Button value={m.id} variant="outlined" color="secondary" onClick={handleClick}>
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
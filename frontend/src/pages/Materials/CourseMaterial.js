import React, {useState, useEffect, useContext} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {styled} from '@material-ui/core'
import Container from '@material-ui/core/Container';
import Popover from '@material-ui/core/Popover'
import Checkout from './Checkout.js'
import RateMaterial from './RateMaterial.js'
import RewardOfferer from './RewardOfferer'
import {UserContext} from "../../contexts";
import {getJson} from "../../api/helpers"
import Link from "../../components/Link";

const StyledCard = styled(Card)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));


export default function CourseMaterial({courseName, instituteName}) {
  const userContext = useContext(UserContext);

  const [courseInfo, setCourseInfo] = useState({
    professors: []
  })
  const [anchorPosition, setAnchorPosition] = React.useState(null);
  const [currId, setCurrId] = React.useState(null);
  const [materials, setMaterials] = useState([])


  async function getData() {
    const url = '/api/materials?course=' + courseName + '&institution=' + instituteName + '&buyerEmail=' + userContext.email;
    const tmp = await getJson(url)
    if (tmp.error) {
      alert(tmp.error)
    } else {
      setCourseInfo(tmp.course)
      setMaterials(tmp.courseMaterial);
    }
    return tmp;
  }

  useEffect(async () => {
    async function callGetData() {
      const tmp = await getData()
    }

    callGetData()
  }, [])


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

  const [buttonVariant1, setButtonVariant1] = useState("contained")
  const [buttonVariant2, setButtonVariant2] = useState("outlined")
  const [buttonVariant3, setButtonVariant3] = useState("outlined")
  const [buttonVariant4, setButtonVariant4] = useState("outlined")
  const [buttonVariant5, setButtonVariant5] = useState("outlined")

  async function buttonHandler1() {
    setButtonVariant1("contained")
    setButtonVariant2("outlined")
    setButtonVariant3("outlined")
    setButtonVariant4("outlined")
    setButtonVariant5("outlined")
    const data = await getData()
    setMaterials(data.courseMaterial)
  }

  async function buttonHandler2() {
    setButtonVariant1("outlined")
    setButtonVariant2("contained")
    setButtonVariant3("outlined")
    setButtonVariant4("outlined")
    setButtonVariant5("outlined")
    const data = await getData()
    setMaterials(data.courseMaterial.filter((course) => {
      return course.type === "Student Course Note"
    }))
  }

  async function buttonHandler3() {
    setButtonVariant1("outlined")
    setButtonVariant2("outlined")
    setButtonVariant3("contained")
    setButtonVariant4("outlined")
    setButtonVariant5("outlined")
    const data = await getData()
    setMaterials(data.courseMaterial.filter((course) => {
      return course.type === "Professor Course Note"
    }))
  }

  async function buttonHandler4(e) {
    setButtonVariant1("outlined")
    setButtonVariant2("outlined")
    setButtonVariant3("outlined")
    setButtonVariant4("contained")
    setButtonVariant5("outlined")
    const data = await getData()
    setMaterials(data.courseMaterial.filter((course) => {
      return course.type === "Past Exam"
    }))
  }

  async function buttonHandler5(e) {
    setButtonVariant1("outlined")
    setButtonVariant2("outlined")
    setButtonVariant3("outlined")
    setButtonVariant4("outlined")
    setButtonVariant5("contained")
    const data = await getData()
    setMaterials(data.courseMaterial.filter((course) => {
      return course.type === "Final Exam"
    }))
  }


  return (
    <React.Fragment>
      <div style={{marginTop: "5px"}}>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant={buttonVariant1} color="primary" onClick={buttonHandler1}>
              All
            </Button>
          </Grid>
          <Grid item>
            <Button variant={buttonVariant2} color="primary" onClick={buttonHandler2}>
              Student Course Note
            </Button>
          </Grid>
          <Grid item>
            <Button variant={buttonVariant3} color="primary" onClick={buttonHandler3}>
              Professor Course Note
            </Button>
          </Grid>
          <Grid item>
            <Button variant={buttonVariant4} color="primary" onClick={buttonHandler4}>
              Past Exam
            </Button>
          </Grid>
          <Grid item>
            <Button variant={buttonVariant5} color="primary" onClick={buttonHandler5}>
              Final Exam
            </Button>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={4} sx={{pt: 4}}>
        {materials.map((m) => (
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
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container';
import Popover from '@material-ui/core/Popover'
import Checkout from './Checkout.js'
import RateMaterial from './RateMaterial.js'
import RewardOfferer from './RewardOfferer'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: 2,
  },
  heroContent: {
    padding: 8,
  },
  heroButtons: {
    marginTop: 4,
  },
  cardGrid: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  materials: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const DATA = [  
{
  id: 1,
  price: 5,
  school: 'University of Toronto',
  course: 'CSC148',
  cover_page: "https://source.unsplash.com/random",
  year: 2018,
  semester: 'fall',
  type: 'Past Exam',
  prof: ['David Liu'], 
  offer_by: 'student1',
  like: 199,
  unlike: 2,
  status: 0, // 0: 未购买 1: 已购买未评价 2: 已评价
},
{
  id: 2,
  price: 5,
  school: 'University of Toronto',
  course: 'CSC148',
  cover_page: "https://source.unsplash.com/random",
  year: 2019,
  semester: 'fall',
  type: 'Professor Course Note',
  prof: ['xxxxxx', 'yyyyyyy'], 
  offer_by: 'student2',
  like: 199,
  unlike: 2,
  status: 0,
},
{
  id: 3,
  price: 5,
  school: 'University of Toronto',
  course: 'CSC148',
  cover_page: "https://source.unsplash.com/random",
  year: 2019,
  semester: 'fall',
  type: 'Student Course Note',
  prof: ['xxxxxx', 'yyyyyyy'], 
  offer_by: 'student3',
  like: 199,
  unlike: 2,
  status: 0,
},
{
  id: 4,
  price: 5,
  school: 'University of Toronto',
  course: 'CSC148',
  cover_page: "https://source.unsplash.com/random",
  year: 2019,
  semester: 'fall',
  type: 'Past Exam',
  prof: ['xxxxxx', 'yyyyyyy'], 
  offer_by: 'student4',
  like: 199,
  unlike: 2,
  status: 2,
},
{
  id: 5,
  price: 5,
  school: 'University of Toronto',
  course: 'CSC148',
  cover_page: "https://source.unsplash.com/random",
  year: 2019,
  semester: 'winter',
  type: 'Final Exam',
  prof: ['xxxxxx', 'yyyyyyy'], 
  offer_by: 'student5',
  like: 199,
  unlike: 2,
  status: 1,
}
]


export default function CourseMaterial() {
  const classes = useStyles();
  const [courseInfo, setCourseInfo] = useState({
    name: window.location.href.split('/')[window.location.href.split('/').length - 1],
    school: 'University of Toronto',
    description: 'CSC148 is an Introduction to Computer Science course. This course teaches you basic data structures (e.g. Stack, Queues, etc.) and powerful concepts like Object Oriented Programming and Recursion.',
    professors: ['David Liu', 'xxxxxx', 'yyyyyyy'], 
    difficulty: 3
  })

  const [anchorPosition, setAnchorPosition] = React.useState(null);
  const [currId, setCurrId] = React.useState(null);

  const handleClick = (event) => {
    setCurrId(event.target.value)
    setAnchorPosition({ top: event.clientY, left: event.clientX });
  };

  const handleClose = () => {
    setAnchorPosition(null);
  };

  const isOpen = (id) => {
    return id === parseInt(currId) && Boolean(anchorPosition)
  };

  const [buttonVariant1, setButtonVariant1] = useState("contained")
  const [buttonVariant2, setButtonVariant2] = useState("outlined")
  const [buttonVariant3, setButtonVariant3] = useState("outlined")
  const [buttonVariant4, setButtonVariant4] = useState("outlined")
  const [buttonVariant5, setButtonVariant5] = useState("outlined")

  function buttonHandler1(){
    setButtonVariant1("contained")
    setButtonVariant2("outlined")
    setButtonVariant3("outlined")
    setButtonVariant4("outlined")
    setButtonVariant5("outlined")
    setMaterials(DATA)
  }

  function buttonHandler2(){
    setButtonVariant1("outlined")
    setButtonVariant2("contained")
    setButtonVariant3("outlined")
    setButtonVariant4("outlined")
    setButtonVariant5("outlined")
    setMaterials(DATA.filter((course) => {
      return course.type === "Student Course Note"
    }))
  }

  function buttonHandler3(){
    setButtonVariant1("outlined")
    setButtonVariant2("outlined")
    setButtonVariant3("contained")
    setButtonVariant4("outlined")
    setButtonVariant5("outlined")
    setMaterials(DATA.filter((course) => {
      return course.type === "Professor Course Note"
    }))
  }

  function buttonHandler4(e){
    setButtonVariant1("outlined")
    setButtonVariant2("outlined")
    setButtonVariant3("outlined")
    setButtonVariant4("contained")
    setButtonVariant5("outlined")
    setMaterials(DATA.filter((course) => {
      return course.type === "Past Exam"
    }))
  }

  function buttonHandler5(e){
    setButtonVariant1("outlined")
    setButtonVariant2("outlined")
    setButtonVariant3("outlined")
    setButtonVariant4("outlined")
    setButtonVariant5("contained")
    setMaterials(DATA.filter((course) => {
      return course.type === "Final Exam"
    }))
  }
  


  const [materials, setMaterials] = useState(DATA)
  

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {courseInfo.name}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              school: {courseInfo.school} 
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              professors: {courseInfo.professors.map((p) => <a key={p} href={'prof/' + p}>{p + ' '}</a>)}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              difficulty: {courseInfo.difficulty} (这一行可以要也可以不要。。)
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {courseInfo.description}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
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
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {materials.map((m) => (
              <Grid item key={m.id} xs={12} sm={6} md={4}>
                <Card className={classes.materials}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={m.cover_page}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      semester: {m.year} {m.semester}
                    </Typography>
                    <Typography>
                      id: {m.id}
                    </Typography>
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
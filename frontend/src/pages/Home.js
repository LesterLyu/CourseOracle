import React from 'react';
// See https://next.material-ui.com/system/styled/
import {styled, alpha} from '@material-ui/core/styles';
import {Container, InputBase, Paper} from "@material-ui/core";
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

export default function HomePage() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
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
                  <Paper>
                    <Search>
                      <SearchIconWrapper>
                        <SearchIcon/>
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search for course…"
                      />
                    </Search>
                  </Paper>
                </Grid>

                <Grid item>
                  <Box sx={{pt: 2}}>
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
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                          />
                        }
                        label="Course Past Exams"
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

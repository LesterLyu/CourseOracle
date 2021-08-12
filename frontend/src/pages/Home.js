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
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import Icon from '@material-ui/core/Icon';

import {Grid} from '@material-ui/core';


const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
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
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '52ch',
      },
    },
  },
}));

// const FormGroup2 = styled('div')(({theme}) => ({
//   position: 'cnter',
//   borderRadius: theme.shape.borderRadius,

//   marginLeft: 0,
//   width: '100%',
// }));

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
    <Container justify="center">

      <Box sx={{display: 'flex'}}>
        <Typography variant={"h1"} fontStyle={'sans-serif'} fontSize={40} sx={{pt: 5}}>
          Course Oracle
        </Typography>
      </Box>


      <Grid container spacing={4} sx={{marginTop: '50px'}} justifyContent="center">
        <Grid direction={'column'}>
          <Grid item xs={6} md={8}>
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
            <Box sx={{margin: 'auto'}}>
              <FormGroup row sx={{justifyContent: 'center'}}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                      color="primary"
                    />
                  }
                  label="Course Materials"
                />


                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Course Past Exams"
                />

                <FormControlLabel
                  control={
                    <Checkbox
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

        <Grid item xs={6} md={2} sx={{mt: '-28px'}}>
          <Box sx={{display: 'flex'}}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardSharpIcon/>}
            >
              Search
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/*<Box sx={{margin: 'auto'}}>*/}
      {/*  <FormGroup row sx={{justifyContent: 'center'}}>*/}
      {/*    <FormControlLabel*/}
      {/*      control={*/}
      {/*        <Checkbox*/}
      {/*          checked={state.checkedA}*/}
      {/*          onChange={handleChange}*/}
      {/*          name="checkedA"*/}
      {/*          color="primary"*/}
      {/*        />*/}
      {/*      }*/}
      {/*      label="Course Materials"*/}
      {/*    />*/}


      {/*    <FormControlLabel*/}
      {/*      control={*/}
      {/*        <Checkbox*/}
      {/*          checked={state.checkedB}*/}
      {/*          onChange={handleChange}*/}
      {/*          name="checkedB"*/}
      {/*          color="primary"*/}
      {/*        />*/}
      {/*      }*/}
      {/*      label="Course Past Exams"*/}
      {/*    />*/}

      {/*    <FormControlLabel*/}
      {/*      control={*/}
      {/*        <Checkbox*/}
      {/*          checked={state.checkedC}*/}
      {/*          onChange={handleChange}*/}
      {/*          name="checkedC"*/}
      {/*          color="primary"*/}
      {/*        />*/}
      {/*      }*/}
      {/*      label="Course Ratings"*/}
      {/*    />*/}
      {/*  </FormGroup>*/}
      {/*</Box>*/}
    </Container>
  )
}

import React, {useContext} from 'react';
import {AppBar as MuiAppBar, Box, Toolbar, Typography, Button} from '@mui/material';
import NavLink from './NavLink'
import {useHistory} from "react-router-dom";
import {UserContext} from "../../contexts";
import {USER_TYPE} from "../../constants";

export default function AppBar() {
  const history = useHistory();
  const userContext = useContext(UserContext);

  const navigateTo = (path) => () => history.push(path);

  return (
    <Box sx={{flexGrow: 1}}>
      <MuiAppBar position="static" sx={{bgcolor: "#242424"}}>
        <Toolbar>
          <img alt="course oracle logo" src={process.env.PUBLIC_URL + '/logo3.png'} height={30} style={{paddingRight: 8}}/>
          <Typography variant="h6" component="div" sx={{pr: 6, cursor: 'pointer'}} onClick={navigateTo('/')}>
            Course Oracle
          </Typography>
          <Box sx={{display: 'flex', flexGrow: 6}}>
            <NavLink href={"/"}>
              Search
            </NavLink>
            <NavLink href={"/courses"}>
              Courses
            </NavLink>
            <NavLink href={"/institutes"}>
              Institutes
            </NavLink>
          </Box>

          <Button color="inherit" onClick={navigateTo('/faq')}>FAQ</Button>
          {userContext.type === USER_TYPE.GUEST ? (
            <>
              <Button color="inherit" onClick={navigateTo('/register')}>Register</Button>
              <Button color={"inherit"} variant="outlined" sx={{ml: 1}}
                      onClick={navigateTo('/login')}>Login</Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={navigateTo('/dashboard')}>Dashboard</Button>
              <Button color="inherit" onClick={() => userContext.logout() || history.push('/')}>log out</Button>
            </>
          )
          }

        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}

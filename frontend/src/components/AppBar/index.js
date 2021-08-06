import React, {useContext} from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
            <NavLink href={"/schools"}>
              Schools
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
              <Button color="inherit" onClick={() => userContext.logout()}>log out</Button>
            </>
          )
          }

        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
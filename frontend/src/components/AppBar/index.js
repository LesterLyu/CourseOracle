import * as React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavLink from './NavLink'

export default function AppBar() {
  return (
    <Box sx={{flexGrow: 1}}>
      <MuiAppBar position="static" sx={{bgcolor: "#242424"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{pr: 6}}>
            CFX P2P
          </Typography>
          <Box sx={{display: 'flex', flexGrow: 6}}>
            <NavLink href={"/trade"}>
              Trade
            </NavLink>
            <NavLink href={"/?"}>
              Features
            </NavLink>
            <NavLink href={"/?"}>
              How to trade
            </NavLink>
          </Box>

          <Button color="inherit">FAQ</Button>
          <Button color="inherit">Register</Button>
          <Button color={"inherit"} variant="outlined" sx={{ml: 1}}>Login</Button>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}

import React, {useContext} from "react";
import {config, navConfig} from "./config";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import {Box, Container, Typography, Paper} from "@material-ui/core";
import NavPanel from "../../pages/Dashboard/NavPanel";
import {UserContext} from "../../contexts";

export default function DashboardRoute() {
  const userContext = useContext(UserContext);
  return (
    <Container>
      <Box sx={{paddingTop: 3}}/>
      <Typography variant="h1" fontSize={30}>
        Hello {userContext.username} Icon here
      </Typography>
      <Box sx={{display: 'flex'}}>
        <Box sx={{flexGrow: 1, maxWidth: '250px'}}>
          <NavPanel config={navConfig}/>
        </Box>
        <Paper elevation={3} sx={{flexGrow: 2, marginTop: 4}}>
          <Switch>
            {config.map(({path, Component, ...props}, idx) =>
              <Route
                key={idx}
                path={path}
                {...props}
              >
                <Component {...props} />
              </Route>
            )}
          </Switch>
        </Paper>

      </Box>
    </Container>

  )
}
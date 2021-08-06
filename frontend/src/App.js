import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline} from "@material-ui/core";
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

import {UserContext, defaultUserData} from "./contexts";
import AppBar from './components/AppBar';
import HomeRoute from "./routes/HomeRoute";
import {USER_TYPE} from "./constants";
import DashboardRoute from "./routes/DashboardRoute";

const theme = createTheme({});


function App() {
  const [userState, setUserState] = useState({
    ...defaultUserData,
    // Methods to modify user context.
    login: (userData) => {
      localStorage.setItem('userData', JSON.stringify(userData));
      setUserState(state => ({...state, ...userData}));
    },
    logout: () => {
      setUserState(state => ({
        ...state,
        username: '',
        email: '',
        type: USER_TYPE.GUEST
      }));
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <UserContext.Provider value={userState}>
          <Router>
            <AppBar/>
            <Switch>
              <Route path="/dashboard" component={DashboardRoute}/>
              <Route path="/" component={HomeRoute}/>
            </Switch>
          </Router>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;

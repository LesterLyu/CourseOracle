import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {UserContext, defaultUserData} from "./contexts";
import AppBar from './components/AppBar';
import HomeRoute from "./routes/HomeRoute";
import {USER_TYPE} from "./constants";
import DashboardRoute from "./routes/DashboardRoute";
import {logout} from "./api/auth";

const theme = createTheme({});
const isOnGithubIO = window.location.hostname.toLowerCase() === 'lesterlyu.github.io';

function App() {
  const [userState, setUserState] = useState({
    ...defaultUserData,
    // Methods to modify user context.
    login: (userData) => {
      localStorage.setItem('userData', JSON.stringify(userData));
      setUserState(state => ({...state, ...userData}));
    },
    logout: () => {
      logout().then(() => {
        setUserState(state => ({
          ...state,
          username: '',
          email: '',
          type: USER_TYPE.GUEST
        }));
        localStorage.removeItem('userData');
      });
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <UserContext.Provider value={userState}>
          <Router basename={isOnGithubIO ? '/CourseOracle' : undefined}>
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

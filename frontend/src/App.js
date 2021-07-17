import React, {useState} from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {UserContext, defaultUserData} from "./contexts";
import AppBar from './components/AppBar';

function App() {
  const [userState, setUserState] = useState({
    ...defaultUserData,
    // Methods to modify user context.
    login: () => {
      // TODO
    },
    logout: () => {
      // TODO
    },
  });

  return (
    <div className="App">
      <UserContext.Provider value={userState}>
        <AppBar>

        </AppBar>
      </UserContext.Provider>
    </div>
  );
}

export default App;

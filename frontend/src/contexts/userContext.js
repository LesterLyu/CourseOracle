import React from 'react';
import {USER_TYPE} from '../constants';

const localData = JSON.parse(localStorage.getItem('userData'));

export const defaultUserData = {
  firstName: '',
  lastName: '',
  email: '',
  type: USER_TYPE.GUEST,
  ...(localData || {}),
  // ...

  // Methods to modify user context.
  // The below functions are implemented in App.js, where the UserContext.Provider is used.
  // Placeholders are for IDE to make suggestions.
  login: () => {
  },
  logout: () => {
  },
};



export const UserContext = React.createContext(defaultUserData);

import React from 'react';

const Context = React.createContext({
  hero: {},
  login: () => {},
  loggedIn: Boolean,
  landingDetails: [],
  successStories: [],
  activeDashPage: "",
  setActiveDashPage: () => {},
})

export default Context;
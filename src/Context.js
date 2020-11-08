import React from 'react';

const Context = React.createContext({
  hero: {},
  landingDetails: [],
  successStories: [],
  activeDashPage: "",
  setActiveDashPage: () => {},
})

export default Context;
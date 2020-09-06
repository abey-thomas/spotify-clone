import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = new createContext();

export const Stateprovider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    { children }
  </StateContext.Provider>
);

export const useStateprovider = () => useContext(StateContext);

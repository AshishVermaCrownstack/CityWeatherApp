import React, {createContext, useReducer} from 'react';
import cityInitialState from './initialStates/cityInitialState';
import weatherInitialState from './initialStates/weatherInitialState';
import cityReducer from './reducers/cityReducer';
import weatherReducer from './reducers/weatherReducer';

export const GlobalContext = createContext({});
const Provider = ({children}: any) => {
  const [cityState, cityDispatch] = useReducer(cityReducer, cityInitialState);
  const [weatherState, weatherDispatch] = useReducer(
    weatherReducer,
    weatherInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{cityState, weatherState, cityDispatch, weatherDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Provider;

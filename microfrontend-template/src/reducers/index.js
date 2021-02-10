import { combineReducers } from 'redux';
import environment from './environment';
import config from './config';

// globalReducer contains the reducer and the TYPES
// of singlespa 
const global = globalReducer ? globalReducer.reducerInstance : null;
console.log('GLOBAL REDUCER', globalReducer)
export default combineReducers({
    environment,
    config,
    global,
  });


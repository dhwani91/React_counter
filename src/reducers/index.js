import {combineReducers} from 'redux';
import counterReducer from './reducer_counter.js';
const rootReducer = combineReducers({
  counter:counterReducer
})

export default rootReducer;
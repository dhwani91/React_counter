import {
  VALIDATION_ERROR,
  START_COUNTER,
  RESET_COUNTER

} from '../actions/action_counter.js';

const initialState = {
  error: '',
  start:0,
  end:0
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATION_ERROR :
      return Object.assign({}, state, {
        error:action.payload,
        start:0,
        end:0
      })
    case START_COUNTER:
      return Object.assign({}, state, {
        start:action.payload.start ,
        end:action.payload.end,
        error:''
      });
    case RESET_COUNTER :
      return Object.assign({}, state, {
        start:0,
        end:0,
        error:''
      });
    default:
      return state;
  }
};

export default CounterReducer;

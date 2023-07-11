import { combineReducers } from 'redux';
import {
  FETCH_GREETING_REQUEST,
  FETCH_GREETING_SUCCESS,
  FETCH_GREETING_FAILURE,
} from '../actionTypes';

const greetingReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_GREETING_REQUEST:
      return '';
    case FETCH_GREETING_SUCCESS:
      return action.payload;
    case FETCH_GREETING_FAILURE:
      return '';
    default:
      return state;
  }
};

const errorReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_GREETING_FAILURE:
      return action.payload;
    case FETCH_GREETING_REQUEST:
    case FETCH_GREETING_SUCCESS:
      return '';
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  greeting: greetingReducer,
  error: errorReducer,
});

export default rootReducer;

import axios from 'axios';
import {
  FETCH_GREETING_REQUEST,
  FETCH_GREETING_SUCCESS,
  FETCH_GREETING_FAILURE,
} from './actionTypes';

export const fetchGreeting = () => {
  return (dispatch) => {
    dispatch(fetchGreetingRequest());
    axios
      .get('http://127.0.0.1:3000/greetings') 
      .then((response) => {
        const greeting = response.data.name;
        dispatch(fetchGreetingSuccess(greeting));
      })
      .catch((error) => {
        dispatch(fetchGreetingFailure(error.message));
      });
  };
};

export const fetchGreetingRequest = () => ({
  type: FETCH_GREETING_REQUEST,
});

export const fetchGreetingSuccess = (greeting) => ({
  type: FETCH_GREETING_SUCCESS,
  payload: greeting,
});

export const fetchGreetingFailure = (error) => ({
  type: FETCH_GREETING_FAILURE,
  payload: error,
});

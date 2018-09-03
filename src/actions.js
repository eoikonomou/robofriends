import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";
import { apiCall } from './api';

// This syntax replaces return statement. It returns the enclosed object.
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

// Higher order function (a function that returns a function). Can be used because we use thunkMiddleware
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    return apiCall('https://jsonplaceholder.typicode.com/users/')
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};

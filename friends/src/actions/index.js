import axios from 'axios';

export const BEGIN_LOGIN = 'BEGIN_LOGIN';
export const DATA_FETCH_BEGIN = 'DATA_FETCH_BEGIN';
export const DATA_FETCH_SUCCESS = 'DATA_FETCH_SUCCESS';
export const DATA_FETCH_FAILURE = 'DATA_FETCH_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: BEGIN_LOGIN });
    return axios.post('http://localhost:5000/api/login', creds)
    .then(res => localStorage.setItem("token", res.data.payload));
};

export const getFriends = () => dispatch => {
    dispatch({ type: DATA_FETCH_BEGIN });
    axios.get('http://localhost:5000/api/friends', {
        headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
        console.log(res);
        dispatch({ type: DATA_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err.response);
        dispatch({ type: DATA_FETCH_FAILURE, payload: err.response });
    });
};
export const USERS_FETCH_DATA_SUCCESS = 'USERS_FETCH_DATA_SUCCESS';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const usersFetchDataSuccess = users => ({
    type: USERS_FETCH_DATA_SUCCESS,
    payload: users
});

export const addUser = user => ({
    type: ADD_USER,
    payload: user
});

export const updateUser = user => ({
    type: UPDATE_USER,
    payload: user
});
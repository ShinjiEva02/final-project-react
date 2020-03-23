export const SET_FILTER = 'SET_FILTER';

export const filterUsers = filter => ({
    type: SET_FILTER,
    payload: filter 
});
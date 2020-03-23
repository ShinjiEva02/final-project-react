export const USERS_IS_LOADING = 'USERS_IS_LOADING';

export const usersIsLoading = loading => ({
    type: USERS_IS_LOADING,
    payload: loading 
});
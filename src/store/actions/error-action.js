export const USERS_HAS_ERRORED = 'USERS_HAS_ERRORED';

export const usersHasErrored = isError => ({
    type: USERS_HAS_ERRORED,
    payload: isError 
});
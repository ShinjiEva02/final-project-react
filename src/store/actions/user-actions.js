export const FETCH_USERS = 'FETCH_USERS';
export const LOAD_USER_DETAILS = 'LOAD_USER_DETAILS';

export function fetchUsers(users) {
    return { type: FETCH_USERS, payload: users };
}

export function loadUserDetails(user) {
    return { type: LOAD_USER_DETAILS, payload: user };
}

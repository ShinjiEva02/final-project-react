import { FETCH_USERS } from '../../actions/user-actions';

const initialState = [];

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS:
            return [...state, ...action.payload];
        default:
            return state;
    }
}

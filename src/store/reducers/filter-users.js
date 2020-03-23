import { SET_FILTER } from '../actions/filter-users-action';

const initialState = ''

export const filterUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return action.payload;
        default:
            return state;
    }
}

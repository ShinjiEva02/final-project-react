import { LOAD_USER_DETAILS } from "../../actions/user-actions";

const initialState = [];

export function userDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USER_DETAILS:
            return [...state, action.payload];
        default:
            return state;
    }
}


import { USERS_HAS_ERRORED } from "../actions/error-action";

export function errorReducer(state = false, action) {
    switch (action.type) {
        case USERS_HAS_ERRORED:
            return action.payload;

        default:
            return state;
    }
}

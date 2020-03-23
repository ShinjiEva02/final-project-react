import { USERS_IS_LOADING } from "../actions/loading-action";

export function loadingReducer(state = false, action) {
    switch (action.type) {
        case USERS_IS_LOADING:
            return action.payload;

        default:
            return state;
    }
}

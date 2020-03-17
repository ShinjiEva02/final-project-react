import { combineReducers } from 'redux';
import {usersReducer} from "./users/users";
import {userDetailsReducer} from "./user-details/user-details";
import { spinnerReducer } from "./spinner/spinner";

export const rootReducer = combineReducers({
    users: usersReducer,
    userDetails: userDetailsReducer,
    spinner: spinnerReducer
});

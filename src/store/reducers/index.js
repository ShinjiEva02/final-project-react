import { combineReducers } from "redux";
import { usersReducer } from "./users";
import { loadingReducer } from "./loading";
import { filterUsersReducer } from "./filter-users";
import { errorReducer } from "./error";

export const rootReducer = combineReducers({
    users: usersReducer,
    loading: loadingReducer,
    error: errorReducer,
    filter: filterUsersReducer
});

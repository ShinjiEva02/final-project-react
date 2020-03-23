import {
    USERS_FETCH_DATA_SUCCESS,
    ADD_USER,
    UPDATE_USER
} from "../actions/user-action";
import { guid } from "../../utils";

export function usersReducer(state = [], action) {
    switch (action.type) {
        case USERS_FETCH_DATA_SUCCESS:
            return action.payload.map(user => ({
                ...user,
                id: user.id.toString(),
                address: {
                    ...user.address,
                    title: `${user.address.city}, ${user.address.street}, ${user.address.suite}`
                }
            }));
        case ADD_USER:
            return [
                ...state,
                {
                    ...action.payload,
                    id: guid(),
                    address: {
                        ...action.payload.address,
                        title: `${action.payload.address.city}, ${action.payload.address.street}, ${action.payload.address.suite}`
                    }
                }
            ];
        case UPDATE_USER:
            return [
                ...state.map(user => {
                    if (user.id === action.payload.id) {
                        return {
                            ...user,
                            ...action.payload,
                            address: {
                                ...action.payload.address,
                                title: `${action.payload.address.city}, ${action.payload.address.street}, ${action.payload.address.suite}`
                            }
                        };
                    }
                    return user;
                })
            ];
        default:
            return state;
    }
}

import { usersIsLoading, usersHasErrored } from "../store/actions";
import { checkResponce } from "../utils";

export const usersFetchData = () => dispatch => {
    dispatch(usersIsLoading(true));
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => checkResponce(response))
        .catch(() => dispatch(usersHasErrored(true)))
        .finally(() => dispatch(usersIsLoading(false)));
};

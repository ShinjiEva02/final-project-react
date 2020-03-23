import { usersFetchDataSuccess } from '../store/actions';
import { usersFetchData } from '../api/index';

export function thunkUsersFecthData() {
    return async (dispatch) => {
        try {
            const response = await dispatch(usersFetchData());
            dispatch(usersFetchDataSuccess(response));
        } catch {}
    }
}
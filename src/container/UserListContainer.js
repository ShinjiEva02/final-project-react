import { UserList } from "../components/user-list/UserList";
import { connect } from "react-redux";
import { filterUsers } from "../store/selectors/user-selectors";

const mapStateToProps = store => ({
    users: filterUsers(store.users, store.filter) || [],
    loading: store.loading,
    error: store.error
});

export default connect(mapStateToProps)(UserList);

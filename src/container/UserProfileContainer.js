import { UserProfile } from "../components/user-profile/UserProfile";
import { connect } from "react-redux";
import { findById } from "../store/selectors/user-selectors";

const mapStateToProps = (store, { id }) => ({
    user: findById(store.users, id),
    userLength: store.users.length
});

export default connect(mapStateToProps)(UserProfile);

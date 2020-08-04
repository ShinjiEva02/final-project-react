import { UserForm } from "../components/user-form/UserForm";
import { connect } from "react-redux";
import { addUser, updateUser } from "../store/actions/user-action";
import { findById } from "../store/selectors/user-selectors";

const mapStateToProps = (store, { id }) => ({
    user: findById(store.users, id),
    userLength: store.users.length
});

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user)),
    updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

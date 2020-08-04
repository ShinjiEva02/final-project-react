import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserList from "../container/UserListContainer";

import SeacrhInputContainer from "../container/SeacrhInputContainer";
import { UserAddForm } from "../components/user-add-form/UserAddForm";

const HomePage = ({ error }) =>
    error ? (
        <h2>We apologize, the site is not working right now </h2>
    ) : (
        <div>
            <SeacrhInputContainer />
            <UserAddForm />
            <UserList />
        </div>
    );

HomePage.propTypes = {
    error: PropTypes.bool.isRequired
};

export default connect(store => ({
    error: store.error
}))(HomePage);

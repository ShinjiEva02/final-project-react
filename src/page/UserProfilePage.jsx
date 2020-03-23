import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import UserProfileContainer from "../container/UserProfileContainer";
import UserFormContainer from "../container/UserFormContainer";

const UserProfilePage = ({ error }) => {
    const { id, editing } = useParams();

    if (error) {
        return <h2>We apologize, the site is not working right now </h2>;
    }

    return (
        <>
            {editing ? (
                <UserFormContainer id={id} isEdit={editing} />
            ) : (
                <UserProfileContainer id={id} />
            )}
        </>
    );
};

UserProfilePage.propTypes = {
    error: PropTypes.bool.isRequired
};

export default connect(store => ({
    error: store.error
}))(UserProfilePage);

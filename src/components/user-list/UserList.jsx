import React from "react";
import PropTypes from "prop-types";
import Spinner from "../../container/SpinnerContainer";

import { UserListComponent } from "./UserListComponent";

export const UserList = ({ users, loading, error }) => {
    return (
        <div className="row">
            <Spinner />
            {users &&
                users.map(user => (
                    <UserListComponent key={user.id} {...user} />
                ))}
            {!error && !loading && !users.length && <p>Not found person</p>}
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
};

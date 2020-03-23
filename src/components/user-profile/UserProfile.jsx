import React from "react";
import PropTypes from 'prop-types';
import Header from "../header/Header";
import { guid } from "../../utils";
import { Redirect } from "react-router-dom";

export const UserProfile = ({ user, userLength }) => {
    if (userLength && !Object.keys(user).length) {
        return <Redirect to="/home" />
    }

    if (!Object.keys(user).length) {
        return null;
    }

    return (
        <div className="row">
            <Header title={`Profile ${user.name}`} />
            <div>
                <div className="card-panel teal">
                    {Object.keys(user).map(
                        item =>
                            typeof user[item] !== "object" &&
                            item !== "id" && (
                                <p className="white-text" key={guid()}>
                                    {`${item}: ${user[item]}`}
                                </p>
                            )
                    )}
                    <p className="white-text">
                        {`address: ${user.address.title}`}
                    </p>
                    <p className="white-text">
                        {`company: ${user.company.name}`}
                    </p>
                </div>
            </div>
        </div>
    );
};

UserProfile.propTypes = {
    user: PropTypes.object.isRequired,
    userLength: PropTypes.number.isRequired
}

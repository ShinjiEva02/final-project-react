import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const UserListComponent = ({ name, phone, id, email, address }) => (
    <div className="col s12 m6">
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{name}</span>
                <p>{`phone: ${phone}`}</p>
                <p>{`email: ${email}`}</p>
                <p>{`address: ${address.title}`}</p>
            </div>
            <div className="card-action">
                <Link to={`profile/${id}`}>View</Link>
                <Link to={`profile/${id}/editing`}>Edit</Link>
            </div>
        </div>
    </div>
);

UserListComponent.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired
}

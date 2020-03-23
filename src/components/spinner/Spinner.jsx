import React from "react";
import PropTypes from "prop-types";

export const Spinner = ({ loading }) =>
    loading && (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    );

Spinner.propTypes = {
    loading: PropTypes.bool.isRequired
};

import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Header = ({ title }) => {
    const history = useHistory();
    return (
        <div className="card-panel teal">
            <h3>
                <i
                    onClick={() => {
                        history.goBack();
                    }}
                    className="material-icons icon-button"
                >
                    arrow_back
                </i>{" "}
                {title}
            </h3>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;

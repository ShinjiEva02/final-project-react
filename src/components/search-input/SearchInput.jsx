import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";

export const SearchInput = ({ setFilter }) => {
    const formikSearch = useFormik({
        initialValues: {
            search: ""
        }
    });

    return (
        <div className="row">
            <input
                id="search"
                name="search"
                type="text"
                className="col m6"
                placeholder="Search person"
                onChange={event => {
                    formikSearch.handleChange(event);
                    setFilter(event.target.value);
                }}
                value={formikSearch.values.search}
            />
        </div>
    );
};

SearchInput.propTypes = {
    setFilter: PropTypes.func.isRequired
};

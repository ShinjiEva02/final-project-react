import React from "react";
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";

import Header from "../header/Header";
import { initialFormState } from '../../utils'

export const UserForm = ({ addUser, updateUser, isEdit, user, closeForm, userLength }) => {
    const initialValues = isEdit ? user : initialFormState;
    const history = useHistory();

    if (isEdit && userLength && !Object.keys(user).length) {
        return <Redirect to="/home" />
    }

    if (isEdit && !Object.keys(user).length) {
        return null
    }

    return (
        <>
            {isEdit && <Header title={`Update ${user.name}`} />}
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    name: Yup.string().required("Required"),
                    phone: Yup.string().required("Required"),
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Required")
                })}
                onSubmit={(values, { resetForm }) => {
                    if (isEdit) {
                        history.push("/home");
                        updateUser(values);
                    } else {
                        addUser(values);
                        resetForm();
                        closeForm();
                    }
                }}
            >
                <Form>
                    <div>
                        <label htmlFor="name">Full Name</label>
                        <Field name="name" type="text" placeholder="Full Name" />
                        <span className="erorr-message">
                            <ErrorMessage name="name" />
                        </span>
                    </div>

                    <div>
                        <label htmlFor="phone">Phone</label>
                        <Field name="phone" type="text" placeholder="Phone" />
                        <span className="erorr-message">
                            <ErrorMessage name="phone" />
                        </span>
                    </div>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email" placeholder="email" />
                        <span className="erorr-message">
                            <ErrorMessage name="email" />
                        </span>
                    </div>

                    <div>
                        <label htmlFor="city">City</label>
                        <Field name="address.city" type="text" placeholder="City" />
                    </div>

                    <div>
                        <label htmlFor="street">Street</label>
                        <Field name="address.street" type="text" placeholder="Street" />
                    </div>

                    <div>
                        <label htmlFor="house">House</label>
                        <Field name="address.suite" type="text" placeholder="House" />
                    </div>

                    <button className="btn waves-effect waves-light" type="submit" name="action">
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </Form>
            </Formik>
        </>
    );
};

UserForm.propTypes = {
    addUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    userLength: PropTypes.number.isRequired,
    user: PropTypes.object,
    closeForm: PropTypes.func,
    isEdit: PropTypes.string,
}

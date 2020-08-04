import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import "materialize-css";

import HomePage from "./page/HomePage";
import UserProfilePage from "./page/UserProfilePage";
import { thunkUsersFecthData } from "./serve/index";

const App = ({ loadUsers }) => {
    useEffect(() => {
        loadUsers();
    }, [loadUsers]);

    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/home" exact>
                        <HomePage />
                    </Route>
                    <Route path="/profile/:id/:editing?">
                        <UserProfilePage />
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            </div>
        </Router>
    );
};

App.propTypes = {
    loadUsers: PropTypes.func.isRequired
};

export default connect(null, dispatch => ({
    loadUsers: () => dispatch(thunkUsersFecthData())
}))(App);

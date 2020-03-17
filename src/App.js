import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import HomePage from './container/HomeContainer';
import UserProfilePage from './container/ProfileContainer';


export const App = ()  => (
    <Router>
        <div className="container">
            <Switch>
                <Route path="/home" exact>
                    <HomePage />
                </Route>
                <Route path="/profile/:id">
                    <UserProfilePage />
                </Route>
                <Redirect to="/home" />
            </Switch>
        </div>
    </Router>
);

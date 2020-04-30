import React from "react";
import { connect } from "react-redux";
import HOCWrapper from "../../HOC";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Authentification from "../Authentification";
import Feed from "../Feed";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HOCWrapper(Authentification)}/>
                <Route exact path="/feed" component={HOCWrapper(Feed)}/>

            </Switch>
        </Router>
    )
}

const mapStateToProps = (state) => ({
    token: state.token
});

export default connect(mapStateToProps)(App);
import React, {useState, useEffect} from "react";
import {connect} from "react-redux";

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from "./Navbar";
import MainFeed from "./MainPage";
import FriendsList from "./Friend";

import {ScreenListening} from "./style";

const Feed = (props) => {

    const [screen, setScreen] = useState("classic");

    useEffect(() => {
        if(props.screenListening)
        {
            setScreen("listening");
        } else {
            setScreen("classic");
        }
    });

    return (
        <Router>
            <ScreenListening>
                <div id={screen}>
                    <Navbar />
                    <Switch>
                        <Route exact path="/feed" component={MainFeed}/>
                        <Route exact path="/friend" component={FriendsList}/>
                    </Switch>
                </div>
            </ScreenListening>
        </Router>
    )
}

const mapStateToProps = (state) => ({
    screenListening: state.screenListening
});

export default connect(mapStateToProps)(Feed);
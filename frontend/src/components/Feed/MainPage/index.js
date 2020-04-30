import React, { useState } from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Posts from "./Posts";

import {MainPage, MainPageNav } from "./style";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const MainFeed = () => {

    const [search, setSearch] = useState("");

    return (
        <MainPage>
            <Router>
                <MainPageNav>
                    <div id="input">
                        <FontAwesomeIcon icon={faSearch} className="user_icon" />
                        <input 
                            type="text" 
                            placeholder="Search posts ..."
                            value={search}
                            onChange={(e) => setSearch(e.currentTarget.value)}
                        />
                    </div>
                    <div id="options">
                        <Link className="link" to="/feed">
                            Liked
                        </Link>
                        <Link className="link" to="/feed/friends">
                            Friends
                        </Link>
                        <Link className="link" to="/feed/follow">
                            Follow
                        </Link>
                    </div>
                </MainPageNav>
                <Switch>
                    <Route exact path="/feed" component={Posts}/>
                    <Route exact path="/feed/friends" component={Posts}/>
                    <Route exact path="/feed/follow" component={Posts}/>
                </Switch>
            </Router>
        </MainPage>
    )
}

export default MainFeed;
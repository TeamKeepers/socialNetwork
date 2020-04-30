import React, {useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {deconnectMe} from "../../../store/actions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faUserFriends, faBell, faUserCircle, faEllipsisV, faPowerOff } from '@fortawesome/free-solid-svg-icons'

import { FeedNav, FeedNavMainLinks, FeedNavSettings, FeedNavDropdown } from "./style";

const Navbar = (props) => {

    const [dropdown, setDropdown] = useState({display:"none"});

    const showDropdown = () => {
        if(dropdown.display === "block")
        {
            setDropdown({display:"none"});
        } else {
            setDropdown({display:"block"});
        }
    }

    const deconnect = () => {
        props.dispatch(deconnectMe());
    }

    return (
        <FeedNav>
            <div id="navbar--div">
                <img src="assets/img/superheroes-logo.png" id="navbar--logo" />
            </div>
            <FeedNavMainLinks>
                <Link className="link" to="/feed" className="feed_icon">
                    <FontAwesomeIcon icon={faThLarge} />
                    <p>Posts</p>
                </Link>
                <Link className="link" to="/friend" className="feed_icon">
                    <FontAwesomeIcon icon={faUserFriends} />
                    <p>Find Friends</p>
                </Link>
            </FeedNavMainLinks>
            <FeedNavSettings>
                <Link className="link" to="/feed" className="feed_icon">
                    <FontAwesomeIcon icon={faBell} />
                </Link>
                <Link className="link" to="/feed" className="feed_icon">
                    <FontAwesomeIcon icon={faUserCircle} />
                </Link>
                <FontAwesomeIcon icon={faEllipsisV} className="feed_icon" onClick={() => showDropdown()} />
                <FeedNavDropdown>
                    <div style={dropdown}>
                        <FontAwesomeIcon icon={faPowerOff} onClick={() => deconnect()} />
                    </div>
                </FeedNavDropdown>
            </FeedNavSettings>
        </FeedNav>
    )
}

export default connect()(Navbar);
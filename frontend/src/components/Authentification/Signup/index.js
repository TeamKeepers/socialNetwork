import React from "react";
import { connect } from "react-redux";

import Email from "./Email";
import Congrats from "./Congrats";
import Verification from "./Verification";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import { FormIcon } from "../../../styles/Form";

const Signup = (props) => {

    const whatComponentRender = () => {
        switch(props.signupIndex)
        {
            case 2:
                return <Congrats />
            case 3:
                return <Verification />
            default:
                return <Email />
        }
    }

    return (
        <>
        {whatComponentRender()}

        <FormIcon>
            <FontAwesomeIcon 
                icon={faCircle} 
                className={props.signupIndex === 1 ? "full_icon" : "empty_icon"} 
            />
            <FontAwesomeIcon 
                icon={faCircle} 
                className={props.signupIndex === 2 ? "full_icon" : "empty_icon"} 
            />
            <FontAwesomeIcon 
                icon={faCircle} 
                className={props.signupIndex === 3 ? "full_icon" : "empty_icon"} 
            />
        </FormIcon>
        </>
    )
}

const mapStateToProps = (state) => ({
    trial: state.trial,
    signupIndex: state.signupIndex,
    authPending: state.authPending,
    authentification: state.authentification
});

export default connect(mapStateToProps)(Signup);
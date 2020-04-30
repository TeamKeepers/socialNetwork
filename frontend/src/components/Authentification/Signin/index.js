import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { checkEmail } from "../checkDataIntegrity";

import { logMePlease, clearDaTrial } from "../../../store/actions"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons'

import { AuthentificationRightSectionRedirectBtn } from "../style";
import { FormTitle, FormInputButton } from "../../../styles/Form";
import { ErrorsDiv } from "../../../styles/Errors";

const Signin = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailIntegrity, setEmailIntegrity] = useState("input");
    const [passwordIntegrity, setPasswordIntegrity] = useState("input");
    const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Password");

    const loginHandler = (e) => {
        e.preventDefault();

        if(email.length === 0 || !checkEmail(email))
        {
            setEmail("");
            setEmailIntegrity("input-error");
            setEmailPlaceholder("Please enter a valid email")
        } else if(password.length === 0) {
            setPassword("");
            setPasswordIntegrity("input-error");
            setPasswordPlaceholder("Please enter a valid password");
        } else {
            setEmailIntegrity("input"); setPasswordIntegrity("input");
            const data = {
                email,
                password
            };
            props.dispatch(logMePlease(data));
        }

    }

    const resetTrial = () => {
        props.dispatch(clearDaTrial());
    }
    
    return (
        <>
        <AuthentificationRightSectionRedirectBtn>
            <p>Don't have an account?</p>
            <Link className="link" to="/signup">
                <button onClick={resetTrial}>SIGN UP</button>
            </Link>
        </AuthentificationRightSectionRedirectBtn>
        <FormTitle>
            <h1>Sign In</h1>
            <FormInputButton onSubmit={loginHandler}>
                {
                    (props.trial) ? <ErrorsDiv>The email or password is wrong. Please try again.</ErrorsDiv> : ""
                }
                <div className={emailIntegrity}>
                    <FontAwesomeIcon icon={faUserCircle} className="user_icon" />
                    <input 
                        type="text" 
                        placeholder={emailPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                </div>
                <div className={passwordIntegrity}>
                    <FontAwesomeIcon icon={faLock} className="user_icon" />
                    <input 
                        type="password" 
                        placeholder={passwordPlaceholder}
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                </div>
                <div id="submit">
                    <button onClick={loginHandler}>SIGN IN</button>
                </div>
            </FormInputButton>
        </FormTitle>
        </>
    )
}

const mapStateToProps = (state) => ({
    trial: state.trial,
    authentification: state.authentification
});

export default connect(mapStateToProps)(Signin);
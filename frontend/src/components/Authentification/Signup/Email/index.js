import React, {useState} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { signMeUpPlease, clearDaTrial } from "../../../../store/actions";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { checkEmail } from "../../checkDataIntegrity";

import { FormTitle, FormInputButton } from "../../../../styles/Form";
import { ErrorsDiv } from "../../../../styles/Errors";
import { AuthentificationRightSectionRedirectBtn } from "../../style";

const Email = (props) => {

    const [email, setEmail] = useState("");
    const [emailIntegrity, setEmailIntegrity] = useState("input");
    const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
    
    const resetTrial = () => {
        props.dispatch(clearDaTrial());
    }

    const signUp = (e) => {
        e.preventDefault();    

        if(email.length === 0 || !checkEmail(email))
        {
            setEmail("");
            setEmailIntegrity("input-error");
            setEmailPlaceholder("Please enter a valid email")
        } else {
            resetTrial();
            setEmailIntegrity("input");
            const data = {
                email
            };
            props.dispatch(signMeUpPlease(data));
        }
        
    }

    return (
        <>
        <AuthentificationRightSectionRedirectBtn>
            <p>Already have an account?</p>
            <Link className="link" to="/">
                <button onClick={resetTrial}>SIGN IN</button>
            </Link>
        </AuthentificationRightSectionRedirectBtn>
        <FormTitle>
            <h1>Sign Up</h1>
            <FormInputButton onSubmit={signUp}>
            {
                (props.trial) ? <ErrorsDiv>The email is wrong or already taken. Please choose another one.</ErrorsDiv> : ""
            }
                <div className={emailIntegrity}>
                    <FontAwesomeIcon icon={faEnvelope} className="user_icon" />
                    <input 
                        type="text" 
                        placeholder={emailPlaceholder}
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                </div>
                <div id="submit">
                    <button onClick={signUp}>CONTINUE</button>
                </div>
            </FormInputButton>
        </FormTitle>
        </>
    )
}

const mapStateToProps = (state) => ({
    trial: state.trial,
    authPending: state.authPending
});

export default connect(mapStateToProps)(Email);
import React, {useState} from "react";
import { connect } from "react-redux";

import {registrationEnding} from "../../../../store/actions";

import { ErrorsDiv } from "../../../../styles/Errors";
import {AuthentificationTitle, AuthentificationVeriflabelled} from "../../style";
import { FormVerification } from "../../../../styles/Form";
import { ButtonMain } from "../../../../styles/Buttons";
import { checkPassword, mirrorPassword } from "../../checkDataIntegrity";

const Verification = (props) => {

    let tempUsername = props.authPending[1].split("@");
    tempUsername = tempUsername[0];

    const [email] = useState(props.authPending[1]);
    const [code, setCode] = useState("");
    const [username, setUsername] = useState(tempUsername);
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [password_repeat, setPasswordRepeat] = useState("");
    
    const [validationCodeIntegrity, setValidationCodeIntegrity] = useState("validation");
    const [validationCodePlaceholder, setValidationCodePlaceholder] = useState("Validation code");
    const [validationPasswordPlaceholder, setValidationPasswordPlaceholder] = useState("Password")
    const [validationPasswordVerifPlaceholder, setValidationPasswordVerifPlaceholder] = useState("Password repeat")

    const [passwordsClassName, setPasswordsClassName] = useState("")

    const registerMe = (e) => {
        e.preventDefault(); 

        if(password.length === 0 || !checkPassword(password) || !mirrorPassword(password, password_repeat))
        {
            setPassword(""); setPasswordRepeat("");
            setPasswordsClassName("input-error");
            setValidationPasswordPlaceholder("Passwords are not acceptable"); setValidationPasswordVerifPlaceholder("Passwords are not acceptable");
        } else {
            setPasswordsClassName("");
            const data = {
                email,
                username,
                code,
                password,
                password_repeat,
                first_name,
                last_name
            };
            props.dispatch(registrationEnding(data));
        }
    }

    return (
        <AuthentificationTitle>
            <h1>Verification</h1>
            {
                (props.trial) ? <ErrorsDiv>You are not registered yet. Change the code or the username.</ErrorsDiv> : ""
            }
            <FormVerification onSubmit={registerMe}>
                <input 
                    className={validationCodeIntegrity}
                    type="text" 
                    value={code}
                    placeholder={validationCodePlaceholder}
                    onChange={(e) => setCode(e.currentTarget.value)}
                />
                <AuthentificationVeriflabelled>
                    <label>Email</label>
                    <input 
                        className="labelled-input"
                        type="text" 
                        value={email}
                    />
                </AuthentificationVeriflabelled>
                <AuthentificationVeriflabelled>
                    <label>Username</label>
                    <input 
                        className="labelled-input"
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.currentTarget.value)}
                    />
                </AuthentificationVeriflabelled>
                <input 
                    className="input"
                    type="text" 
                    value={first_name}
                    placeholder="First name"
                    onChange={(e) => setFirstname(e.currentTarget.value)}
                />
                <input 
                    className="input"
                    type="text" 
                    value={last_name}
                    placeholder="Last name"
                    onChange={(e) => setLastname(e.currentTarget.value)}
                />
                <input 
                    className={"input " + passwordsClassName}
                    type="password" 
                    value={password}
                    placeholder={validationPasswordPlaceholder}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <input 
                    className={"input " + passwordsClassName}
                    type="password" 
                    value={password_repeat}
                    placeholder={validationPasswordVerifPlaceholder}
                    onChange={(e) => setPasswordRepeat(e.currentTarget.value)}
                />
                <ButtonMain>
                    <button className="button-validation" onClick={registerMe}>COMPLETE</button>
                </ButtonMain>
            </FormVerification>
        </AuthentificationTitle>
    )
}

const mapStateToProps = (state) => ({
    trial: state.trial,
    authPending: state.authPending
});

export default connect(mapStateToProps)(Verification);
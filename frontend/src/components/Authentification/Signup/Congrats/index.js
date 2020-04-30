import React from "react";
import { connect } from "react-redux";

import { addRegistrationIndex } from "../../../../store/actions";

import { ButtonMain } from "../../../../styles/Buttons";
import { AuthentificationCongratsIcon, AuthentificationCongratsText, AuthentificationTitle } from "../../style";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const Congrats = (props) => {

    const lastStepBeforeRegistration = () => {
        props.dispatch(addRegistrationIndex());
    }

    return (
        <AuthentificationTitle>
            <h1>Congratulations!</h1>
            <AuthentificationCongratsIcon>
                <FontAwesomeIcon icon={faCheckCircle} className="user_icon" />
            </AuthentificationCongratsIcon>
            <AuthentificationCongratsText>
                <p>We've sent a confirmation code to your email<br/>{props.authPending[1]}</p>
            </AuthentificationCongratsText>
            <ButtonMain>
                <button onClick={lastStepBeforeRegistration} className="button-congrats">CONTINUE</button>
            </ButtonMain>
        </AuthentificationTitle>
    )
}

const mapStateToProps = (state) => ({
    authPending: state.authPending
});

export default connect(mapStateToProps)(Congrats);
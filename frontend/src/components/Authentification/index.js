import React, {useEffect} from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AppDownload from "./AppDownload";
import Signin from "./Signin";
import Signup from "./Signup";

import HOCRegistrationEnding from "../../HOC/Registration";

import { AuthentificationMain,  AuthentificationRightSection } from "./style";

const Authentification = (props) => {

    return (
        <AuthentificationMain>
            <AppDownload />
            <AuthentificationRightSection>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HOCRegistrationEnding(Signin)}/>
                        <Route exact path="/signup" component={HOCRegistrationEnding(Signup)}/>

                    </Switch>
                </BrowserRouter>
            </AuthentificationRightSection>
        </AuthentificationMain>
    )
}

export default connect()(Authentification);
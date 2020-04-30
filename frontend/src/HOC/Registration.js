import React, {useEffect} from "react";
import {connect} from "react-redux";

export default function HOCRegistrationEnding(WrappedComponent) 
{
    function AuthComponent(props)
    {
        useEffect(() => {
            redirectUser()
        }, [props.signupIndex])
    
        const redirectUser = () => {
            if(props.signupIndex===4)
            {
                props.history.push("/");
            }
        }
    
        return <WrappedComponent {...props} />
    }

    function mapStateToProps(state) {
        return {
            signupIndex: state.signupIndex
        }
    }

    return connect(mapStateToProps)(AuthComponent)
};

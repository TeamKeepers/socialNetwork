import React, {useEffect} from "react";
import {connect} from "react-redux";

export default function HOCWraper(WrappedComponent) 
{
    function AuthComponent(props)
    {
        useEffect(() => {
            redirectUser()
        }, [props.token])
    
        const redirectUser = () => {
            if(!props.token && !localStorage.token)
            {
                props.history.push("/");
            } else {
                props.history.push("/feed")
            }
        }
    
        return <WrappedComponent {...props} />
    }

    function mapStateToProps(state) {
        return {
            token: state.token
        }
    }

    return connect(mapStateToProps)(AuthComponent)
};
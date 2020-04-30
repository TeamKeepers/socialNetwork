import initialState from "./initialState";
import { login, loginError, signup, clearTrial, finishRegistration,registrationError, EndOfRegistration, changeScreen, getAllPosts, getMyPosts, deconnexion, newPost } from "../types";


/*
{
    authentification: BOOLEAN,
    trial: BOOLEAN,
    authPending: [BOOLEAN, STR],
    token: STRING,
    signupIndex: INT,
    screenListening: false,
    user : OBJECT,
    userPosts: ARRAY,
    posts: ARRAY
}
*/

const reducer = (state = initialState, action) => {

    switch(action.type)
    {
        case login:
            return {
                ...state,
                authentification: true,
                token: action.payload[0],
                user: action.payload[1]
            };
        case clearTrial:
            return {
                ...state,
                trial: false
            }
        case signup:
            return {
                ...state,
                authPending: [true, action.payload],
                signupIndex: 2
            }
        case finishRegistration:
            return {
                ...state,
                signupIndex: 3
            }
        case EndOfRegistration:
            return {
                ...state,
                signupIndex: 4,
                trial: false
            }
        case getAllPosts:
            return {
                ...state,
                posts: [action.payload]
            }
        case getMyPosts: 
            return {
                ...state,
                userPosts: [action.payload]
            }
        case changeScreen:
            return {
                ...state,
                screenListening: true
            }
        case newPost:
            return {
                ...state,
                screenListening: false
            }
        case loginError:
            return {
                ...state,
                trial: true,
                signupIndex: 1
            }
        case registrationError:
            return {
                ...state,
                trial: true
            }
        case deconnexion:
            return {
                ...state,
                token: null
            }
        default:
            return state;
    }
}

export default reducer;
import { login, loginError, signup, clearTrial, finishRegistration, registrationError, EndOfRegistration, changeScreen, getAllPosts, getMyPosts, deconnexion, newPost } from "../types";

/**
 * MAIN API URL
 */
const URL = `https://superheroes.propulsion-learn.ch`;

/**
 * Action to log people aloready registered
 * @param {*} data email & pwd
 */
export const logMePlease = (data) => (dispatch, getState) => {

    const loginURL = URL + `/backend/api/auth/token/`;

    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    };

    const apiInformation = fetch(loginURL, config)
        .then(res => res.json())
        .then(data => {
            // const {access, user} = data;
            const {access} = data;
            if(data.detail)
            {
                dispatch(throwErrors(loginError))
            } else {
                // dispatch(loginAction(access, user))
                dispatch(loginAction(access))
                localStorage.setItem('token', access)
                // localStorage.setItem('user', user.first_name + " " + user.last_name)
            }
        });

}

/**
 * Action to start the process of registration
 * @param {*} data email
 */
export const signMeUpPlease = (data) => (dispatch, getState) => {

    const userEmail = data.email;

    const signupURL = URL + `/backend/api/auth/registration/`;

    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    };

    const apiInformation = fetch(signupURL, config)
        .then(res => {
            if(res.status === 200)
            {
                return {status:"OK"};
            } else {
                return res.json();
            }
        })
        .then(dataRes => {
            if(dataRes.email)
            {
                dispatch(throwErrors(loginError))
            } else {
                dispatch(signupAction(userEmail))
            }
        });
}

/**
 * Index regarding registration process
 */
export const addRegistrationIndex = () => (dispatch, getState) => {
    dispatch({
        type: finishRegistration
    })
}

/**
 * Clear errors displayed for registration
 */
export const clearDaTrial = () => (dispatch, getState) => {
    dispatch({
        type: clearTrial
    })
}

/**
 * Registration for users which will call login if ok
 * @param {*} data email, username, code, password, password_repeat, first_name, ast_name
 */
export const registrationEnding = (data) => (dispatch, getState) => {

    const userEmail = data.email;
    const userPwd = data.password;

    const registrationURL = URL + `/backend/api/auth/registration/validation/`;

    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const config = {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers
    };

    const apiInformation = fetch(registrationURL, config)
        .then(res => {
            if(res.status === 200)
            {
                return {status:"OK"};
            } else {
                return res.json();
            }
        })
        .then(dataRes => {

            if(dataRes.code || dataRes.username)
            {
                dispatch(throwErrors(registrationError))
            } else {
                dispatch(registrationAction())
            }
        });

}

export const postANewOne = () => (dispatch, getState) => {
    dispatch({
        type: changeScreen
    });
}

export const getPosts = (target) => async (dispatch,getState) => {

    let postURL = URL;

    if(target === "myself")
    {
        postURL += `/backend/api/social/posts/me/`;
    } else {
        postURL += `/backend/api/social/posts/`;
    }

    const headers = new Headers({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.token
    });

    const config = {
        method: 'GET',
        headers
    };

    const response = await fetch(postURL, config);
    const responseJson = await response.json();
       
    await dispatch({
        type: target === "myself" ? getMyPosts : getAllPosts,
        payload: responseJson
    })
}

export const deconnectMe = () => (dispatch,getState) =>  {
    dispatch({
        type: deconnexion
    })
    localStorage.clear();
}

export const postIt = (data) => (dispatch, getState) => {

    const postURL = URL + `/backend/api/social/posts/`;
    console.log(data)
    const headers = new Headers({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.token
    });
    console.log(headers)

    const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    };
    const apiInformation = fetch(postURL, config)
        .then(res => res.json())
        .then(dataRes => {
            dispatch({
                type: newPost
            })
        });
}

export const updateDaPost = (id) => (dispatch, getState) => {

    const updatePostURL = URL + `/backend/api/social/posts/${id}/`;

    const headers = new Headers({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.token
    });

    const config = {
        method: 'PATCH',
        body: JSON.stringify(id),
        headers
    };
}

// ***** NOT EXPORTED FUNCTIONS ***** //

const loginAction = (token, user) => ({
    type: login,
    payload: [token, user]
})

const throwErrors = (type) => ({
    type: type
})

const signupAction = (userEmail) => ({
    type: signup,
    payload: userEmail
})

const registrationAction = () => ({
    type: EndOfRegistration
})
const initialState = {
    authentification: false,
    trial: false,
    authPending: [false, "email"],
    token: null,
    signupIndex: 1,
    changeScreen: false,
    user: {},
    userPosts: [],
    posts: []
};

export default initialState;
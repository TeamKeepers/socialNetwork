import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,500&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 1rem;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        line-height: 1.7em;
    }

    h1,h2,h3,h4,h5,h6 {
        font-weight: 500;   
    }
`;

export const theme = {
    primaryColor: "#A086FD",
    linearGradient: "linear-gradient(102deg, #c468ff, #6e91f6)",
    linearGradient_transp: "linear-gradient(102deg, rgba(196, 102, 255, 0.9), rgba(110, 145, 246, 0.9))"
};
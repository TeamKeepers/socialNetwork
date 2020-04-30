import styled from 'styled-components'

export const AuthentificationLeftSection = styled.section`
    width: 36%;
    height: 100vh;
    background: ${props => props.theme.linearGradient_transp}, url("./assets/img/logo-superheroes_art.jpg");
    background-size: cover;
    background-position: center;
    color: #fff;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 800px;
    }

    @media screen and (max-width: 700px) {
        height: 600px;
    }
`; 

export const AuthentificationLeftSectionLogo = styled.div`
        padding-top: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        img {
            width: 80%;
        }

        h2 {
            margin-top: 4%;
        }

        p {
            text-align: center;
            margin-top: 4%;
        }

        @media screen and (max-width: 1000px) {
            padding-top: 5%;
        }
`;

export const AuthentificationLeftSectionBtnDownload = styled.div`
        margin-top: 8%;
        display: flex;
        justify-content: center;

        button {
            background-color: transparent;
            padding: 2% 3%;
            border: 1px solid #fff;
            border-radius: 20px;

            img {
                display: flex;
                align-self: center;
            }
        }

        > button {
            margin-right: 3%;
            transition: 0.5s background-color;
        }

        > button:hover {
            background-color: rgba(255, 255, 255, 0.5);
        }
`;

export const AuthentificationLeftSectionSocialNetworks = styled.div`
        margin-top: 15%;
        display: flex;
        justify-content: center;

        a {
            width: 8%;
            margin: 3%;
            padding: 2.5% 1%;
            background:rgba(255,255,255, 0.7);
            border-radius: 30PX;
            display: flex;
            justify-content: center;
            
            .icon {
                font-size: 1.1em;
                color: ${props => props.theme.primaryColor};
            }
        }

        @media screen and (max-width: 1000px) {
            margin-top: 2%;

            a {
                padding: 2% 0%;
            }
        }
`;

export const AuthentificationLeftSectionCopyright = styled.div`
        margin: 5% 0px;
        display: flex;
        justify-content: center;
        font-size: 0.8em;

        @media screen and (max-width: 1000px) {
            margin-top: 2%;
        }
`;
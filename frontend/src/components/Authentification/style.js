import styled from 'styled-components'

export const AuthentificationMain = styled.main`
    width: 100%;
    height: 100%;
    display: flex;

    @media screen and (max-width: 1000px) {
        flex-wrap: wrap;
    }
`; 

export const AuthentificationRightSection = styled.section`
    width: 64%;
    height: 100vh;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 700px;
    }

    @media screen and (max-width: 700px) {
        height: 600px;
    }

`;

export const AuthentificationRightSectionRedirectBtn = styled.section`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    margin: 5%;
    
    p {
        margin-right: 2%;
        padding-top: 0.5%;
        font-weight: 500;   
    }

    .link {
        width: 100px;
    }

    .link > button {
        width: 100%;
        background-color: transparent;
        padding: 10% 4%;
        border: 1px solid grey;
        border-radius: 20px;
    }

    @media screen and (max-width: 1000px) {
        justify-content: center;
    }

`; 

export const AuthentificationTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 3em;
        margin-top: 12%;

        @media screen and (max-width: 700px) {
            font-size: 2em;
        }
    }
`;

export const AuthentificationCongratsIcon = styled.div`
    font-size: 8em;
    color: ${props => props.theme.primaryColor};
    margin-top: 8%;
`; 

export const AuthentificationCongratsText = styled.div`
    margin-top: 5%;
    text-align: center;
`;

export const AuthentificationVeriflabelled = styled.div`
    display:flex;
    flex-direction:column;
    align-content: space-between;
    width: 49%;

    .labelled-input {
        width:100%;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }

`;
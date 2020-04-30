import styled from 'styled-components'

export const ButtonMain = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8%;
    width: 100% !important;

    button {
        background: ${props => props.theme.linearGradient};
        border: 0px;
        border-radius: 50px;
        color:#fff;
    }

    .button-congrats {
        width: 40%;
        padding: 3% 10%;
    }

    .button-validation {
        padding: 4% 28%;
    }
`;
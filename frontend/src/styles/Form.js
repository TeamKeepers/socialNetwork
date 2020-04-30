import styled from 'styled-components'

export const FormTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 3em;
        margin-top: 8%;

        @media screen and (max-width: 700px) {
            font-size: 2em;
        }
    }
`; 

export const FormInputButton = styled.form`
    margin-top: 5%;
    width: 40%;

    .input {
        margin: 10% 0%;
        border-bottom: 1px solid lightgrey;
        display:flex;
        flex-wrap: nowrap;
        align-content: center;

        .user_icon {
            width: 8%;
            font-size: 1.5em;
            margin-right: 5%;
            color: ${props => props.theme.primaryColor};
            margin-bottom: 3%;
        }

        input {
            width: 90%;
            border: 0px;
            margin-bottom: 3%;
        }

        input::placeholder { 
            color: #000;
            font-size: 1.2em;
        }

    }

    .input-error {
        margin: 10% 0%;
        border-bottom: 1px solid red;
        display:flex;
        flex-wrap: nowrap;
        align-content: center;

        .user_icon {
            width: 8%;
            font-size: 1.5em;
            margin-right: 5%;
            color: ${props => props.theme.primaryColor};
            margin-bottom: 3%;
        }

        input {
            width: 90%;
            border: 0px;
            margin-bottom: 3%;
        }

        input::placeholder { 
            color: red;
            font-size: 1.2em;
        }

    }
    
    #submit {
        display: flex;
        justify-content: center;
        margin-top: 35%;

        button {
            background: ${props => props.theme.linearGradient};
            padding: 5% 30%;
            border: 0px;
            border-radius: 50px;
            color:#fff;
        }
    }

    @media screen and (max-width: 1000px) {
        width: 70%;

        #submit {
            margin-top: 15%;
        }
    }
`; 

export const FormIcon = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom:1%;
    
    .empty_icon {
        border: 1px solid #000;
        border-radius: 20px;
        margin: 6% 2% 0% 2%;
        color:#fff;
    }

    .full_icon {
        border: 1px solid #000;
        border-radius: 20px;
        margin: 6% 2% 0% 2%;
        color: #000;
    }
`; 

export const FormVerification = styled.form`
    margin-top: 8%;
    width: 60%;
    display:flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;

    label {
        color: lightgrey;
        margin: 5% 0% 2% 0%;
    }

    input {
        border: 0px;
        border-bottom: 1px solid lightgrey;
        margin-bottom: 5%;
        padding-bottom:2%;
    }

    input::placeholder { 
        color: #000;
        font-size: 1.2em;
        margin-bottom: 1%;
    }

    .validation {
        width: 100%;
    }

    .input {
        width: 49%;
        margin-top: 8%;

        @media screen and (max-width: 700px) {
            width: 100%;
        }
    }

    .input-error {
        border-bottom: 1px solid red !important;

        ::placeholder { 
            color: red !important;
        }

    }

    #submit {
        display: flex;
        justify-content: center;
        margin-top: 15%;

        button {
            background: ${props => props.theme.linearGradient};
            padding: 5% 30%;
            border: 0px;
            border-radius: 50px;
            color:#fff;
        }
    }

`;

export const FormPost= styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 5%;
    min-height: 30vh;
    background: #fff;
    box-shadow: 0px 0px 1200px 1200px rgba(0,0,0,0.8);
    margin-bottom: 5%;

    #post--body {
        width: 100%;
        display: flex;
        min-height: 20vh;

        #post--avatar {
            font-size: 3em;
        }

        #post--input {
            margin-left: 5%;
            width: 90%;
            min-height: 20vh;

            input {
                border: none;
                width: 100%;
                min-height: 20vh;
            }

            input::placeholder { 
                vertical-align: top;
            }
        }
    }

    #post--footer {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        button {
            font-size: 2em;
            color: #fff;
            background: ${props => props.theme.linearGradient};
            border-radius:20px;
            padding: 2%;
        }
    }
    
`;
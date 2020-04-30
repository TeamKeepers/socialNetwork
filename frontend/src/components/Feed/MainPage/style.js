import styled from 'styled-components';

export const MainPage = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: #F8F8F9;
    box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.2);
`;

export const MainPageNav = styled.div`
    width: 100%;
    display:flex;
    height: 8vh;
    border-bottom: 1px solid lightgrey;
    padding-top: 2vh;

    input {
        padding-left: 3%;
        border: 0px;
        background-color: #F8F8F9;
        width: 90%;
    }

    #input {
        width: 70%;
        margin-left: 10%;
    }

    #options {
        display: flex;
        justify-content: space-around;
        width: 30%;
        margin-right: 10%;

        a {
            margin-right: 2%;
            text-decoration: none;
            color: #000;
            font-weight: bolder;
        }
    }

`;
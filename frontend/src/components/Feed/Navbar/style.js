import styled from 'styled-components';

export const FeedNav = styled.nav`
    background: #fff;
    display: flex;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
    font-size: 1.2em;

    #navbar--div {
        width: 12%;
        display: flex;

        @media screen and (max-width: 1000px) {
            width: 20%;
        }

        @media screen and (max-width: 700px) {
            width: 30%;
        }

    }
`;

export const FeedNavMainLinks = styled.div`
    display:flex;
    width: 65%;
    margin-left: 8%;

    .feed_icon {
        display:flex;
        align-items: center;
        text-decoration: none;
        width: 20%;

        a:hover {
            background-color: ${props => props.theme.primaryColor};
        }

        a:active {
            border-bottom: 1px solid ${props => props.theme.primaryColor};
        }

        svg {
            color: grey;
        }

        p {   
            color: #000;
            margin-left: 10%;
            font-weight: bolder;
        }

        @media screen and (max-width: 1000px) {
            width: 40%;
        }
    }
`; 

export const FeedNavSettings = styled.div`
    display:flex;
    width: 15%;
    align-items: center;

    .feed_icon {
        display:flex;
        align-items: center;
        margin-left: 20%;
        color: grey;
    }
`; 

export const FeedNavDropdown = styled.div`
    position: relative;
    display: inline-block;
    transition: all 0.5s;
    
    div {
        position: absolute;
        background-color: #fff;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        padding: 10%;
        min-width: 80px;
        right: 0;
        bottom: -50px;
            
        svg {
            float: none;
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            text-align: left;
        }
    
        svg:hover {
            background-color: #ddd;
        }   
    }
`;
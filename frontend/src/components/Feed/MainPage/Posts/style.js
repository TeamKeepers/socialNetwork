import styled from 'styled-components';

export const MainPagePosts = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
    padding: 3vh 10%;

    #post--ownFeed {
        width: 48%;

        #post--creation {
            display: flex;
            align-items: center;
            width: 100%;
            height: 10vh;
            background-color: #fff;
            box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);
            margin-bottom: 5%;

            #post--avatar {
                width: 10%;
                margin-left: 5%;
                font-size: 2.5em;
                color: ${props => props.theme.linearGradient};
            }

            #post--input {
                width: 80%;
                margin-left: 10%;

                input {
                    width: 100%;
                    border: 0px;
                }

                @media screen and (max-width: 1000px) {
                    width: 50%;
                }
            }

            #post--sendBtn {
                width:10%;
                margin-right: 5%;
                font-size: 3em;
                color: #fff;
                background: ${props => props.theme.linearGradient};
                border-radius:20px;
                padding: 2%;
            }

            @media screen and (max-width: 700px) {
                flex-direction: column;
            }
        }

        @media screen and (max-width: 1000px) {
            width: 100%;
        }

    }

    #post--userFeed {
        width: 48%;

    }

`;

export const MainPageCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.2);
    margin-bottom: 2%;
    padding: 5%;

    div {
        display: flex;

        svg {
            font-size: 2em;
        }

        .post--users-nameTime {
            display: flex;
            flex-direction: column;

            h3 {
                margin-left: 3%;
            }

            em {
                color: grey;
            }

        }
        
        
    }
    
    .post--update {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        font-size: 0.8em;
        color: lightblue;
    }

    p {
        margin-top: 1%;
        word-wrap: break-word;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
    }

    .post--user-actions {
        width: 100%;
        color: grey;
        font-size: 0.8em;
        display:flex;
        justify-content: space-between;

        .post--user-actions-share-like {
            margin-top: 2%;

            div {
                margin-right: 25%;

                svg {
                    color: lightgrey;
                }

                p {
                    margin-left: 10%;
                }
            }
        }
    }

`;

export const MainPageCardsImages = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    img {
        width: 48%;
    }
`;
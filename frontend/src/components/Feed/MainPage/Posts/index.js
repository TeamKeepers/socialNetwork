import React, {useState, useEffect} from "react";
import { connect } from "react-redux";

import {getPosts, postANewOne, postIt, updateDaPost} from "../../../../store/actions";

import {MainPagePosts, MainPageCards, MainPageCardsImages } from "./style";
import {FormPost} from "../../../../styles/Form";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle,faPaperPlane, faHeart, faShare, faPen } from '@fortawesome/free-solid-svg-icons'

const Posts = (props) => {
    const [post, setPost] = useState("");
    const [postSentence, setPostSentence] = useState("What's on your mind, " + localStorage.user + "?")

    const changeDisplay = () => {
        props.dispatch(postANewOne());
    }

    const updatePost = (id) => {
        props.dispatch(updateDaPost(id));
    }

    const messagesHandler = (target) => {

        let postData = "";

        if(target === "me")
        {
            postData = props.userPosts[0];
        } else {
            postData = props.posts[0];
        }

        if(postData.code === "token_not_valid")
        {
            localStorage.clear();
            props.history.push("/");
        }

        return (
            postData.map(post => {
                const displayImages = () => {
                    return (
                        <MainPageCardsImages>
                        {
                            post.images.map(image => {
                                return (
                                    <img key={image.image} src={image.image} />
                                )
                            })
                        }
                        </MainPageCardsImages>
                    )
                }
                return (
                    <MainPageCards key={post.id}>
                        <div>
                            <FontAwesomeIcon icon={faUserCircle} />
                            <div className="post--users-nameTime">
                                <h3>{post.id_user.username}</h3>
                                <em>{post.created}</em>
                            </div>
                        </div>
                        {
                            // post.images.length > 1 ? displayImages() : ""
                        }
                        {
                            target === "me" ? <div className="post--update" onClick={() => updatePost(post.id)}><FontAwesomeIcon icon={faPen} /></div> : ""
                        }
                        <p>{post.content}</p>
                        <div className="post--user-actions">
                            <div className="post--user-actions-share-like">
                                <div>
                                    <FontAwesomeIcon icon={faHeart}  />
                                    <p>Like</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faShare}  />
                                    <p>Share</p>
                                </div>
                            </div>
                            <div>
                                {post.amount_of_likes}
                                {
                                    post.amount_of_likes > 1 ? " likes" : " like"
                                } 
                            </div>
                        </div>
                    </MainPageCards>
                )
            })
        )

    }

    const postHandler = (e) => {
        e.preventDefault()
        const postData = {
            content: post,
            title: "default"
        }
        props.dispatch(postIt(postData));
    }

    useEffect(() => {
        props.dispatch(getPosts("others"));
        props.dispatch(getPosts("myself"));
    }, []);


    return (
        <MainPagePosts>
            <div id="post--ownFeed">
                {
                    props.screenListening ? 
                    
                        <FormPost onSubmit={postHandler}>
                            <div id="post--body">
                                <FontAwesomeIcon icon={faUserCircle} id="post--avatar" />
                                <div id="post--input">
                                    <input 
                                        type="text" 
                                        placeholder={postSentence}
                                        value={post}
                                        onChange={(e) => setPost(e.currentTarget.value)}
                                    />
                                </div>
                            </div>
                            <div id="post--footer">
                                <button onClick={postHandler}>
                                    <FontAwesomeIcon icon={faPaperPlane} id="post--sendBtn" />
                                </button>

                            </div>
                        </FormPost>

                    : 
                
                        <div id="post--creation" onClick={() => changeDisplay()}>
                            <FontAwesomeIcon icon={faUserCircle} id="post--avatar" />
                            <div id="post--input">
                                <input 
                                    type="text" 
                                    placeholder={postSentence}
                                />
                            </div>
                            <FontAwesomeIcon icon={faPaperPlane} id="post--sendBtn" />
                        </div>

                }
                
                { 
                    (props.userPosts.length > 0) ? messagesHandler("me") : <MainPageCards><img src="./assets/img/spinner.gif" /></MainPageCards>
                }

            </div>
            <div id="post--userFeed">        
            
            { 
                (props.posts.length > 0) ? messagesHandler("others") : <MainPageCards><img src="./assets/img/spinner.gif" /></MainPageCards>
            }
             
            </div>
        </MainPagePosts>
    )
}

const mapStateToProps = (state) => ({
    screenListening: state.screenListening,
    user: state.user,
    posts: state.posts,
    userPosts: state.userPosts
});

export default connect(mapStateToProps)(Posts);
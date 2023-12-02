import React from "react"; 

export default function PostItem(props) {
    const {title, upvote, image, user, subreddit, comments} = props.post;
    return (
        <div>
            <div className="post-left"></div>
            <div className="post-right"></div>
            <div className="post-crenter"></div>
        </div>
    )
}
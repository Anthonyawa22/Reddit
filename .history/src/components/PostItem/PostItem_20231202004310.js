import React from "react"; 

export default function PostItem(props) {
    const {title, upvote, image, user, subreddit, comments} = props;
    return (
        <div className="post">
            <div className="post-left">
                <img src="https://i.redd.it/ql01eht4vgt11.jpg" alt/>
                <span>{upvote}</span>
            </div>
            <div className="post-right"></div>
            <div className="post-crenter"></div>
        </div>
    )
}
import React from "react"; 
import './PostItem.css'

export default function PostItem(props) {
    const {title, upvote, image, user, subreddit, comments} = props;
    return (
        <div className="post">
            <div className="post-left">
                <img src="https://i.redd.it/ql01eht4vgt11.jpg" alt=""/>
                <span>{upvote}</span>
                <img src="https://i.imgur.com/eqLD2.png" alt="" />
            </div>
            <div className="post-center">
                <img src={image} alt="" />
            </div>
            <div className="post-right">
                <h3><a href={`${subreddit}/${title}`}>{title}</a></h3>
                <span className="postInfo">
                    submitted an hour ago by
                    <a href={`${user}`}>{user}</a>
                    to
                    <a href={`/r/${subreddit}`}>{subreddit}</a>
                    <p className="postInfo">
                        {comments} comments | share | save | hide | report
                    </p>
                </span>

            </div>
            
        </div>
    )
}
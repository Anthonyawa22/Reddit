import React from "react";
import PostItem from "../PostItem/PostItem.js"

export default function Posts () {
    const posts = [
        {
            upvote: 547,
            image: "",
            title: "Questions about new wallet",
            user: "theindieone",
            subreddit: "politics",
            comments: 284
        }
    ];
    return (
        <div className="posts">
             <PostItem post={posts[0]} />
        </div>
    )
}
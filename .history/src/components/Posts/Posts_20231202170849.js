import React from "react";
import PostItem from "../PostItem/PostItem.js"
import './Posts.css'

export default function Posts () {
    const posts = [
        {
            upvote: 547,
            image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
            title: "Questions about new wallet",
            user: "theindieone",
            subreddit: "politics",
            comments: 284,
        },
        {
            upvote: 547,
            image: "https://i.pinimg.com/564x/77/83/02/778302feb083ebbd866e04db26d7f3f3.jpg",
            title: "Questions about new wallet",
            user: "theindieone",
            subreddit: "politics",
            comments: 284,
        },
        {
            upvote: 547,
            image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
            title: "Questions about new wallet",
            user: "theindieone",
            subreddit: "politics",
            comments: 284,
        },
        {
            upvote: 547,
            image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
            title: "Questions about new wallet",
            user: "theindieone",
            subreddit: "politics",
            comments: 284,
        },
    ];
    return (
        <div className="posts">
             {posts.map((post) => (
        <PostItem post={post} />
      ))}
        </div>
    )
}
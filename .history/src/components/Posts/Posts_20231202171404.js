import React from "react";
import PostItem from "../PostItem/PostItem.js"
import './Posts.css'

export default function Posts () {
    const posts = [
        {
            upvote: 547,
            image: "https://www.pinterest.co.uk/pin/743094007257139051/",
            title: "Questions about new wallet",
            user: "theindieone",
            subreddit: "politics",
            comments: 284,
        },
        {
            upvote: 732,
            image: "https://www.pinterest.co.uk/pin/838936236865440863/",
            title: "Exploring Nature's Beauty",
            user: "naturelover",
            subreddit: "nature",
            comments: 152,
        },
        {
            upvote: 621,
            image: "https://www.pinterest.co.uk/pin/838936236857300411/",
            title: "City Lights at Dusk",
            user: "cityexplorer",
            subreddit: "urbanphotography",
            comments: 89,
        },
        {
            upvote: 895,
            image: "https://www.pinterest.co.uk/pin/838936236866447573/",
            title: "Innovative Tech Trends",
            user: "techgeek",
            subreddit: "technology",
            comments: 310,
        },
        {
            upvote: 456,
            image: "https://www.pinterest.co.uk/pin/838936236858416344/",
            title: "Artistic Expressions in the City",
            user: "artenthusiast",
            subreddit: "art",
            comments: 123,
        }                
    ];
    return (
        <div className="posts">
             {posts.map((post) => (
        <PostItem post={post} />
      ))}
        </div>
    )
}
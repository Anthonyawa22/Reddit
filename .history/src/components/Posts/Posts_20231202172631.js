import React from "react";
import PostItem from "../PostItem/PostItem.js"
import './Posts.css'

export default function Posts () {
    const posts = [
        {
            upvote: 547,
            image: "https://images.unsplash.com/photo-1537113799915-0a24165b3f72?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Questions about new wallet",
            user: "theindieone",
            subreddit: "politics",
            comments: 284,
        },
        {
            upvote: 732,
            image: "https://images.unsplash.com/photo-1608234885919-b69645a599f7?q=80&w=2846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Exploring Nature's Beauty",
            user: "naturelover",
            subreddit: "nature",
            comments: 152,
        },
        {
            upvote: 621,
            image: "https://images.unsplash.com/photo-1561572639-773635958b8f?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "City Lights at Dusk",
            user: "cityexplorer",
            subreddit: "urbanphotography",
            comments: 89,
        },
        {
            upvote: 895,
            image: "https://unsplash.com/photos/aerial-view-of-green-trees-and-body-of-water-during-daytime-L-MSreeaix0",
            title: "Innovative Tech Trends",
            user: "techgeek",
            subreddit: "technology",
            comments: 310,
        },
        {
            upvote: 456,
            image: "https://www.google.com/search?sca_esv=587313471&rlz=1C5CHFA_enGB1026GB1029&sxsrf=AM9HkKleu17ueu80CesTsJjZ3Zn-hw9cSw:1701537258618&q=macedonia&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiBzfyeoPGCAxW6WUEAHZ7lCzIQ0pQJegQIDBAB&cshid=1701537474314164&biw=1440&bih=677&dpr=2#imgrc=23N_RenfZxor8M",
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
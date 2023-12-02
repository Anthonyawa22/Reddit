import React from "react";

export default function Sidenav() {
    const menu = [
        {
            to: '/r/popular', text: "Popular" 
        },
        {
            to: '/r/all', text: "All" 
        },
        {
            to: '/r/random', text: "Random" 
        }
    ]


    return (
        <div className="sidenav">
            <div className="sidenav_logo" />
            <img src="" />
            <div className="sidenav_search" />
            <input type="text" name="search" placeholder="Search" />
            <div className="sidenav_links" />
            <ul className="sidenav_menu">

            </ul>
            <br />
            <ul className="sidenav_subreddit">

            </ul>
            
        </div>
    )
}
import React from "react";
import './Sidenav.css'

export default function Sidenav() {
    const menus = [
        {
            to: '/r/popular', text: "Popular" 
        },
        {
            to: '/r/all', text: "All" 
        },
        {
            to: '/r/random', text: "Random" 
        }
    ];
    const subreddits = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaming",
        "news",
        "gifs",
        "aww",
        "mildlyinteresting",
        "television",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful",
    ]


    return (
        <div className="sidenav">
            <div className="sidenav_logo">
            <img src="https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.png" alt=""/>
            </div>


            <div className="sidenav_search">
            <input type="text" name="search" placeholder="Search" />
            <button onclick="submitSearch()"> <img src="https://banner2.cleanpng.com/20180621/vzo/kisspng-magnifying-glass-logo-trademark-specific-activities-5b2be8608c7c93.2505639415296041925755.jpg" alt="Search"/> </button>
            </div>

            <div className="sidenav_links">
            <ul className="sidenav_menu">
                {menus.map (menu => (
                    <li><a href={menu.to}> {menu.text}  </a></li>
                ))}
            </ul>
            <br />
            <ul className="sidenav_subreddit">
                {subreddits.map (subreddit => (
                    <li><a href={`/r/${subreddit}`}> {subreddit} </a></li>
                ))}
            </ul>
            </div>
            
        </div>
    )
}
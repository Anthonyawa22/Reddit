import React from "react";

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
            <img src="" alt=""/>
            </div>


            <div className="sidenav_search">
            <input type="text" name="search" placeholder="Search" />
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
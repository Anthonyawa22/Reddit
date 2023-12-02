import React from "react";
import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <ul>
                    <li><a href="/r/popular">Popular</a></li>
                    <li><a href="/r/hot">Hot</a></li>
                    <li><a href="/r/rising">Rising</a></li>
                    <li><a href="/r/controversial">Controversial</a></li>
                    <li><a href="/r/gilded">Gilded</a></li>
                </ul>
                </div>
                <div className="header-right">
                    <div>
                        <img  className="bell-icon" src="https://cdn-icons-png.flaticon.com/512/5035/5035563.png" />
                    </div>
                    <div className="user">
                        <span>Angela Ilieva</span>
                        <img className="user-icon" src="https://spaces-cdn.clipsafari.com/s5kodg8dwu2znzd8c1kfc6cnqcxs" />
                    </div>
                </div>
        </div>
    )
}
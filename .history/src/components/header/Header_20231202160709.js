import React from "react";
import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <ul>
                    <li><a href="/r/popular" className="active">Popular</a></li>
                    <li><a href="/r/hot">Hot</a></li>
                    <li><a href="/r/rising">Rising</a></li>
                    <li><a href="/r/controversial">Controversial</a></li>
                    <li><a href="/r/gilded">Gilded</a></li>
                </ul>
                </div>
                <div className="header-right">
                    <div>
                        <button><img  className="bell-icon" src="https://cdn-icons-png.flaticon.com/512/5035/5035563.png" alt="" /></button>
                    </div>
                    <img className="user-pic" src="https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg" alt=""/>
                    <div className="user">
                        <span>Angela Ilieva   </span>
                        <button><img className="user-icon" src="https://spaces-cdn.clipsafari.com/s5kodg8dwu2znzd8c1kfc6cnqcxs" alt=""/></button>
                    </div>
                </div>
        </div>
    )
}
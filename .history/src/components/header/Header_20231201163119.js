import React from "react";

export default function Header () {
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
                    <i className="fas fa-bell">
                        <img src="" />
                    </i>
                    <div className="user">
                        <span>Angela Ilieva</span>
                        <div className="user-icon">
                            <img src="" />
                        </div>
                    </div>
                </div>
        </div>
    )
}
import React from "react";
import './Header.css'

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
                    <div>
                        <img  className="bell-icon" src="https://cdn-icons-png.flaticon.com/512/5035/5035563.png" />
                    </div>
                    <div className="user">
                        <span>Angela Ilieva</span>
                        <div>
                            <img className="user-icon" src="data:image/png;base64,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" />
                        </div>
                    </div>
                </div>
        </div>
    )
}
import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="Header">
            <div className="title">別海なび</div>
            <div className="hamburger">
                <input type="checkbox" id ="menu-btn-check"/>
                <label for="menu-btn-check" className="menu-btn"><span></span></label>
                <div className="menu-content">
                <ul>
                    <li>
                        <a href="#">においを評価する</a>
                    </li>
                    <li>
                        <a href="#">メニューリンク2</a>
                    </li>
                    <li>
                        <a href="#">ホームに戻る</a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
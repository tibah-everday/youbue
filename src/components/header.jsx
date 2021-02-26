import React from 'react';
import {FaYoutube} from 'react-icons/fa';
import './header.css';
function Header() {
    return (
        <div className="header">
            <h1>            
                <FaYoutube className="youtubeIcon"/>                
                Youtube 노동림
            </h1>
            {/* <input type="search"/> */}
        </div>
    )
}

export default Header

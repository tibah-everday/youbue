import React from 'react';
import {FaYoutube} from 'react-icons/fa';

function Header() {
    return (
        <div className="Header">
            <h1>            
                <FaYoutube/>                
                Youtube 
            </h1>
            <input type="search"/>
        </div>
    )
}

export default Header

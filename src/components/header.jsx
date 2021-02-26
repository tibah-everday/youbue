import React from 'react';
import {FaYoutube} from 'react-icons/fa';
import './header.css';
function Header(props) {
    function handleSubmit(e){
        e.preventDefault();
        
        const keyword = e.target[0].value;
        const newUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyDhLRQLN-_jxsQM1AVCFg1CWxkUUtcQsRw`
        
        props.handleSearch(newUrl);

    }
    return (
        <div className="header">
            <h1>            
                <FaYoutube className="youtubeIcon"/>                
                Youtube 노동림
            </h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="search" />
                <button className="searchButton">검색</button>
            </form>
        </div>
    )
}

export default Header

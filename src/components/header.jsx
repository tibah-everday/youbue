import React, {useRef} from 'react';
import {FaYoutube} from 'react-icons/fa';
import './header.css';
function Header(props) {
    const formRef = useRef();
    function handleSubmit(e){
        e.preventDefault();        
        const keyword = formRef.current[0].value;                
        props.handleSearch(keyword);
    }
    return (
        <div className="header">
            <h1>            
                <FaYoutube className="youtubeIcon"/>                
                Youtube 노.동.림
            </h1>
            <form action="" onSubmit={handleSubmit} ref={formRef}>
                <input type="search" />
                <button className="searchButton">검색</button>
            </form>
        </div>
    )
}

export default Header

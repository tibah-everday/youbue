import React from 'react'

function Video_item(props) {
    return (
        <>        
            <img src={props.video.snippet.thumbnails.medium.url} alt="video thumbnail"/>                    
        <div className="videoInfo">
            <p className="videoChannel">
            {props.video.snippet.channelTitle}
            </p>
            <p className="videoTitle">
            {props.video.snippet.title}
            </p>            
        </div>
        </>
    )
}

export default Video_item

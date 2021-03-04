import React from 'react'
import './video_detail.css'
function Video_detail(props) {
    return (
        <>
        <h1>{props.video.snippet.title}</h1>
        <section className="videoArea">
        <iframe
            className="iframeVideo"
            id="ytplayer" 
            type="text/html" 
            width="100%" 
            height="500px"
            src={`https://www.youtube.com/embed/${props.video.id.videoId}`}
            frameBorder="0"     
            allowFullScreen></iframe>
            <h2>{props.video.snippet.channelTitle}</h2>
            <h3>귀염둥이 라성</h3>
        </section>   
        </>
    )
}

export default Video_detail

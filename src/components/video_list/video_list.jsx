import React from 'react';
import VideoItem from '../video_item/video_item';
function Video_list(props) {
   
    return (
        <ul className="videoList">
            {props.videos.map((video, index)=><li key={index} className="videoItem" onClick={()=>props.onVideoClick(video)}><VideoItem id={video.id} video={video}/></li>)}
        </ul>
    )
}

export default Video_list

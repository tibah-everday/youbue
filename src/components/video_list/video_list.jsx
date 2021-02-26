import React from 'react';
import VideoItem from '../video_item/video_item';
function Video_list(props) {
    return (
        <ul>
            {props.videos.map((video)=><li key={video.id}><VideoItem video={video}/></li>)}
        </ul>
    )
}

export default Video_list

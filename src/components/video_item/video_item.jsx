import React from 'react'

function Video_item(props) {
    return (
        <span>
            {props.video.snippet.description}
        </span>
    )
}

export default Video_item

import React from "react";
import './VideoDescription.scss';

function VideoDescription(props) {
    return (
        <h2 className="video__description">{props.videoDescription}</h2>
    )
}

export default VideoDescription
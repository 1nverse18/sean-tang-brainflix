import React from 'react'; 
import './VideoTitle.scss';

function VideoInfo(props) {
    return (
        <h1 className="video__title">{props.titleInfo}</h1>
    )
}

export default VideoInfo;
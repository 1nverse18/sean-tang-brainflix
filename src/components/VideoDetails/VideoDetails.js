import React from 'react'
import VideoTitle from '../VideoTitle/VideoTitle';
import VideoInfo from '../VideoInfo/VideoInfo';
import VideoDescription from '../VideoDescription/VideoDescription';
import './VideoDetails.scss';

function VideoDetails(props) {
    return (
        <div>
            <VideoTitle titleInfo={props.activeVideo.title}/>
            <VideoInfo videoInfo={props.activeVideo}/>
            <VideoDescription videoDescription={props.activeVideo.description}/>
        </div>
    )
}

export default VideoDetails;
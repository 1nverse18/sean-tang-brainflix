import React from 'react'
import VideoInfo from '../VideoInfo/VideoInfo';
import './VideoDetails.scss';

function VideoDetails(props) {
    return (
        <div>
            <h1 className='video__title'>{props.videoInfo.title}</h1>
            <VideoInfo likes={props.videoInfo.likes} date={props.videoInfo.date} views={props.videoInfo.views} channel={props.videoInfo.channel}/>
            <p className='video__description'>{props.videoInfo.description}</p>
        </div>
    )
}

export default VideoDetails;
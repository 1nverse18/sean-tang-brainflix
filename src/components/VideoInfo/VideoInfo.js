import React from 'react';
import viewIcon from '../../assets/images/views.svg';
import likeIcon from '../../assets/images/likes.svg';

function VideoInfo(props) {
    return (
        <div className="video-info__wrapper">
            <div className="video-info__section-one">
                <h2>By {props.videoInfo.channel}</h2>
                <h2>{new Intl.DateTimeFormat("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric"
                }).format(props.videoInfo.timestamp)}</h2>
            </div>
            <div className="video-info__section-two">
                <div className="video-info__views">
                    <img src={viewIcon} />
                    <h2>{props.videoInfo.views}</h2>
                </div>
                <div className="video-info__likes">
                    <img src={likeIcon}/>
                    <h2>{props.videoInfo.likes}</h2>
                </div>
            </div>
        </div>
    )
}

export default VideoInfo
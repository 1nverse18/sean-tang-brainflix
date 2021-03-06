import React from 'react';
import viewIcon from '../../assets/images/views.svg';
import likeIcon from '../../assets/images/likes.svg';
import './VideoInfo.scss';

function VideoInfo(props) {
    return (
        <div className="video-info__wrapper">
            <div className="video-info__section-one">
                <h2 className='video-info__author'>By {props.channel}</h2>
                <h2 className="video-info__text">{new Intl.DateTimeFormat("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric"
                }).format(props.timestamp)}</h2>
            </div>
            <div className="video-info__section-two">
                <div className="video-info__views">
                    <img className="video-info__icon" src={"http://localhost:8080/images/views.svg"} />
                    <h2 className="video-info__text">{props.views}</h2>
                </div>
                <div className="video-info__likes">
                    <img className="video-info__icon" src={"http://localhost:8080/images/likes.svg"}/>
                    <h2 className="video-info__text">{props.likes}</h2>
                </div>
            </div>
        </div>
    )
}

export default VideoInfo
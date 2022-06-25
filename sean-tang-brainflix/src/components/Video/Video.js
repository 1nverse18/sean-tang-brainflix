import React from 'react';
import './Video.scss';

function Video(props) {

    return(
        <div className="currentVideo__wrapper">
            <video className="currentVideo" poster={props.activeVideo.image} controls="play"/>
        </div>
    );
}

export default Video;
import React from 'react';
import './SideVideos.scss';

function SideVideos(props){
    return(
        <div className="side-videos" onClick={() =>props.newId(props.sideVideos.id)}>
            <div className="side-videos__image-wrapper">
                <img src={props.sideVideos.image} className="side-videos__image" />
            </div>
            <div className="side-videos__text-wrapper">
                <h1 className="side-videos__title">{props.sideVideos.title}</h1>
                <h2 className='side-videos__name'>{props.sideVideos.channel}</h2>
            </div>
        </div>
    )
}

export default SideVideos;
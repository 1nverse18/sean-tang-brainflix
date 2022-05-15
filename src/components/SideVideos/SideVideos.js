import React from 'react';

function SideVideos(props){
    return(
        <div className="side-videos__wrapper" onClick={() =>props.newId(props.sideVideos.id)}>
            <div className="side-videos__image-wrapper">
                <img src={props.sideVideos.image} className="side-videos__image" />
            </div>
            <div className="side-videos__text-wrapper">
                <h1>{props.sideVideos.title}</h1>
                <h2>{props.sideVideos.channel}</h2>
            </div>
        </div>
    )
}

export default SideVideos;
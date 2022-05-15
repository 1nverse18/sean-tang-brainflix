import React from 'react';
import SideVideos from '../SideVideos/SideVideos';
import './SideVideosSection';

function SideVideosSection(props) {
    const newVideoList = props.sideVideos.filter(element => element.id != props.activeVideo);

    const sideVideoFunction = newVideoList.map((element) => {
        return <SideVideos sideVideos={element} key={element.id} newId={props.newId} />
    })

    return (
        <div className='side-videos__wrapper'>
            <h1 className='side-videos__header'>NEXT VIDEOS</h1>
            {sideVideoFunction}
        </div>
    )
}

export default SideVideosSection
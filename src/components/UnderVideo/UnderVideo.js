import React from 'react';
import VideoDetails from '../VideoDetails/VideoDetails';
import CommentsSection from '../CommentsSection/CommentsSection';
import SideVideosSection from '../SideVideosSection/SideVideosSection';
import './UnderVideo.scss';

function UnderVideo(props) {
    return (
        <div className="under-video__wrapper">
            <div>
            <VideoDetails activeVideo={props.activeVideo} />
            <CommentsSection videoComments={props.activeVideo.comments}/>
            </div>
            <SideVideosSection newId={props.newId} sideVideos={props.sideVideos} activeVideo={props.activeVideo.id}/>
        </div>
    )
}

export default UnderVideo
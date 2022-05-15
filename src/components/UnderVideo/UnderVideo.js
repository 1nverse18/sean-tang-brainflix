import React from 'react';
import VideoDetails from '../VideoDetails/VideoDetails';
import CommentsSection from '../CommentsSection/CommentsSection';
import SideVideosSection from '../SideVideosSection/SideVideosSection';

function UnderVideo(props) {
    return (
        <div>
            <VideoDetails activeVideo={props.activeVideo} />
            <CommentsSection videoComments={props.activeVideo.comments}/>
            <SideVideosSection newId={props.newId} sideVideos={props.sideVideos} activeVideo={props.activeVideo.id}/>
        </div>
    )
}

export default UnderVideo
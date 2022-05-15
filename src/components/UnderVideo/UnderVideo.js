import React from 'react';
import VideoDetails from '../VideoDetails/VideoDetails';
import CommentsSection from '../CommentsSection/CommentsSection';

function UnderVideo(props) {
    return (
        <div>
            <VideoDetails activeVideo={props.activeVideo} />
            <CommentsSection videoComments={props.activeVideo.comments}/>
        </div>
    )
}

export default UnderVideo
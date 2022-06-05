import React from 'react';
import ExistingComments from '../ExistingComments/ExistingComments';
import './CommentsSection.scss';
import CommentsInput from '../CommentsInput/CommentsInput';

function CommentsSection(props){

    // const {videoInfo} = props;

    if (props.videoInfo.length === 0) {
        return null
    }
    
    return (
        <section className="comments-section">
            <p className='comments-section__comment-number'>{props.videoInfo.length} Comments</p>
            <CommentsInput />
            {props.videoInfo.comments.map((element, index) => <ExistingComments videoComments={element} key={index}/>)}
        </section>
    )
}

export default CommentsSection;
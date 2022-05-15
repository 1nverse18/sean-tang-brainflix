import React from 'react';
import ExistingComments from '../ExistingComments/ExistingComments';
import './CommentsSection.scss';
import CommentsInput from '../CommentsInput/CommentsInput';

function CommentsSection(props){
    return (
        <section className="comments-section">
            <p>{props.videoComments.length} Comments</p>
            <CommentsInput />
            {props.videoComments.map((element, index) => <ExistingComments videoComments={element} key={index}/>)}
        </section>
    )
}

export default CommentsSection;
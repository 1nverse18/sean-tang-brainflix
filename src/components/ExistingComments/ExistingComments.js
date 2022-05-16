import React from 'react';
import './ExistingComments.scss';

function ExistingComments(props) {
    return (
        <div className="comments-posted">
            <img className="comments-posted__picture"/>
            <div className="comments-posted__wrapper">
                <div className="comments-posted__header">
                <h2>{props.videoComments.name}</h2>
                <h2 className='comments-posted__date'>
                    {new Intl.DateTimeFormat("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric"
                    }).format(props.videoComments.timestamp)}
                </h2>
                </div>
                <h3 className='comments-posted__text'>{props.videoComments.comment}</h3>
            </div>
            
        </div>
    )
}

export default ExistingComments;
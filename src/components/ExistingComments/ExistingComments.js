import React from 'react';

function ExistingComments(props) {
    return (
        <div className="comments-posted">
            <img className="comments-posted__picture"/>
            <div className="comments-posted__header">
                <h2>{props.videoComments.name}</h2>
                <h2>
                    {new Intl.DateTimeFormat("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "numeric"
                    }).format(props.videoComments.timestamp)}
                </h2>
            </div>
            <h3>{props.videoComments.comment}</h3>
        </div>
    )
}

export default ExistingComments;
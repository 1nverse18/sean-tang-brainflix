import React from 'react';
import CommentImage from '../../assets/images/add_comment.svg';
import ProfilePhoto from '../../assets/images/Mohan-muruge.jpg';

function CommentsInput(props) {
    return(
        <div className="comments-section__input">
            <img src={ProfilePhoto} className="comments-section__profile-picture"/>
            <form>
                <label form="header">JOIN THE CONVERSATION</label>
                <textarea name="input" id="input" placeholder="Add a new comment"></textarea>
                <button type="submit" className="comments-section__button">
                    <img src={CommentImage} alt="comment-input-icon" />
                    <h1>COMMENT</h1>
                </button>
            </form>
        </div>
    )
}

export default CommentsInput
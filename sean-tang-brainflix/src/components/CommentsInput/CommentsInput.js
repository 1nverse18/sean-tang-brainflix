import React from 'react';
import CommentImage from '../../assets/images/add_comment.svg';
import ProfilePhoto from '../../assets/images/Mohan-muruge.jpg';
import './CommentsInput.scss';

function CommentsInput(props) {
    return(
        <div className="comments-section__input">
            <img src={"http://localhost:8080/images/Mohan-muruge.jpg"} className="comments-section__profile-picture"/>
            <form>
                <label className="comments-section__title" form="header">JOIN THE CONVERSATION</label>
                <div className='comments-section__wrapper'>
                <textarea className="comments-section__input-box" name="input" id="input" placeholder="Add a new comment"></textarea>
                <button type="submit" className="comments-section__button">
                    <img src={"http://localhost:8080/images/add_comment.svg"} alt="comments-section__input-icon" />
                    <h1 className="comments-section__button-text">COMMENT</h1>
                </button>
                </div>
            </form>
        </div>
    )
}

export default CommentsInput
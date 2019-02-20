import React from 'react';
import "./Comment.css";

const Comment = (props) => {
    return (
        <div className="comment-container">
            <p className="comment-username">{props.comment.username}</p>
            <p className="comment-text">{props.comment.text}</p>
        </div>
    );
};

export default Comment;
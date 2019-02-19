import React from 'react';
import "./Comment.css";

const CommentInput = () => {
    return (
        <div className="comment-input-container">
            <input className="comment-input" type="text" placeholder="Add a comment..."/>
        </div>
    );
};

export default CommentInput;
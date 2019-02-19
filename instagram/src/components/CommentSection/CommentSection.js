import React from 'react';
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import "./Comment.css";

const CommentSection = (props) => {
    return (
        <div className="comment-section">
            <div className="comment-section-interaction">
                <div className="comment-section-icons">
                    <a href="https://instagram.com"><i className="far fa-heart"></i></a>
                    <a href="https://instagram.com"><i className="far fa-comment"></i></a>
                </div>
                <div className="comment-section-likes">
                    <p className="likes-display">{props.commentSection.likes} likes</p>
                </div>
            </div>
            <div className="comment-section-feed">
                <Comment />
            </div>
            <CommentInput />
        </div>
    );
};

export default CommentSection;
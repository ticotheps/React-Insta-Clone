import React from 'react';
import Comment from "./Comment";
import "./CommentSection.css";

const CommentSection = (props) => {
    return (
        <div className="comment-section">
            <div className="comment-section-interaction">
                <div className="comment-section-icons">
                    <a href="https://instagram.com"><i className="far fa-heart"></i></a>
                    <a href="https://instagram.com"><i class="far fa-comment"></i></a>
                </div>
                <div className="comment-section-likes">
                    <p className="likes-display">373 likes</p>
                </div>
            </div>
            <div className="comment-section-feed">
                <Comment />
            </div>
        </div>
    );
};

export default CommentSection;
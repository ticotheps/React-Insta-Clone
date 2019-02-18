import React from 'react';
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

const PostContainer = () => {
    return (
        <div className="post-container">
            <h2>Post Container, Bro!</h2>
            <CommentSection />
        </div>
    );
};

export default PostContainer;
import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import "./PostContainer.css";

const PostContainer = (props) => {
    return (
        <div className="post-container">
            <div className="post-header">
                <img className="post-user-avatar" src={props.postContainer.thumbnailUrl} alt="User's avatar" />
                <h2 className="post-user-name">{props.postContainer.username}</h2>
            </div>
            <div className="post-image-container">
                <img className="post-image" src={props.postContainer.imageUrl} alt=""/>
            </div>
            <CommentSection commentSection={props.postContainer} />
        </div>
    );
};

export default PostContainer;
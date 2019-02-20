import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import "./PostContainer.css";

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postContainer: props.postContainer
        };
    }
    render() {
        return (
            <div className="post-container">
                <div className="post-header">
                    <img className="post-user-avatar" src={this.state.postContainer.thumbnailUrl} alt="User's avatar" />
                    <h2 className="post-user-name">{this.state.postContainer.username}</h2>
                </div>
                <div className="post-image-container">
                    <img className="post-image" src={this.state.postContainer.imageUrl} alt=""/>
                </div>
                <CommentSection commentSection={this.state.postContainer} />
            </div>
        );
    }
}

PostContainer.propTypes = {
    postContainer: PropTypes.object,
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string
};

export default PostContainer;
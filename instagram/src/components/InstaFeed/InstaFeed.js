import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import PropTypes from 'prop-types';
import './InstaFeed.css';

const InstaFeed = (props) => {
    return (
        <div className="insta-feed">
            <div>
                {props.posts.map(postContainer => (
                    <div className="post-card">
                        <PostContainer key={postContainer.timestamp} postContainer={postContainer} />
                    </div>
                ))}
            </div> 
        </div>
    );
};

PostContainer.propTypes = {
}

export default InstaFeed;
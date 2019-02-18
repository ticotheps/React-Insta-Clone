import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import './InstaFeed.css';

const InstaFeed = (props) => {
    return (
        <div className="insta-feed">
            {props.dummyData.map(postContainer => (
                <PostContainer key={postContainer.timestamp} postContainer={postContainer} />
            ))}
        </div>
    );
};

export default InstaFeed;
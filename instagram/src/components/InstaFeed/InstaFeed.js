import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import CommentSection from '../CommentSection/CommentSection';
import './InstaFeed.css';

const InstaFeed = (props) => {
    return (
        <div className="insta-feed">
            <div>
                {props.dummyData.map(postContainer => (
                    <div className="post-card">
                        <PostContainer key={postContainer.timestamp} postContainer={postContainer} />
                        <CommentSection />
                    </div>
                ))}
            </div> 
        </div>
    );
};

export default InstaFeed;
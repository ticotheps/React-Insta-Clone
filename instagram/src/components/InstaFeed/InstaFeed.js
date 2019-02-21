import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import PropTypes from 'prop-types';
import './InstaFeed.css';


const InstaFeed = props => {
    return (
        <div className="insta-feed">
            <div>
                {props.posts.map((postContainer, index) => (
                    <div className="post-card" key={index}>
                        <PostContainer key={postContainer.timestamp} postContainer={postContainer} />
                    </div>
                ))}
            </div> 
        </div>
    )
};

InstaFeed.propTypes = {
    postContainer: PropTypes.object,
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumnailUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string.isRequired,
                    text: PropTypes.string
                })
            )
        })
    )
}

export default InstaFeed;
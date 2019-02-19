import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import './InstaFeed.css';

class InstaFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: props.posts
        };
    }
    render() {
        return (
            <div className="insta-feed">
                <div>
                    {this.state.posts.map(postContainer => (
                        <div className="post-card">
                            <PostContainer key={postContainer.timestamp} postContainer={postContainer} />
                        </div>
                    ))}
                </div> 
            </div>
        );
    }
}

export default InstaFeed;
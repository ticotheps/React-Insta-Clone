import React from 'react';
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import "./Comment.css";


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }
    render() {
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
                <CommentInput />
            </div>
        );
    }
}


export default CommentSection;
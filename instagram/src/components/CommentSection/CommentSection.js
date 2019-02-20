import React from 'react';
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import PropTypes from 'prop-types';
import "./Comment.css";


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentSection: props.commentSection
        };
    }

    render() {
        return (
            <div className="comment-section">
                <div className="comment-section-interaction">
                    <div className="comment-section-icons">
                        <a href="https://instagram.com"><i className="fa-icon-comment-section far fa-heart"></i></a>
                        <a href="https://instagram.com"><i className="fa-icon-comment-section far fa-comment"></i></a>
                    </div>
                    <div className="comment-section-likes">
                        <p className="likes-display">{this.state.commentSection.likes} likes</p>
                    </div>
                </div>
                <div className="comment-section-feed">
                    {this.state.commentSection.comments.map(comment => (
                        <Comment key={this.state.thumbnailUrl} comment={comment} />
                    ))}
                </div>
                <CommentInput />
            </div>
        );
    }
}

CommentSection.propTypes = {
    commentSection: PropTypes.arrayOf(
        PropTypes.shape({
            thumnailUrl: PropTypes.string,
            likes: PropTypes.number,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string
                })
            )
        })
    ),
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            thumbnailUrl: PropTypes.string
        })
    )
}

export default CommentSection;
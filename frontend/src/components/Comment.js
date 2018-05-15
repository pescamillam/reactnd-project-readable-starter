import React, {Component} from 'react';
import {deleteCommentAction, downvoteComment, upvoteComment} from "../actions";
import { connect } from 'react-redux';


class Comment extends Component {

  upvoteComment = (data) => {
    return this.props.upvote(data);
  };

  downvoteComment = (data) => {
    return this.props.downvote(data);
  };

  deleteComment = (data) => {
    return this.props.onDeleteComment(data);
  };

  render() {
    const { comment } = this.props;
    return (
      <div key={comment.id} className="post-container">
        <div>{comment.body}</div>
        <div>{comment.author}</div>
        <div className='post-action' onClick={() => this.upvoteComment(comment)}>upvote</div>
        <div className='post-action' onClick={() => this.downvoteComment(comment)}>downvote</div>
        <div className='post-action' onClick={() => this.deleteComment(comment)}>delete</div>
        <div className='post-action'>{comment.voteScore}</div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    upvote: (data) => dispatch(upvoteComment(data)),
    downvote: (data) => dispatch(downvoteComment(data)),
    onDeleteComment: (data) => dispatch(deleteCommentAction(data))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)

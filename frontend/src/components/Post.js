import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { upvoteComment,
  downvoteComment,
  addPost,
  upvotePost,
  downvotePost,
  editPost,
  deletePost,
  obtainComments } from '../actions'

class Post extends Component {

  voteup = () => {
    return this.props.onUpvote(this.props.post);
  }

  votedown = () => {
    return this.props.onDownvote(this.props.post);
  }

  delete = () => {
    return this.props.onDelete(this.props.post);
  }

  edit = () => {
    return this.props.onEdit(this.props.post);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.post.id);
  }

  render() {
    const { post, comments } = this.props;
    return (
      <div className="post-container">
        <div className="post-title">{post.title}</div>
        <div>{post.author}</div>
        <Link className='post-action post-link' key={post.id} to={`/${post.category}/${post.id}`}>
          Detail
        </Link>
        <div className='post-action' onClick={this.voteup}>
          Upvote
        </div>
        <div className='post-action' onClick={this.votedown}>
          Downvote
        </div>
        <div className='post-action'>score: {post.voteScore}</div>
        <Link className='post-action post-link' key={`{post.id}edit`} to={`/${post.category}/${post.id}/edit`}>
          Edit
        </Link>
        <div className='post-action' onClick={this.delete}>delete</div>
      </div>
    );
  }
}

function mapStateToProps ({ comments }, ownProps) {
  const { target } = ownProps;
  return {
    target,
    comments: comments.comments
  }
}

function mapDispatchToProps (dispatch) {
  return {
    upvote: (data) => dispatch(upvoteComment(data)),
    downvote: (data) => dispatch(downvoteComment(data)),
    onUpvote: (data) => dispatch(upvotePost(data)),
    onDownvote: (data) => dispatch(downvotePost(data)),
    onEdit: (data) => dispatch(editPost(data)),
    onDelete: (data) => dispatch(deletePost(data)),
    fetchComments: (data) => dispatch(obtainComments(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)

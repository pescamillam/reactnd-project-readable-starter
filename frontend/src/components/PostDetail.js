import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upvoteComment,
  downvoteComment,
  addPost,
  upvotePost,
  downvotePost,
  editPost,
  deletePost } from '../actions'

class PostDetail extends Component {

  voteup = () => {
    return this.props.onUpvote(this.props.posts.filter((post) => (post.id === this.props.match.params.postid))[0]);
  }

  votedown = () => {
    return this.props.onDownvote(this.props.posts.filter((post) => (post.id === this.props.match.params.postid))[0]);
  }

  delete = () => {
    return this.props.onDelete(this.props.post);
  }

  edit = () => {
    return this.props.onEdit(this.props.post);
  }

  componentDidMount() {
    // const { match, posts } = this.props;
    // const { postid } = match.params;
    // var post;
    // if (posts) {
    //   this.state.post = posts &&
    //     posts.filter((post) => (post.id === postid))[0];
    // }
    // fetchPost(post).then((post) => {
    //   this.setState({post});
    // });
    // fetchComments(post).then((comments) => {
    //   this.setState({comments});
    // });

  }
  render() {
    const { categories, createPost, posts, match, comments } = this.props;
    var post;
    if (posts) {
      post = posts &&
        posts.filter((post) => (post.id === match.params.postid))[0];
    }
    return (
      <div>
        <div className="post-container">
          <div className="post-title">{post && post.title}</div>
          <div>{post && post.body}</div>
          <div>{post && post.author}</div>
          <div className='post-action' onClick={this.voteup}>upvote</div>
          <div className='post-action' onClick={this.votedown}>downvote</div>
          <div className='post-action'>{post && post.voteScore}</div>
          <div className='post-action'>edit</div>
          <div className='post-action'>delete</div>
        </div>
        {comments && comments.map((comment) =>
          <div key={comment.id} className="post-container">
            <div>{comment.body}</div>
            <div>{comment.author}</div>
            <div className='post-action' onClick={this.voteup}>upvote</div>
            <div className='post-action' onClick={this.votedown}>downvote</div>
            <div className='post-action'>{comment.voteScore}</div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  const { target } = ownProps;
  return {
    target
  }
}

function mapDispatchToProps (dispatch) {
  return {
    upvote: (data) => dispatch(upvoteComment(data)),
    downvote: (data) => dispatch(downvoteComment(data)),
    onUpvote: (data) => dispatch(upvotePost(data)),
    onDownvote: (data) => dispatch(downvotePost(data)),
    onEdit: (data) => dispatch(editPost(data)),
    onDelete: (data) => dispatch(deletePost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)

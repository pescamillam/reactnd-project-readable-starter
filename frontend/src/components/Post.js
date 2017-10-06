import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { upvoteComment, downvoteComment } from '../actions'

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post-container">
        <div className="post-title">{post.title}</div>
        <div>{post.author}</div>
        <Link className='post-action post-link' key={post.id} to={`/${post.category}/${post.id}`}>
          Detail
        </Link>
        <div className='post-action' onClick={this.upvote}>
          Upvote
        </div>
        <div className='post-action' onClick={this.downvote}>
          Downvote
        </div>
        <div className='post-action'>score: {post.voteScore}</div>
        <div className='post-action'>edit</div>
        <div className='post-action'>delete</div>
      </div>
    );
  }
}

function mapStateToProps (posts) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
    upvote: (data) => dispatch(upvoteComment(data)),
    downvote: (data) => dispatch(downvoteComment(data))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Post))

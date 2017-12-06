import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost, upvotePost } from '../actions'

class Post extends Component {

  voteup = () => {
    return this.props.onUpvote(this.props.post);
  }

  render() {
    const { post } = this.props;
    return (
      <div className="post-container">
        <div className="post-title">{post.title}</div>
        <div>{post.author}</div>
        <Link className='post-action' key={post.id} to={`/${post.category}/${post.id}`} className="post-link">
          Detail
        </Link>
        <div className='post-action' onClick={this.voteup}>
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


const mapStateToProps = (state, ownProps) => {
  const { target } = ownProps;
  return {
    target,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onUpvote: (data) => dispatch(upvotePost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)

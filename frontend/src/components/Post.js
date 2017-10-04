import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post-container">
        <div className="post-title">{post.title}</div>
        <div>{post.author}</div>
        <Link className='post-action' key={post.id} to={`/${post.category}/${post.id}`} className="post-link">
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
  upvote = () => {

  }
  downvote = () => {
    
  }
}

export default Post

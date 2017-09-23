import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    let score = 0;
    const { post } = this.props;
    return (
      <div className="post">
        <div>{post.title}</div>
        <div>{post.author}</div>
        <div>{post.voteScore}</div>
        <Link key={post.id} to={`/${post.category}/${post.id}`} className="post-link">
          Detail
        </Link>
        <div>
          Upvote
        </div>
        <div>
          Downvote
        </div>
        <div>score: {score}</div>
        <div>edit</div>
        <div>delete</div>
      </div>
    );
  }
}

export default Post

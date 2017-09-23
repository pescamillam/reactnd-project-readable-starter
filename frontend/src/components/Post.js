import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  state = {
    score: 0
  }
  render() {
    const { post } = this.props;
    const { score } = this.state;
    return (
      <div className="post-container">
        <div className="post-title">{post.title}</div>
        <div>{post.author}</div>
        <div>{post.voteScore}</div>
        <Link key={post.id} to={`/${post.category}/${post.id}`} className="post-link">
          Detail
        </Link>
        <div onClick={this.upvote}>
          Upvote
        </div>
        <div onClick={this.downvote}>
          Downvote
        </div>
        <div>score: {post.voteScore}</div>
        <div>edit</div>
        <div>delete</div>
      </div>
    );
  }
  upvote = () => {
    this.setState(() => ({ score: this.state.score + 1 }));
  }
  downvote = () => {
    this.setState(() => ({ score: this.state.score > 0 ? this.state.score - 1 : 0 }));
  }
}

export default Post

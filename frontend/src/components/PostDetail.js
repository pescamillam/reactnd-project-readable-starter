import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostDetail extends Component {
  render() {
    let score = 0;
    const { post } = this.props;
    return (
      <div className="list-posts">
        <div className="list-posts-title">
          <h1>Post</h1>
        </div>
        <div>
          post
        </div>
      </div>
    );
  }
}

export default PostDetail

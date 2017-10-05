import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPost, fetchComments } from '../utils/api'

class PostDetail extends Component {
  state = {
    post: {},
    comments: []
  }
  componentDidMount() {
    const { match } = this.props;
    const { post, category } = match.params;
    fetchPost(post).then((post) => {
      this.setState({post});
    });
    fetchComments(post).then((comments) => {
      this.setState({comments});
    });

  }
  render() {
    let score = 0;
    const { post, comments } = this.state;
    return (
      <div>
        <div className="post-container">
          <div className="post-title">{post.title}</div>
          <div>{post.body}</div>
          <div>{post.author}</div>
          <div className='post-action'>upvote</div>
          <div className='post-action'>downvote</div>
          <div className='post-action'>{post.voteScore}</div>
          <div className='post-action'>edit</div>
          <div className='post-action'>delete</div>
        </div>
        {comments.map((comment) =>
          <div key={comment.id} className="post-container">
            <div>{comment.body}</div>
            <div>{comment.author}</div>
            <div className='post-action'>upvote</div>
            <div className='post-action'>downvote</div>
            <div className='post-action'>{comment.voteScore}</div>
          </div>
        )}
      </div>
    );
  }
}

export default PostDetail

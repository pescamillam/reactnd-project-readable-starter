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
        <div>
          {post.category}
        </div>
        <div>
          {post.title}
        </div>
        <div>
          {post.voteScore}
        </div>
        <div>
          {post.body}
        </div>
        <div>
          {post.author}
        </div>
        <div>
          edit
        </div>
        <div>
          delete
        </div>
        {comments.map((comment) =>
          <div>
            <div>{comment.body}</div>
            <div>{comment.author}</div>
            <div>{comment.voteScore}</div>
            <div>upvote</div>
            <div>downvote</div>
          </div>
        )}
      </div>
    );
  }
}

export default PostDetail

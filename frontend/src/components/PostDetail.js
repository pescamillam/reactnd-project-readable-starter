import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { upvoteComment,
  downvoteComment,
  upvotePost,
  downvotePost,
  deletePost,
  obtainComments,
  addCommentAction,
  deleteCommentAction } from '../actions'

class PostDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: 'aut',
      body: 'bod',
      parentId: this.props.match.params.postid};
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createComment(this.state);
  };

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  };

  voteup = () => {
    return this.props.onUpvote(this.props.posts
      .filter((post) => (post.id === this.props.match.params.postid))[0]);
  };

  votedown = () => {
    return this.props.onDownvote(this.props.posts
      .filter((post) => (post.id === this.props.match.params.postid))[0]);
  };

  upvoteComment = (data) => {
    return this.props.upvote(data);
  };

  downvoteComment = (data) => {
    return this.props.downvote(data);
  };

  deleteComment = (data) => {
    return this.props.onDeleteComment(data);
  };

  delete = () => {
    return this.props.onDelete(this.props.post);
  };

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.postid);
  }

  render() {
    const { posts, comments, match } = this.props;
    const { postid, category } = match.params;
    let postcomments;
    if (comments) {
      postcomments = comments.filter(comment => comment && comment.parentId === postid);
    }

    let post;
    if (posts) {
      post = posts &&
        posts.filter((post) => (post.id === postid))[0];
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
          <Link className='post-action post-link' key={`edit`} to={`/${category}/${postid}/edit`}>
            Edit
          </Link>
          <div className='post-action' onClick={this.delete}>delete</div>
          <div className='post-action'>comments({postcomments && postcomments.length})</div>
        </div>
        {postcomments && postcomments.map((comment) => comment &&
          <div key={comment.id} className="post-container">
            <div>{comment.body}</div>
            <div>{comment.author}</div>
            <div className='post-action' onClick={() => this.upvoteComment(comment)}>upvote</div>
            <div className='post-action' onClick={() => this.downvoteComment(comment)}>downvote</div>
            <div className='post-action' onClick={() => this.deleteComment(comment)}>delete</div>
            <div className='post-action'>{comment.voteScore}</div>
          </div>
        )}
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="label">Add comment</div><br/>
          <div className="label">author</div>
          <input className="form-field" value={this.state.author} id="author" type="text"/>
          <div className="label">body</div>
          <input className="form-field" value={this.state.body} id="body" type="text"/>
          <div className="row">
            <input className="submitButton" type="submit"/>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps ({ comments, posts }) {
  return {
    comments: comments.comments,
    posts: posts.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    upvote: (data) => dispatch(upvoteComment(data)),
    downvote: (data) => dispatch(downvoteComment(data)),
    onUpvote: (data) => dispatch(upvotePost(data)),
    onDownvote: (data) => dispatch(downvotePost(data)),
    onDelete: (data) => dispatch(deletePost(data)),
    onDeleteComment: (data) => dispatch(deleteCommentAction(data)),
    fetchComments: (data) => dispatch(obtainComments(data)),
    createComment: (data) => dispatch(addCommentAction(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)

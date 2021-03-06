import React, { Component } from 'react';
import { addPost, editPostAction } from '../actions';
import { connect } from 'react-redux';

class CreatePost extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { history, match } = this.props;
    const postToSend = this.state;
    event.preventDefault();
    if (match.params.postid) {
      postToSend.id = match.params.postid;
      this.props.editPost(postToSend);
    } else {
      postToSend.category = this.state.category || 'react';
      this.props.createPost(postToSend);
    }
    history.push('/');
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  render() {
    const { posts, match } = this.props;
    let post;
    if (posts) {
      post = posts &&
        posts.filter((post) => (post.id === match.params.postid))[0];
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="label">title</div>
          <input className="form-field" value={this.state.title || (post && post.title) } id="title" type="text"/>
          <div className="label">author</div>
          <input className="form-field" value={this.state.author || (post && post.author) } id="author" type="text"/>
          <div className="label">body</div>
          <input className="form-field" value={this.state.body || (post && post.body) } id="body" type="text"/>
          <div className="label">category</div>
          <div className="form-field">
            <select value={this.state.category || (post && post.category) } id="category">
            {this.props.categories.map((category) =>
              <option value={category.name} key={category.name}>{category.name}</option>
            )}
            </select>
          </div>
          <div className="row">
            <input className="submitButton" type="submit"/>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps ({ categories, posts }) {
  return {
    categories: categories,
    posts: posts.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createPost: (data) => dispatch(addPost(data)),
    editPost: (data) => dispatch(editPostAction(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost)

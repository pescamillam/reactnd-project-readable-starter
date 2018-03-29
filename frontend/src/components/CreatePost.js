import React, { Component } from 'react';
import { addPost } from '../actions';
import { connect } from 'react-redux';

class CreatePost extends Component {

  constructor(props) {
    super(props);
    this.state = {title: 'coconut', author: 'aut', body: 'bod', category: 'react'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { history } = this.props;
    event.preventDefault();
    this.props.createPost(this.state);
     history.push('/');
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  render() {
    debugger
    const { categories, createPost, posts, match } = this.props;
    var post;
    if (posts) {
      post = posts &&
        posts.filter((post) => (post.id === match.params.postid))[0];
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="label">title</div>
          <input className="form-field" value={(post && post.title) || this.state.title} id="title" type="text"/>
          <div className="label">author</div>
          <input className="form-field" value={(post && post.author) || this.state.author} id="author" type="text"/>
          <div className="label">body</div>
          <input className="form-field" value={(post && post.body) || this.state.body} id="body" type="text"/>
          <div className="label">category</div>
          <div className="form-field">
            <select value={this.state.category} id="category">
            {this.props.categories.map((category) =>
              <option value={category.name}>{category.name}</option>
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

function mapStateToProps (state, props) {
  return {
    categories: state.categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    createPost: (data) => dispatch(addPost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost)

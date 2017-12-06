import React, { Component } from 'react';
import { addPost } from '../actions';
import { connect } from 'react-redux';

class CreatePost extends Component {
  render() {
    const { categories, createPost } = this.props;
    return (
      <div>
        <div>title</div>
        <input id="title" type="text"/>
        <div>author</div>
        <input id="author" type="text"/>
        <div>category</div>
        <div>
          <select id="category">
          {this.props.categories.map((category) =>
            <option value={category.name}>{category.name}</option>
          )}
          </select>
        </div>
        <input type="submit" onClick={createPost()}/>
      </div>
    );
  }
}

function mapStateToProps () {

  return {
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

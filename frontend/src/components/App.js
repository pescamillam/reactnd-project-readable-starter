import React, { Component } from 'react';
import { fetchCategories, fetchAllPosts } from '../utils/api'

class App extends Component {

  state = {
    categories: [],
    posts: []
  }

  componentDidMount() {
    fetchCategories().then((categories) => this.setState({categories}));
    fetchAllPosts().then((posts) => this.setState({posts}));
  }

  render() {
    return (
      <div>
        <div>
          {this.state.categories.map((category) =>
            <div key={category.name}>{category.name}</div>
          )}
        </div>
        <div>
          {this.state.posts.map((post) =>
            <div key={post.id}>{post.title}</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;

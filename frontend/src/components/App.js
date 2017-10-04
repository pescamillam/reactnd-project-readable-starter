import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { fetchCategories, fetchAllPosts } from '../utils/api'
import ListAllPosts from './ListAllPosts'
import ListPostsByCategory from './ListPostsByCategory'
import PostDetail from './PostDetail'
import { connect } from 'react-redux'

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
        <Route exact path='/' render={() => (
          <ListAllPosts categories={this.state.categories} posts={this.state.posts}/>
        )}/>
        <Route exact path='/:category' render={({match}) => (
          <ListPostsByCategory categories={this.state.categories}
            posts={this.state.posts} match={match}/>
        )}/>
        <Route exact path='/:category/:post' render={({match}) => (
          <PostDetail match={match}/>
        )}/>
      </div>
    );
  }
}

function mapStateToProps (posts) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchCategories, fetchAllPosts } from '../utils/api'
import ListAllPosts from './ListAllPosts'
import ListPostsByCategory from './ListPostsByCategory'
import CreatePost from './CreatePost'
import PostDetail from './PostDetail'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

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
        <Switch>
          <Route exact path='/create' render={({match}) => (
            <CreatePost categories={this.state.categories}/>
          )}/>
          <Route exact path='/:category' render={({match}) => (
            <ListPostsByCategory categories={this.state.categories}
              posts={this.state.posts} match={match}/>
          )}/>
        </Switch>
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))

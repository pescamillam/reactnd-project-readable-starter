import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ListAllPosts from './ListAllPosts';
import ListPostsByCategory from './ListPostsByCategory';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { obtainCategories, obtainPosts } from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchAllPosts();
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <div className="list-posts-title">
          <h1>Posts Manager</h1>
        </div>
        <div className="list-posts-content">
          <div>
            <div className='categories-container'>
              <div className='categories-label'>Categories</div>
              <div className='category' key='Home'><Link to={`/`}>Home</Link></div>
              {categories && categories.map((category) =>
                <div className='category' key={category.name}><Link to={`/${category.name}`}>{category.name}</Link></div>
              )}
            </div>
            <div>
              <Route exact path='/' component={ListAllPosts}/>
              <Switch>
                <Route exact path='/createPost' component={CreatePost}/>
                <Route exact path='/:category' component={ListPostsByCategory}/>
              </Switch>
              <Route exact path='/:category/:postid' component={PostDetail}/>
              <Route exact path='/:category/:postid/edit' component={CreatePost}/>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to={`/createPost`}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({categories, posts}) {
  return {
    categories,
    posts: posts.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: () => dispatch(obtainCategories()),
    fetchAllPosts: () => dispatch(obtainPosts())
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))

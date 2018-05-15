import React, { Component } from 'react';
import Post from './Post';
import { connect } from 'react-redux';

class ListPostsByCategory extends Component {
  render() {
    const { posts, match } = this.props;
    const { category } = match.params;
    const postsByCategory = posts && posts.filter((post) => post.category === category);
    return (
    <div className="list-posts">
      <div className="list-posts-content">
        <div>
          <div>
            {postsByCategory && postsByCategory.map((post) =>
              <Post key={post.id} post={post}/>
            )}
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const { posts, categories, post } = state;
  return {
    posts: posts.posts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPostsByCategory)

import React, { Component } from 'react';
import Post from './Post';
import Order from './Order';
import { connect } from 'react-redux';
import { sortTitles } from "../utils/sortFunctions";

class ListPostsByCategory extends Component {
  render() {
    const { posts, match, sort } = this.props;
    const { category } = match.params;
    const postsByCategory = posts && posts.filter((post) => post.category === category);
    postsByCategory && sortTitles(postsByCategory, sort.sortType);
    return (
    <div className="list-posts">
      <div className="list-posts-content">
        <div>
          <Order/>
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

const mapStateToProps = ({ posts, sort }) => {
  return {
    posts: posts.posts,
    sort: sort
  }
};

const mapDispatchToProps = () => {
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPostsByCategory)

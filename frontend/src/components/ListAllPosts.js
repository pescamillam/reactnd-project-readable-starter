import React, { Component } from 'react';
import Post from './Post';
import Order from './Order';
import { connect } from 'react-redux';
import { sortTitles } from "../utils/sortFunctions";

class ListAllPosts extends Component {
  render() {
    const { posts, sort } = this.props;
    posts && sortTitles(posts, sort.sortType);
    return (
    <div className="list-posts">
      <div className="list-posts-content">
        <Order/>
        <div>
          <div>
            {posts && posts.map((post) =>
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
)(ListAllPosts)

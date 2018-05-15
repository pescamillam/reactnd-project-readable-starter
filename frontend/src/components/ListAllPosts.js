import React, { Component } from 'react';
import Post from './Post';
import Order from './Order';
import { connect } from 'react-redux';

class ListAllPosts extends Component {
  render() {
    const { posts } = this.props;
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

const mapStateToProps = ({ posts }) => {
  return {
    posts: posts.posts
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

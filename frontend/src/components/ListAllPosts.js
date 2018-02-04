import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

class ListAllPosts extends Component {
  render() {
    const { categories, posts } = this.props;
    return (
    <div className="list-posts">
      <div className="list-posts-content">
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

export default ListAllPosts

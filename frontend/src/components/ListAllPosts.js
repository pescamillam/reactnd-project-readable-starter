import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

class ListAllPosts extends Component {
  render() {
    const { categories, posts } = this.props;
    return (
    <div className="list-posts">
      <div className="list-posts-title">
        <h1>Readable</h1>
      </div>
      <div>

      </div>
      <div className="list-posts-content">
        <div>
          <div className='categories-container'>
            <div className='categories-label'>Categories</div>
            {categories.map((category) =>
              <div className='category' key={category.name}><Link to={`/${category.name}`}>{category.name}</Link></div>
            )}
          </div>
          <div>
            {posts.map((post) =>
              <Post key={post.id} post={post}/>
            )}
          </div>
        </div>
      </div>
      <div className="open-search">
      </div>
    </div>
    )
  }
}

export default ListAllPosts

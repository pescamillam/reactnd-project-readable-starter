import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

class ListAllPosts extends Component {
  render() {
    const { posts, categories } = this.props;
    const { id } = this.params ? this.params : '';
    return (
    <div className="list-posts">
      <div className="list-posts-title">
        <h1>Readable</h1>
      </div>
      <div>

      </div>
      <div className="list-posts-content">
        <div>
          <div>
            {this.props.categories.map((category) =>
              <div key={category.name}><Link to={`/${category.name}`}>{category.name}</Link></div>
            )}
          </div>
          <div>
            {this.props.posts.map((post) =>
              <Post post={post}/>
            )}
          </div>
          <div>
            {id}
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

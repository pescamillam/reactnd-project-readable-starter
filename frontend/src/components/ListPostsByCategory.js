import React, { Component } from 'react';
import Post from './Post';

class ListPostsByCategory extends Component {
  render() {
    const { posts, match } = this.props;
    const { category } = match.params;
    const postsByCategory = posts.filter((post) => post.category === category);
    return (
    <div className="list-posts">
      <div className="list-posts-title">
        <h1>{ category }</h1>
      </div>
      <div className="list-posts-content">
        <div>
          <div>
            {postsByCategory.map((post) =>
              <Post key={post.id} post={post}/>
            )}
          </div>
        </div>
      </div>
      <div className="open-search">
        <a/>
      </div>
    </div>
    )
  }
}

export default ListPostsByCategory

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { addPost, upvotePost } from '../actions'
=======
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { upvoteComment, downvoteComment } from '../actions'
>>>>>>> 5496e953883efcb3cd07f05faa15ce7845c3851e

class Post extends Component {

  voteup = () => {
    return this.props.onUpvote(this.props.post);
  }

  render() {
    const { post } = this.props;
    return (
      <div className="post-container">
        <div className="post-title">{post.title}</div>
        <div>{post.author}</div>
        <Link className='post-action post-link' key={post.id} to={`/${post.category}/${post.id}`}>
          Detail
        </Link>
        <div className='post-action' onClick={this.voteup}>
          Upvote
        </div>
        <div className='post-action' onClick={this.downvote}>
          Downvote
        </div>
        <div className='post-action'>score: {post.voteScore}</div>
        <div className='post-action'>edit</div>
        <div className='post-action'>delete</div>
      </div>
    );
  }
}

<<<<<<< HEAD

const mapStateToProps = (state, ownProps) => {
  const { target } = ownProps;
  return {
    target,
=======
function mapStateToProps (posts) {
  return {
>>>>>>> 5496e953883efcb3cd07f05faa15ce7845c3851e
  }
}

function mapDispatchToProps (dispatch) {
  return {
<<<<<<< HEAD
    onUpvote: (data) => dispatch(upvotePost(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
=======
    upvote: (data) => dispatch(upvoteComment(data)),
    downvote: (data) => dispatch(downvoteComment(data))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Post))
>>>>>>> 5496e953883efcb3cd07f05faa15ce7845c3851e

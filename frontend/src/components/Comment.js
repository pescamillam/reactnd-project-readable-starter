import React, {Component} from 'react';
import { deleteCommentAction,
  downvoteComment,
  editCommentAction,
  upvoteComment } from "../actions";
import { connect } from 'react-redux';


class Comment extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: props.comment,
      editMode: false
    }
  }

  upvoteComment = (data) => {
    return this.props.upvote(data);
  };

  downvoteComment = (data) => {
    return this.props.downvote(data);
  };

  deleteComment = (data) => {
    return this.props.onDeleteComment(data);
  };

  startEditMode = () => {
    this.setState({editMode: true});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const commentToSend = this.state.comment;
    commentToSend.id = this.props.comment.id;
    this.props.editComment(commentToSend);
    this.setState({editMode: false});
  };

  handleChange = (event) => {
    if (event.target) {
      const commentChanged = {...this.state.comment};
      commentChanged[event.target.id] = event.target.value;
      this.setState({comment: commentChanged});
    }
  };

  render() {
    const { comment } = this.props;
    const { editMode } = this.state;
    return (
      editMode ?
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="label">Edit comment</div><br/>
          <div className="label">author</div>
          <input className="form-field" value={this.state.comment.author} id="author" type="text"/>
          <div className="label">body</div>
          <input className="form-field" value={this.state.comment.body} id="body" type="text"/>
          <div className="row">
            <input className="submitButton" type="submit"/>
          </div>
        </form>
        :
      <div key={comment.id} className="post-container">
        <div>{comment.author}</div>
        <div>{comment.body}</div>
        <div className='post-action' onClick={() => this.upvoteComment(comment)}>upvote</div>
        <div className='post-action' onClick={() => this.downvoteComment(comment)}>downvote</div>
        <div className='post-action' onClick={() => this.deleteComment(comment)}>delete</div>
        <div className='post-action' onClick={this.startEditMode}>Edit</div>
        <div className='post-action'>{comment.voteScore}</div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    upvote: (data) => dispatch(upvoteComment(data)),
    downvote: (data) => dispatch(downvoteComment(data)),
    onDeleteComment: (data) => dispatch(deleteCommentAction(data)),
    editComment: (data) => dispatch(editCommentAction(data))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment)

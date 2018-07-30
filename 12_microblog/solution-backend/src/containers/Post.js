import React from "react";
import "./Post.css";
import { connect } from "react-redux";
import {
  updatePostInAPI,
  sendVoteToAPI,
  sendCommentToAPI,
  removeCommentFromAPI
} from "../actionCreators";

class Post extends React.Component {
  state = {
    isEditing: false,
    title: this.props.post.title,
    body: this.props.post.body,
    text: ""
  };
  toggleEdit = () => {
    this.setState(prevState => {
      return {
        isEditing: !prevState.isEditing
      };
    });
  };
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  editPost = evt => {
    evt.preventDefault();
    this.props.updatePostInAPI(
      this.props.id,
      this.state.title,
      this.state.body
    );
    this.toggleEdit();
  };
  addComment = evt => {
    evt.preventDefault();
    this.props.sendCommentToAPI(this.props.id, this.state.text);
    this.setState({
      text: ""
    });
  };
  render() {
    const comments = this.props.comments.map(comment => (
      <div key={comment.id}>
        {comment.text}
        <button
          className="btn-danger"
          onClick={() =>
            this.props.removeCommentFromAPI(this.props.id, comment.id)
          }
        >
          Delete comment
        </button>
      </div>
    ));
    return (
      <div>
        <div className="Post">
          <div>
            <h3>Title: {this.props.post.title}</h3>
            <h4>Body: {this.props.post.body}</h4>
            <div>
              <span>Votes: {this.props.post.votes}</span>
              <button
                className="btn-warning"
                onClick={() => this.props.sendVoteToAPI(this.props.id, "up")}
              >
                +
              </button>
              &nbsp;
              <button
                className="btn-warning"
                onClick={() => this.props.sendVoteToAPI(this.props.id, "down")}
              >
                -
              </button>
            </div>
            <button className="btn-success" onClick={this.toggleEdit}>
              Edit Post
            </button>
            <button
              className="btn-danger btn-sm"
              onClick={this.props.handleRemove}
            >
              Delete post
            </button>
          </div>
        </div>
        {this.state.isEditing ? (
          <form onSubmit={this.editPost}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              onChange={this.handleChange}
              id="title"
              name="title"
              value={this.state.title}
            />
            <label htmlFor="body">Body:</label>
            <input
              type="text"
              onChange={this.handleChange}
              id="body"
              name="body"
              value={this.state.body}
            />
            <button className="btn-success">Update!</button>
          </form>
        ) : null}
        <div>
          Comments:
          {comments.length > 0 ? comments : null}
        </div>
        <form onSubmit={this.addComment}>
          <label htmlFor="title">Text:</label>
          <input
            type="text"
            onChange={this.handleChange}
            id="text"
            name="text"
            value={this.state.text}
          />
          <button className="btn-success">Add Comment!</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { updatePostInAPI, sendVoteToAPI, removeCommentFromAPI, sendCommentToAPI }
)(Post);

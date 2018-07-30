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
          onClick={() =>
            this.props.removeCommentFromAPI(this.props.id, comment.id)
          }
        >
          X
        </button>
      </div>
    ));
    return (
      <div>
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
            <button>Edit!</button>
          </form>
        ) : (
          <div className="Post">
            <form onSubmit={this.addComment}>
              <label htmlFor="title">Text:</label>
              <input
                type="text"
                onChange={this.handleChange}
                id="text"
                name="text"
                value={this.state.text}
              />
              <button>Add Comment!</button>
            </form>
            <button
              onClick={() => this.props.sendVoteToAPI(this.props.id, "up")}
            >
              +
            </button>
            <button
              onClick={() => this.props.sendVoteToAPI(this.props.id, "down")}
            >
              -
            </button>
            <h3>Votes: {this.props.post.votes}</h3>
            {comments.length > 0 ? comments : null}
            <h3>{this.props.post.title}</h3>
            <div>{this.props.post.body}</div>
            <button onClick={this.toggleEdit}>Edit</button>
            <button onClick={this.props.handleRemove}>X</button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { updatePostInAPI, sendVoteToAPI, removeCommentFromAPI, sendCommentToAPI }
)(Post);

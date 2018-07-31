import React from "react";
import "./Post.css";
import { connect } from "react-redux";
import {
  updatePostInAPI,
  sendVoteToAPI,
  sendCommentToAPI,
  removeCommentFromAPI,
  removePostFromAPI
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
      this.props.post.id,
      this.state.title,
      this.state.body
    );
    this.toggleEdit();
  };

  addComment = evt => {
    evt.preventDefault();
    this.props.sendCommentToAPI(this.props.post.id, this.state.text);
    this.setState({
      text: ""
    });
  };

  render() {
    const comments = this.props.post.comments.map(comment => (
      <div key={comment.id}>
        {comment.text}
        <i
          className="fa fa-times text-danger ml-1"
          onClick={() =>
            this.props.removeCommentFromAPI(this.props.post.id, comment.id)
          }
        />
      </div>
    ));
    return (
      <div>
        <div className="Post">
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
          <div className="Post-section">
            <div>
              <h3>{this.props.post.title}</h3>
              <div>{this.props.post.body}</div>
            </div>
            <div>
              <i
                className="fas fa-edit fa-2x text-primary"
                onClick={this.toggleEdit}
              />
              <i
                className="fas fa-times fa-2x text-danger"
                onClick={() => this.props.removePostFromAPI(this.props.post.id)}
              />
            </div>
          </div>
          <div className="Post-section">
            <h3>Votes: {this.props.post.votes}</h3>
            <div>
              <i
                className="fas fa-thumbs-up fa-2x text-success"
                onClick={() =>
                  this.props.sendVoteToAPI(this.props.post.id, "up")
                }
              />
              <i
                className="fas fa-thumbs-down fa-2x text-danger"
                onClick={() =>
                  this.props.sendVoteToAPI(this.props.post.id, "down")
                }
              />
            </div>
          </div>
          <div className="Post-section">
            Comments:
            {comments.length > 0 ? comments : null}
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
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    updatePostInAPI,
    sendVoteToAPI,
    removeCommentFromAPI,
    sendCommentToAPI,
    removePostFromAPI
  }
)(Post);

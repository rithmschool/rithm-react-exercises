import React from "react";
import "./Post.css";
import { connect } from "react-redux";
import { updatePostInAPI } from "../actionCreators";

class Post extends React.Component {
  state = {
    isEditing: false,
    title: this.props.post.title,
    body: this.props.post.body
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
  editPost = () => {
    this.props.updatePostInAPI(
      this.props.id,
      this.state.title,
      this.state.body
    );
    this.toggleEdit();
  };
  render() {
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
  { updatePostInAPI }
)(Post);

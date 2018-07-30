import React from "react";
import "./NewPostForm.css";
import { connect } from "react-redux";
import { sendPostToAPI } from "../actionCreators";

class NewPostForm extends React.Component {
  state = { title: "", body: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.sendPostToAPI(this.state.title, this.state.body);
    this.setState({ title: "", body: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <form className="NewPostForm" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            className="form-control"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Body:</label>
          <textarea
            className="form-control"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { sendPostToAPI }
)(NewPostForm);

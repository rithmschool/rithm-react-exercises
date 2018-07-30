import React from "react";
import "./NewPostForm.css";

class NewPostForm extends React.Component {
  state = { title: "", body: "" };

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  onBodyChange = e => {
    this.setState({ body: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.handleAdd(this.state.title, this.state.body);
    this.setState({ title: "", body: "" });
  };

  render() {
    return (
      <form className="NewPostForm" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            className="form-control"
            type="text"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
        </div>
        <div className="form-group">
          <label>Body:</label>
          <textarea
            className="form-control"
            value={this.state.body}
            onChange={this.onBodyChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    );
  }
}

export default NewPostForm;

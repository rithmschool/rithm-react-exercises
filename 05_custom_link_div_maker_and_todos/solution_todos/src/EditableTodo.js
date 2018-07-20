import React, { Component } from "react";

export default class EditableTodo extends Component {
  state = {
    task: this.props.task
  };
  handleChange = evt => {
    this.setState({
      task: evt.target.value
    });
  };
  collectInput = evt => {
    evt.preventDefault();
    this.props.updateTodo(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.collectInput}>
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Stop Editing</button>
        </form>
      </div>
    );
  }
}

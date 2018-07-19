import React, { Component } from "react";
import uuidv1 from "uuid/v1"; // const uuidv1 = require('uuid/v1');

export default class NewBoxForm extends Component {
  state = {
    height: "",
    width: "",
    backgroundColor: ""
  };
  changeHeight = evt => {
    this.setState({
      height: evt.target.value
    });
  };
  changeWidth = evt => {
    this.setState({
      width: evt.target.value
    });
  };
  changeBackgroundColor = evt => {
    this.setState({
      backgroundColor: evt.target.value
    });
  };
  gatherInput = evt => {
    evt.preventDefault();
    // height, width, backgroundColor, id
    this.props.createBox({ ...this.state, id: uuidv1() });
    this.setState({
      height: "",
      width: "",
      backgroundColor: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.gatherInput}>
          <div>
            <label htmlFor="height">Height</label>
            <input
              onChange={this.changeHeight}
              type="text"
              name="height"
              value={this.state.height}
              id="height"
            />
          </div>
          <div>
            <label htmlFor="width">Width</label>
            <input
              onChange={this.changeWidth}
              type="text"
              name="width"
              id="width"
              value={this.state.width}
            />
          </div>
          <div>
            <label htmlFor="backgroundColor">backgroundColor:</label>
            <input
              onChange={this.changeBackgroundColor}
              type="text"
              name="backgroundColor"
              value={this.state.backgroundColor}
              id="backgroundColor"
            />
          </div>
          <button>Add a new box!</button>
        </form>
      </div>
    );
  }
}

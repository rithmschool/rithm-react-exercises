import React, { Component } from "react";

export default class Box extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.backgroundColor
          }}
        />
        <button onClick={this.props.removeIndividualBox}>
          Remove The Box!
        </button>
      </div>
    );
  }
}

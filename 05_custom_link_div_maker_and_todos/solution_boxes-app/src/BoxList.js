import React, { Component } from "react";
import Box from "./Box";

export default class BoxList extends Component {
  render() {
    const boxes = this.props.boxes.map(box => (
      <Box
        key={box.id}
        width={box.width}
        height={box.height}
        removeIndividualBox={() => this.props.removeBox(box.id)}
        backgroundColor={box.backgroundColor}
      />
    ));
    return <div>{boxes}</div>;
  }
}

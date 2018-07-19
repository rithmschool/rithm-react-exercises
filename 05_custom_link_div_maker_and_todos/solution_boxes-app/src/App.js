import React, { Component } from "react";
import BoxList from "./BoxList";
import NewBoxForm from "./NewBoxForm";

class App extends Component {
  state = {
    boxes: []
  };
  handleCreate = obj => {
    this.setState({
      boxes: this.state.boxes.concat(obj)
    });
  };
  handleRemove = id => {
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    });
  };
  render() {
    return (
      <div>
        <BoxList boxes={this.state.boxes} removeBox={this.handleRemove} />
        <NewBoxForm createBox={this.handleCreate} />
      </div>
    );
  }
}

export default App;

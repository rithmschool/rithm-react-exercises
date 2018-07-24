import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: { red: "#FF0000", green: "#00FF00", blue: "#0000FF" }
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState(prevState => ({
      // colors: Object.assign({}, newColor, prevState.colors)
      colors: { ...newColor, ...prevState.colors }
    }));
  }

  render() {
    const ColorListWithColors = () => <ColorList colors={this.state.colors} />;

    const NewColorWithHandler = props => (
      <NewColorForm addColor={this.handleAdd} {...props} />
    );

    const ColorWithColor = props => {
      const colorName = props.match.params.color;
      const color = this.state.colors[colorName];
      return color ? (
        <Color {...props} color={color} />
      ) : (
        <Redirect to="/colors" />
      );
    };

    return (
      <Switch>
        <Route exact path="/colors" render={ColorListWithColors} />
        <Route path="/colors/new" render={NewColorWithHandler} />
        <Route path="/colors/:color" render={ColorWithColor} />
        <Redirect to="/colors" />
      </Switch>
    );
  }
}

export default App;

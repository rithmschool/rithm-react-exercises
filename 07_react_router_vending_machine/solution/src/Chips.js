import React, { Component } from "react";
import lays from "./lays.png";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Chips.css";

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bags: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    this.setState(prevState => ({
      bags: [...prevState.bags, { x, y }]
    }));
  }

  render() {
    const bags = this.state.bags.map((bag, i) => (
      <img
        key={i}
        src={lays}
        className="bag"
        style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
      />
    ));
    return (
      <div className="Chips">
        <Message>
          <h1>bags eaten: {this.state.bags.length}</h1>
          <button onClick={this.handleClick}>nom nom nom</button>
          <h1>
            <Link to="/">go back</Link>
          </h1>
        </Message>
        {bags}
      </div>
    );
  }
}

export default Chips;

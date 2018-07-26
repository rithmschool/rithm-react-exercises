import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dog extends Component {
  render() {
    let dogFacts = null;
    if (this.props.currentDog === this.props.name) {
      dogFacts = (
        <div>
          <h1>{`Name: ${this.props.name}`}</h1>
          <h2>{`Age: ${this.props.age}`}</h2>
          <ul>{this.props.facts.map((fact, i) => <li key={i}>{fact}</li>)}</ul>
        </div>
      );
    }
    return (
      <div>
        <Link to={`/dogs/${this.props.name}`}>
          <h1>{this.props.name}</h1>
        </Link>
        <img src={this.props.image} alt="dog picture" />
        {dogFacts}
      </div>
    );
  }
}

export default Dog;

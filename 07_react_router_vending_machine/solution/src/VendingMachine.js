import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import machine from "./machine.png";

const VendingMachine = props => (
  <div
    className="VendingMachine"
    style={{ backgroundImage: `url(${machine})` }}
  >
    <Message>
      <h1>hello i am a vending machine. what would you like to eat?</h1>
    </Message>
    <Message>
      <h1>
        <Link to="/soda">soda</Link>
      </h1>
      <h1>
        <Link to="/chips">chips</Link>
      </h1>
      <h1>
        <Link to="/sardines">fresh sardines</Link>
      </h1>
    </Message>
  </div>
);

export default VendingMachine;

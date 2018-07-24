import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import soda from "./soda.png";
import "./Soda.css";

const Soda = props => (
  <div className="Soda">
    <img src={soda} />
    <Message>
      <h1>OMG SUGARRRRR</h1>
      <h1>
        <Link to="/">go back</Link>
      </h1>
    </Message>
    <img src={soda} />
  </div>
);

export default Soda;

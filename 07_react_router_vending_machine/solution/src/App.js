import React from "react";
import { Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Soda from "./Soda";

const App = props => (
  <div>
    <Route path="/" exact component={VendingMachine} />
    <Route path="/soda" exact component={Soda} />
    <Route path="/chips" exact component={Chips} />
    <Route path="/sardines" exact component={Sardines} />
  </div>
);

export default App;

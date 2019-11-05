import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Screens/Home";
export default (
  <Switch>
    <Route component={Home} exact path="/home" />
  </Switch>
);

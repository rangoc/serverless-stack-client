import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containters/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}
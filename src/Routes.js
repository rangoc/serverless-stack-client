import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containters/Home";
import NotFound from "./containters/NotFound";
import Login from "./containters/Login";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containters/Signup";
import NewNote from "./containters/NewNote";
import Notes from './containters/Notes.js';

export default function Routes({ appProps }) {
    return (
      <Switch>
        <AppliedRoute path="/" exact component={Home} appProps={appProps} />
        <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
        <AppliedRoute path="/signup" exact component={Signup} appProps={appProps} />
        <AppliedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
        <AppliedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />
        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
      </Switch>
    );
}

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//route = /home/*
export default function AuthenticatedRoutes(props) {
  const { user } = props;
  return (
    <Switch>
      <Route exact path="/home">
        <div>auth homepage</div>
      </Route>
      <Route>
        <div>404</div>
      </Route>
    </Switch>
  );
}

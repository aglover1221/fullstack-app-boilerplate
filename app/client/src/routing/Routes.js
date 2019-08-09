import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Component wrappers
import PrivateRoute from "../utils/Private";
import AuthProtected from "../utils/AuthProtected";

//authenticated
import AuthenticatedRoutes from "./AuthenticatedRoutes";
//not authenticated
import UnAuthenticatedRoutes from "./UnAuthenticatedRoutes";
//either authenticated or not
import PublicRoutes from "./PublicRoutes";

const Routes = props => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/home" component={AuthenticatedRoutes} />
        <Route path="/public" component={PublicRoutes} />
        <AuthProtected path="/" component={UnAuthenticatedRoutes} />
      </Switch>
    </Router>
  );
};

export default Routes;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ConfirmEmail from "../components/Auth/ConfirmEmail";

const Public = props => {
  const { user } = props;
  return (
    <Switch>
      <Route
        exact
        path="/public/user/authentication-services/confirm-email/:token"
        component={ConfirmEmail}
      />
    </Switch>
  );
};

export default Public;

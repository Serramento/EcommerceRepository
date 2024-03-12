import React from "react";
import HomePage from "../pages/HomePage"
import { Route, Switch } from "react-router-dom";

function PageContent() {
  return (
  <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
  </div>
  );
}

export default PageContent;

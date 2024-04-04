import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "../pages/ShopPage";

function PageContent() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
          <ShopPage path="/shop" />
        </Route>
      </Switch>
    </div>
  );
}

export default PageContent;

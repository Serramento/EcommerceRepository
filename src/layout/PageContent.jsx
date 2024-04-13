import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";

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
        <Route path="/productPage/:productId">
          <ProductPage />
        </Route>
      </Switch>
    </div>
  );
}

export default PageContent;

import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";

function PageContent() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/productPage/:productId">
          <ProductPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </div>
  );
}

export default PageContent;

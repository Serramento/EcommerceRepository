import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import AboutUsPage from "../pages/AboutUsPage";

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
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/about">
          <AboutUsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default PageContent;

import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "../pages/ShopPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import AboutUsPage from "../pages/AboutUsPage";
import SignUpFormPage from "../pages/SignUpFormPage";
import LoginPage from "../pages/LoginPage";
import { useSelector } from "react-redux";

function PageContent() {
  const productList = useSelector((store) => store.productReducer.productList);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage productList={productList} />
        </Route>
        <Route path="/shop">
          <ShopPage productList={productList} />
        </Route>
        <Route path="/productPage/:productId">
          <ProductPage productList={productList} />
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
        <Route path="/signup">
          <SignUpFormPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default PageContent;

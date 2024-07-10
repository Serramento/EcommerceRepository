import "./App.css";
import React from "react";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import { useSelector } from "react-redux";

function App() {
  const userInfo = useSelector((store) => store.clientReducer.user);
  return (
    <div>
      <Header user={userInfo} />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;

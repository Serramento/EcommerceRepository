import "./App.css";
import React from "react";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import Footer from "./layout/Footer";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Header />
        <PageContent />
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;

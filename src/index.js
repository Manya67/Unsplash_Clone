import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>
);

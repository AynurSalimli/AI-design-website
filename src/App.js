import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  WhatGPT3,
  Header,
  Features,
} from "./containers";
import { Brand, Cta, Navbar } from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header /> 
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;

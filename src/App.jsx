import React, { Component } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Counters from "./components/Counters";
import "./App.css";

const App = () => {
  return (
    <main>
      <Hero />
      <About />
      <Counters />
    </main>
  );
};

export default App;

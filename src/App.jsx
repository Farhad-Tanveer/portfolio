import { useState } from "react";

import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
    </>
  );
}

export default App;

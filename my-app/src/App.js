import React, { Component } from "react";

//Importing components from src/components
import MapTools from "./components/MapTools/MapTools";
import ShamanTools from "./components/ShamanTools/ShamanTools";
import PlayerTools from "./components/PlayerTools/PlayerTools";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
// Routing
import {
  // rest of the elements/components imported remain same
  Outlet,
} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// <BrowserRouter> component to create a base router. Anything outside of this component will render on every page
//Routes component inside BrowserRouter. This component will activate the correct route, much like the JavaScript routes statement. Inside of Routes, add a Route component for each route. In this case, you’ll want the following routes:

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link to="/maptools" style={{ padding: 5 }}>
          MapTools
        </Link>
        <Link to="/shamantools" style={{ padding: 5 }}>
          ShamanTools
        </Link>
        <Link to="/playertools" style={{ padding: 5 }}>
          PlayerTools
        </Link>
      </nav>
      {/* Rest of the code remains same */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playertools" element={<PlayerTools />} />
      </Routes>
    </Router>


  );
}

export default App;

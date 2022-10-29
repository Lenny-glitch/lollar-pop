import React, { Component } from "react";

//Importing components from src/components
import Manatee from "./components/Manatee/Manatee";
import Narwhal from "./components/Narwhal/Narwhal";
import Whale from "./components/Whale/Whale";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
// Routing
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// <BrowserRouter> component to create a base router. Anything outside of this component will render on every page
//Routes component inside BrowserRouter. This component will activate the correct route, much like the JavaScript routes statement. Inside of Routes, add a Route component for each route. In this case, you’ll want the following routes:

// class App extends Component {
//   render() {
//     return (
//       <div className="wrapper">
//         <h1>LIST</h1>

//         <BrowserRouter>
//           <Manatee />
//           <Narwhal />
//           <Whale />
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

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
    </nav>
    {/* Rest of the code remains same */}
  </Router>
  );
}

export default App;

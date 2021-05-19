import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" component={Hero} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Project" component={Project} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

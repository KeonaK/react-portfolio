import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Hero />
        <Route path="/" component={About} />
        <Route path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

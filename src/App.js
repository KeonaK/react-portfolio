import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Hero} />
        <Route path="/hero" component={Hero} />
        <Route path="/about" component={About} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

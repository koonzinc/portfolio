import React from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;

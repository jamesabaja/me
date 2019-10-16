import React, { createRef } from "react";
import "./App.css";
// import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./scss/styles.scss";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import moment from "moment";

const App = () => {
  return (
    <span>
      <Home />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <footer class="footer">
        <div class="content has-text-centered">
          Built with love by James Abaja © {moment().year()} <br />
          <br />
          <a href="https://bulma.io">
            <img
              src="https://bulma.io/images/made-with-bulma.png"
              alt="Made with Bulma"
              width="128"
              height="24"
            />
          </a>
          <br />
          <div id="footer-socialnetworks">
            <a href="https://github.com/jamesabaja" class="fa fa-github"> GitHub</a>
            &nbsp;&nbsp;
            <a href="https://www.linkedin.com/" class="fa fa-linkedin"> Linkedin</a>
            &nbsp;&nbsp;
            <a href="https://twitter.com/" class="fa fa-twitter"> Twitter</a>
          </div>
        </div>
      </footer>
    </span>
  );
};

export default App;

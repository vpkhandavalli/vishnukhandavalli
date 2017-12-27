import React from "react";
import ReactDOM from "react-dom";

import Introduction from "./components/introduction";
import Skills from "./components/skills/skills";
import Jobs from "./components/jobs/jobs";
import Experiences from "./components/experience";
import Responsibilities from "./components/responsibilities";

import "./stylesheets/base.scss";

const App = () => (
  <section className="app">
    <h1>Aaron Lote</h1>
    <hr />
    <div className="row">
      <div className="col-lg-8">
        <Introduction />
        <hr />
        <Experiences />
        <hr />
        <h3>Recent Experience</h3>
        <Jobs />
      </div>
      <div className="col-lg-4 hidden-xs hidden-sm sidebar">
        <p>
          <a href="https://www.github.com/azz0r" target="_blank">
            github.com/azz0r
          </a>
        </p>
        <p>
          <a href="mailto:mail@wuggawoo.com">mail@wuggawoo.com</a>
        </p>
        <h3>Responsibilities</h3>
        <Responsibilities />
        <br />
        <h3>Skills</h3>
        <Skills />
      </div>
    </div>
  </section>
);

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}

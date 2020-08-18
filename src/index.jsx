import * as $ from "jquery";
import Post from "./Post";
import React from "react";
import { render } from "react-dom";
import "./babel";
import "@styles/style.css";
import "@styles/scss.scss";
// import json from "./assets/json.json";
// import xml from "./assets/data.xml";
// import csv from "./assets/data.csv";
import WebpackLogo from "./assets/webpack-logo";
const post = new Post("Webpac Post Title", WebpackLogo);

$("pre").addClass("code").html(post.toString());

// console.log("JSON", json);
// console.log("XML", xml);
// console.log("CSV", csv);

const App = () => (
  <div className="container">
    <h1 className="lol">My WebPack Course</h1>
    <div className="logo"></div>
    <pre></pre>
    <div className="card">
      <h2>SCSS</h2>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));

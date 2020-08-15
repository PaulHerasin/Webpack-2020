import Post from "./Post";
import "./styles/style.css";
import json from "./assets/json.json";
import xml from "./assets/data.xml";
import WebpackLogo from "./assets/webpack-logo.png";
const post = new Post("Webpac Post Title", WebpackLogo);

console.log("Post to String", post.toString());

console.log("JSON", json);
console.log("XML", xml);

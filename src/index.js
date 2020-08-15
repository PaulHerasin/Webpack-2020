import Post from "./Post";
import "./style.css";
import json from "./assets/json.json";
import WebpackLogo from "./assets/webpack-logo.png";
const post = new Post("Webpac Post Title", WebpackLogo);

console.log("Post to String", post.toString());

console.log("JSON", json);

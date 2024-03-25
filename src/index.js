import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css"
import "font-awesome/css/font-awesome.css"
import App from "./App"

// createRoot(<NavBar />, document.getElementById("root"));
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// console.log(element)
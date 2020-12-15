import dotenv from 'dotenv';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

dotenv.config()

ReactDOM.render(<App />, document.getElementById("root"));

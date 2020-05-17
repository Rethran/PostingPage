import React from "react";

import ReactDOM from "react-dom";

import { Route, BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import App from "./App";

import Users from "./users";

import Singlepost from "./singlepost"; {
    /*
      this is where dynamic routing happens
    */
}
const routing = ( < Router >
    <
    div >
    <
    Route exact path = "/"
    component = { App }
    />

    <
    Route exact path = "/user/:userId"
    component = { Users }
    />

    <
    Route path = "/post/:id"
    component = { Singlepost }
    /> </div >
    <
    /Router>
);

ReactDOM.render(routing, document.getElementById("root"));
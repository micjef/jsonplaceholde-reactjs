import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import Post from "./Post";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <p>about</p>
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
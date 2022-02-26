import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from "./Admin";

import Home from "./Home";
import Navbar from "./Navbar";
import Post from "./Post";
import PostUpdate from "./PostUpdate";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
         <Route path="/admin/post/:id/edit">
            <Navbar title='Admin' logic='Log Out' />
            <PostUpdate />
          </Route>
          <Route path="/admin/post/:id">
            <Navbar title='Admin' logic='Log Out' />
            <Post />
          </Route>
          <Route path="/admin/:id">
            <Navbar title='Admin' logic='Log Out' />
            <Admin />
          </Route>
          <Route path="/post/:id">
            <Navbar title='Post' logic='Login' />
            <Post />
          </Route>
          <Route path="/">
            <Navbar title='Homepage' logic='Login' />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
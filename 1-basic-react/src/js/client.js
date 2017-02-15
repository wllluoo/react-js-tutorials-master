import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Layout from "./pages/Layout";
import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Settings from "./pages/Settings";
import Four from "./pages/Four";


const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured} name="123"></IndexRoute>
      <Route path="archives(/:articles)" name="archives555" component={Archives} article='1111'></Route>
      <Route path="settings" name="Settings" component={Settings}></Route>
      <Route path="four" name="four" component={Four}></Route>
    </Route>
  </Router>,
app);

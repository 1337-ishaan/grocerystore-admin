import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Edit from "./components/Edit";
import Create from "./components/Create";
import Show from "./components/Show";
import RecentOrders from "./components/RecentOrders";
import ViewAllOrders from "./components/ViewAllOrders";
import Users from "./components/Users";
import Login from "./components/Login";
import Banner from "./components/Banner";
import NewBannerForm from "./components/NewBannerForm";




ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create" component={Create} />
      <Route path="/show/:id" component={Show} />
      {/* <Route path="/recentOrders" component={RecentOrders} /> */}
      <Route path="/viewAllOrders" component={ViewAllOrders} />
      <Route path="/users" component={Users} />
      <Route path="/dashboard" component={App} />
      <Route path="/banner" component={Banner} />
      <Route path="/newbanner" component={NewBannerForm} />



   
    </div>
  </Router>,
  document.getElementById("root")
);

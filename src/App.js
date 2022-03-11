import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Forgot from "./component/Forgot";
import React, { useEffect } from "react";
import AddUser from "./component/AddUsers";
import Widget from "./component/Widget";
import AllUsers from "./component/AllUsers";
import Search from "./component/Search";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetUser from "./component/GetUser";
import Update from "./component/Update";

// import FindUser from "./component/FindUser";
// import UserDetails from "./component/UserDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route path="/allusers">
              <AllUsers />
            </Route>

            <Route path="/getuser">
              <GetUser />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/forgot">
              <Forgot />
            </Route>
            <Route path="/update">
              <Update />
            </Route>

            <Route path="/adduser">
              <AddUser />
            </Route>
            <Route path="/user/:id">
              <Search />
            </Route>
            {/*
          <Route path="/find">
            <FindUser />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/user/:id">
            <UserDetails />
          </Route> */}
          </Switch>
          <Widget />
        </div>
      </div>
    </Router>
  );
}

export default App;

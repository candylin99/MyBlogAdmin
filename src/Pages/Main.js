import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import Index from "./Index";
function Main() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/index/" exact component={Index} />
    </Router>
  );
}
export default Main;

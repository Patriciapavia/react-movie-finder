import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details";
import Index from "./layout/Index";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />

        <Route exact path="/details/displaymovieitem/:id" component={Details} />
      </Switch>
    </Router>
  );
};

export default App;

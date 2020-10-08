import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import DogOfTheDay from "./DogOfTheDay";

function App(props) {

  const defaultHistory = createBrowserHistory();

  const { history = defaultHistory } = props;
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/dog" component={DogOfTheDay}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

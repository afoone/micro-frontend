import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import DogOfTheDay from "./DogOfTheDay";

function App(props) {

  const defaultHistory = createBrowserHistory();

  const { history = defaultHistory, title } = props;
  console.log("title", title)
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/dog" >
            <DogOfTheDay title={title}></DogOfTheDay>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

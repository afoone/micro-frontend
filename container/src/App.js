import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./Microfrontend";

import "./App.css";
import Menu from "./components/Menu";
import Home from "./Home";
import Header from "./components/Header";

const defaultHistory = createBrowserHistory();


// lectura del env del host de los microfrontends
const {
  REACT_APP_DOGS_HOST: dogsHost,
  REACT_APP_CATS_HOST: catsHost,
} = process.env;



// Creamos tres componentes usando microfrontend
export function Dogs({ history }) {
  return <MicroFrontend history={history} host={dogsHost} name="Dogs" />;
}

export function Cats({ history }) {
  return <MicroFrontend history={history} host={catsHost} name="Cats" />;
}

export function GreetingCat({ history }) {
  return (
    <div>
      <Header />
      <div className="home">
        <MicroFrontend history={history} host={catsHost} name="Cats" />
      </div>
    </div>
  );
}


// Decimos a la aplicación donde tienen que renderizar las rutas
function App() {
  return (
    <Router>
      <Menu ></Menu>

      <Switch>

        <Switch>
          {/* <Route exact path="/cat/" component={Cats} /> */}
          <Route exact path="/cat/:greeting" component={GreetingCat} />

          <Route path="/" component={Home} />
        </Switch>
      </Switch>

    </Router>
  );
}

export default App;
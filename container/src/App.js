import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./Microfrontend";

import "./App.css";

const defaultHistory = createBrowserHistory();


// lectura del env del host de los microfrontends
const {
  REACT_APP_DOGS_HOST: dogsHost,
  REACT_APP_CATS_HOST: catsHost,
} = process.env;

function Header() {
  return (
    <div className="banner">
      <h1 className="banner-title">Perros y gatos</h1>
      <h4>Fotos de perros y gatos</h4>
    </div>
  );
}

// Creamos tres componentes usando microfrontend
function Dogs({ history }) {
  return <MicroFrontend history={history} host={dogsHost} name="Dogs" />;
}

function Cats({ history }) {
  return <MicroFrontend history={history} host={catsHost} name="Cats" />;
}

function GreetingCat({ history }) {
  return (
    <div>
      <Header />
      <div className="home">
        <MicroFrontend history={history} host={catsHost} name="Cats" />
      </div>
    </div>
  );
}

function Home({ history }) {
  const [input, setInput] = useState("");

  const handleOnClick = () => {
    history.push(`/cat/${input}`);
  };

  return (
    <div>
      <Header />
      <div className="home">
        <input
          placeholder="Escribe un saludo"
          defaultValue={input}
          onBlur={(e) => setInput(e.target.value)}
        />
        <button onClick={handleOnClick}>Greet Me</button>
      </div>

      <div className="home">
        <div className="content">
          <div className="cat">
            <Cats />
          </div>
          <div className="dog">
            <Dogs />
          </div>
        </div>
      </div>
    </div>
  );
}

// Decimos a la aplicación donde tienen que renderizar las rutas
function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>

          {/* <Route exact path="/cat/:greeting" component={GreetingCat} /> */}
          <Route path="/" component={Home} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
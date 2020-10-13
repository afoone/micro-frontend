import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'

window.renderDogs = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
  return {
    menu: [
      {
        title: "Ver Perrito",
        to: "/dog/"
      }
    ]
  }
};

window.unmountCats = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};


// Cuando no actúa como microfrontend
if (!document.getElementById('Dogs-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}

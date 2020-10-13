import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import options from './options/options'

window.renderDogs = (containerId, { history, title }) => {
  ReactDOM.render(
    <App history={history} title={title} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
  return options
};

window.unmountCats = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

// Cuando no actúa como microfrontend
if (!document.getElementById('Dogs-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}

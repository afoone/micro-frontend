import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
import options from './options/options'




window.renderCats = (containerId, history) => {
  console.log("Rendering CATS ", containerId, history);



  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );

  serviceWorker.unregister();
  return options
};

window.unmountCats = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};


// Cuando no actúa como microfrontend
if (!document.getElementById('Cats-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}

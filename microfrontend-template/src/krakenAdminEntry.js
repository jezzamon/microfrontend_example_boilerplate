import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root.component.js';
import mfConfig from '../microfrontendConfig.json';

const { renderFunctionName } = mfConfig;

window[`render${renderFunctionName}`] = (containerId, history) => {
  ReactDOM.render(
    <Root history={history} />,
    document.getElementById(containerId),
  );
};

window[`unmount${renderFunctionName}`] = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  };

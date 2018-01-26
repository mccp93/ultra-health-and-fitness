import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import RootContainer from './App';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(RootContainer);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextRootContainer = require('./App');
    render(NextRootContainer);
  });
}

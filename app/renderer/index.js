import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Store from './store/configureStore';

const { history, configureStore } = Store;

const store = configureStore();

render(
  <ErrorBoundary>
    <Root store={store} history={history} />
  </ErrorBoundary>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

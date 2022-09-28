// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '../src/redux/store';

// App
import App from './App';
import { Home } from './pages/Home';

// Render app
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App>
          <Home />
        </App>,
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

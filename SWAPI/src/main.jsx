import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { Provider } from 'react-redux';
import { store } from './core/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// Import Provider và store
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Bọc toàn bộ App trong Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
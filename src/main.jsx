import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import { Provider } from 'react-redux';
import store from './stores/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from "./stores/store";


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
)

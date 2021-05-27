import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'

//redux config
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
)
const persistor = persistStore(store)


axios.defaults.baseURL = "http://127.0.0.1:8000/"
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
    
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

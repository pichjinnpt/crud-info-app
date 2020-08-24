import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import infoReducer from './Component/infoReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { loadState, saveState } from './localStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css';

const store = createStore(infoReducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>, document.getElementById('root'));

export default store
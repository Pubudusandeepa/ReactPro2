import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './component/App';
import reducers from './redusers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
  
    document.querySelector('#root')

);
   
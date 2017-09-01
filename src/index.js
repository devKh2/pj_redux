import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

console.log(store.gstState());
ReactDOM.render(<App />, document.getElementById('root'));

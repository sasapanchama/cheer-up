import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from './store/reducers';

import Home from './components/pages/index';
import Signup from './components/pages/signup';
import Signin from './components/pages/signin';

import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);
const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <Router history={history}>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        {/* <Route path='/' component={Counter} /> */}
        {/* <Route path='/counter/:myParams' component={Counter} /> */}
        {/* <Route component={NotFound}/> */}
      </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

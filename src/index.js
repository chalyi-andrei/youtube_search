import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import { Route, Switch } from 'react-router';
import { ConnectedRouter, connectRouter } from 'connected-react-router';
import registerServiceWorker from './registerServiceWorker';

import Movie from './components/movie/movie';
import reducer from './reducers';

import './index.css';
import App from './App';

const history = createBrowserHistory();
const store = createStore(
  connectRouter(history)(reducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store} >
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/movie/:id" component={Movie}/>
      <Route render={() => (<div>Miss</div>)} />
    </Switch>
  </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
 );
registerServiceWorker();

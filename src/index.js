import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import App from './components/app';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//   	<Router history={hashHistory}>
// 	    <Route path="/" component={App}>
// 	      <Route path="about" component={About}/>
// 	      <Route path="examples" component={Examples}/>
// 	      <IndexRoute component={Weather}/>
// 	    </Route>
//   	</Router>,
//   </Provider>
//   , document.querySelector('.container'));



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));


import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import index from './store/index';

import Index from './view/Index';
import NotFound from './view/NotFound';

const store = createStore(
    combineReducers({
        index,
        routing: routerReducer
    })
);

const handleEnter = function (next, replace, callback) {
    callback();
};

const Routers = () =>
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" onEnter={handleEnter}>
                <IndexRedirect to="/index"/>
                <Route path="/index" component={Index}/>
                <Route path="/not/found" component={NotFound}/>
            </Route>
        </Router>
    </Provider>

export default Routers;

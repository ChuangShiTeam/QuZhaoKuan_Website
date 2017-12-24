import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import index from './store/index';

import Index from './view/Index';
import NotFound from './view/NotFound';
import NewStyle from "./view/NewStyle";
import BurstStyle from "./view/BurstStyle";

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
                <IndexRedirect to="/burst/style"/>
                <Route path="/index" component={Index}/>
                <Route path="/new/style" component={NewStyle}/>
                <Route path="/burst/style" component={BurstStyle}/>
                <Route path="/not/found" component={NotFound}/>
            </Route>
        </Router>
    </Provider>

export default Routers;

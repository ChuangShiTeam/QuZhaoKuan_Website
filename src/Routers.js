import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';

import index from './store/index';
import newStyle from './store/newStyle';
import burstStyle from './store/burstStyle';
import collocation from './store/collocation';
import productList from './store/productList';
import shoppingCart from './store/shoppingCart';

import Index from './view/Index';
import NotFound from './view/NotFound';
import NewStyle from "./view/NewStyle";
import BurstStyle from "./view/BurstStyle";
import Collocation from "./view/Collocation";
import CommodityDetails from "./view/CommodityDetails";
import ProductList from "./view/ProductList";
import Login from "./view/Login";
import ShoppingCart from "./view/ShoppingCart";

const store = createStore(
    combineReducers({
        index,
        newStyle,
        burstStyle,
        collocation,
        productList,
        shoppingCart,
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
                <IndexRedirect to="/shopping/cart"/>
                <Route path="/index" component={Index}/>
                <Route path="/new/style" component={NewStyle}/>
                <Route path="/burst/style" component={BurstStyle}/>
                <Route path="/collocation" component={Collocation}/>
                <Route path="/product/list" component={ProductList}/>
                <Route path="/commodity/details" component={CommodityDetails}/>
                <Route path="/login" component={Login}/>
                <Route path="/shopping/cart" component={ShoppingCart}/>
                <Route path="/not/found" component={NotFound}/>
            </Route>
        </Router>
    </Provider>

export default Routers;

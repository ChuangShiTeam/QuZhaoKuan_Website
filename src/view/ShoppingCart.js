import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Navbar, Nav, NavDropdown, MenuItem, Carousel} from 'react-bootstrap';

import Header from '../component/Header';
import Footer from '../component/Footer';
import NotCart from '../component/NotCart';
import Navigation from '../component/Navigation';

import util from '../common/util';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        util.setTitle('购物车');

        util.scrollToTop(0);
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Header />
                <Navigation />
                    <div className="container col-no-padding">
                        <div className="cart_name margin-top margin-bottom">我的购物车</div>
                        <div className="cart_title">
                            <div className="col-md-2 col-no-padding col-padding-left-10">
                                <label>
                                    <input className="cart_all" type="checkbox" />
                                    <span className="not-weight">全选</span>
                                </label>
                            </div>
                            <div className="col-md-6 col-no-padding col-padding-left-10">商品信息</div>
                            <div className="col-md-1 col-no-padding col-padding-left-10">单价(元)</div>
                            <div className="col-md-1 col-no-padding col-padding-left-10">数量</div>
                            <div className="col-md-1 col-no-padding col-padding-left-10">金额(元)</div>
                            <div className="col-md-1 col-no-padding col-padding-left-10">操作</div>
                        </div>
                        <div className="cart_box margin-top-20 clearfix">
                            <div className="cart_item margin-bottom clearfix">
                                <div className="col-md-2 col-no-padding col-padding-left-10">
                                    <div className="col-md-1 col-no-padding">
                                        <input className="cart_item_all " type="checkbox" />
                                    </div>
                                    <div className="col-xs-11">
                                        <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-no-padding col-padding-left-10">
                                    亚马逊创意简约生命树吊坠项链 欧美个性镂空金色
                                    毛衣链厂家直销
                                </div>
                                <div className="col-md-1 col-no-padding col-padding-left-10">¥19.99</div>
                                <div className="col-md-1 col-no-padding col-padding-left-10">2</div>
                                <div className="col-md-1 col-no-padding col-padding-left-10">¥99.00</div>
                                <div className="col-md-1 col-no-padding col-padding-left-10">删除</div>
                            </div>
                            <div className="cart_item margin-bottom clearfix">
                                <div className="col-md-2 col-no-padding col-padding-left-10">
                                    <div className="col-md-1 col-no-padding">
                                        <input className="cart_item_all " type="checkbox" />
                                    </div>
                                    <div className="col-xs-11">
                                        <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6 col-no-padding col-padding-left-10">
                                    亚马逊创意简约生命树吊坠项链 欧美个性镂空金色
                                    毛衣链厂家直销
                                </div>
                                <div className="col-md-1 col-no-padding col-padding-left-10">¥19.99</div>
                                <div className="col-md-1 col-no-padding col-padding-left-10">2</div>
                                <div className="col-md-1 col-no-padding col-padding-left-10">¥99.00</div>
                                <div className="col-md-1 col-no-padding col-padding-left-10">删除</div>
                            </div>
                        </div>
                        <div className="go_pay margin-top-20">
                            <div className="col-md-2 col-no-padding col-padding-left-10">
                                <label>
                                    <input className="cart_all" type="checkbox" />
                                    <span>全选</span>
                                </label>
                            </div>
                            <div className="col-md-10 col-no-padding text-right">
                                <button>去结算</button>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default connect((state) => {
    return {
        index: state.index
    }
})(ShoppingCart);

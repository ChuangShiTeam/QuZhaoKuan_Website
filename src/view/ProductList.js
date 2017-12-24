import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Navbar, Nav, NavDropdown, MenuItem, Carousel} from 'react-bootstrap';

import Header from '../component/Header';
import Footer from '../component/Footer';
import Navigation from '../component/Navigation';

import util from '../common/util';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        util.setTitle('商品列表');

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
                <div className="all_classify container col-no-padding">
                    <div className="col-md-1 col-xs-2 col-no-padding-right">所有分类</div>
                    <div className="col-md-11 col-xs-10">
                        <div className="col-md-9 col-no-padding">
                            <ul className="list-inline all_item">
                                <li className="col-padding-right margin-right">发夹 <span className="glyphicon glyphicon-remove col-padding-left"></span> </li>
                                <li className="col-padding-right margin-right">头饰 <span className="glyphicon glyphicon-remove col-padding-left"></span> </li>
                            </ul>
                        </div>
                        <div className="col-md-3 text-right col-no-padding">
                            共239984件相关产品
                            <span className="product_up margin-left">
                                <span className="glyphicon glyphicon-chevron-up"></span>
                            </span>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="category_list margin-top">
                        <ul>
                            <li className="col-padding-right-10">
                                <div className="col-md-1 col-xs-2">
                                    <span className="left">分类:</span>
                                </div>
                                <div className="col-md-11 col-xs-10">
                                    <ul className="item list-inline left">
                                        <li><b className="act">当季热卖</b></li>
                                        <li>流行风格</li>
                                        <li>材质精品</li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </li>
                            <li className="col-padding-right-10">
                                <div className="col-md-1 col-xs-2">
                                    <span className="left">分类:</span>
                                </div>
                                <div className="col-md-11 col-xs-10">
                                    <ul className="item list-inline left">
                                        <li>发夹</li>
                                        <li>发夹</li>
                                        <li>发夹</li>
                                        <li>发夹</li>
                                        <li>发夹</li>
                                        <li>发夹</li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </li>
                            <li className="col-padding-right-10">
                                <div className="col-md-1 col-xs-2">
                                    <span className="left">颜色:</span>
                                </div>
                                <div className="col-md-11 col-xs-10">
                                    <ul className="item list-inline left">
                                        <li>红色</li>
                                        <li>黑色</li>
                                        <li>灰色</li>
                                        <li>紫色</li>
                                        <li>蓝色</li>
                                        <li>绿色</li>
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="category_nav margin-top-20 margin-bottom-20">
                        <ul className="list-inline">
                            <li className="act">排序</li>
                            <li>价格</li>
                            <li>销量</li>
                            <li>新品</li>
                        </ul>
                    </div>

                    <div className="pro_item container col-no-padding min_width">
                        <ul className="margin-top-100">
                            <li className="pull-left one">
                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                <p className="index_pro_name text-center margin-top">
                                    <span className="item_pro_name">淡水银河耳饰首发</span>
                                </p>
                                <p className="index_pro_price text-center">¥1200.00</p>
                            </li>
                            <li className="pull-left">
                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                <p className="index_pro_name text-center margin-top">
                                    <span className="item_pro_name">淡水银河耳饰首发</span>
                                </p>
                                <p className="index_pro_price text-center">¥1200.00</p>
                            </li>
                            <li className="pull-left">
                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                <p className="index_pro_name text-center margin-top">
                                    <span className="item_pro_name">淡水银河耳饰首发</span>
                                </p>
                                <p className="index_pro_price text-center">¥1200.00</p>
                            </li>
                            <li className="pull-left">
                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                <p className="index_pro_name text-center margin-top">
                                    <span className="item_pro_name">淡水银河耳饰首发</span>
                                </p>
                                <p className="index_pro_price text-center">¥1200.00</p>
                            </li>
                            <li className="pull-left one">
                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                <p className="index_pro_name text-center margin-top">
                                    <span className="item_pro_name">淡水银河耳饰首发</span>
                                </p>
                                <p className="index_pro_price text-center">¥1200.00</p>
                            </li>
                            <li className="pull-left">
                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                <p className="index_pro_name text-center margin-top">
                                    <span className="item_pro_name">淡水银河耳饰首发</span>
                                </p>
                                <p className="index_pro_price text-center">¥1200.00</p>
                            </li>
                            <li className="pull-left">
                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                <p className="index_pro_name text-center margin-top">
                                    <span className="item_pro_name">淡水银河耳饰首发</span>
                                </p>
                                <p className="index_pro_price text-center">¥1200.00</p>
                            </li>
                            <li className="pull-left">
                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                <p className="index_pro_name text-center margin-top">
                                    <span className="item_pro_name">淡水银河耳饰首发</span>
                                </p>
                                <p className="index_pro_price text-center">¥1200.00</p>
                            </li>
                            <div className="clear-both"></div>
                        </ul>
                    </div>

                    <div className="page text-right">
                        <ul className="pagination">
                            <li><a href="#">&laquo;</a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">&raquo;</a></li>
                        </ul>
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
})(ProductList);

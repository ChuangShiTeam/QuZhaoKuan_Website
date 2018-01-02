import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Navbar, Nav, NavDropdown, MenuItem, Carousel} from 'react-bootstrap';

import Header from '../component/Header';
import Footer from '../component/Footer';
import Navigation from '../component/Navigation';

import util from '../common/util';

class CommodityDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        util.setTitle('商品详情');

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
                        <div className="commodity_title"><b>亚马逊创意简约生命树吊坠项链 欧美个性镂空金色毛衣链厂家直销</b></div>
                        <div className="commodity_main">
                            <div className="pro_img left margin-right">
                                <div className="main_img">
                                    <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                </div>
                                <div className="margin-top">
                                    <ul className="list-inline">
                                        <li className="left">
                                            <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                        </li>
                                        <li className="left">
                                            <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                        </li>
                                        <li className="left">
                                            <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                        </li>
                                        <li className="left">
                                            <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                        </li>
                                        <li className="left">
                                            <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pro_info left margin-right">
                                <div className="pric_info clearfix">
                                    <div className="item">
                                        <div className="name left margin-right">价格</div>
                                        <ul className="left text-center">
                                            <li className="left margin-right"><b>¥</b> <span>6.00</span></li>
                                            <li className="left margin-right"><b>¥</b> <span>6.00</span></li>
                                            <li className="left margin-right"><b>¥</b> <span>6.00</span></li>
                                        </ul>
                                    </div>
                                    <div className="item margin-top">
                                        <div className="name left margin-right">起批量</div>
                                        <ul className="left batch text-center">
                                            <li className="left margin-right">1-50条</li>
                                            <li className="left margin-right">1-50条</li>
                                            <li className="left margin-right">1-50条</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ware_info margin-top">
                                    <p className="proposal_price"><b>建议零售价</b></p>
                                    <div className="item clearfix margin-bottom-20 margin-top-5">
                                        <div className="name left margin-right">商品货号</div>
                                        <ul>
                                            <li className="left margin-right">uww122389</li>
                                        </ul>
                                    </div>
                                    <div className="item clearfix">
                                        <div className="name left margin-right">上架时间</div>
                                        <ul>
                                            <li className="left margin-right col-padding-right-20">2017-12-12</li>
                                            <li className="left margin-right">总共售出1000件</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="spec_info clearfix margin-top-30">
                                    <div className="name left margin-right">颜色</div>
                                    <ul className="clearfix">
                                        <li className="left margin-right">92银</li>
                                        <li className="left margin-right">3.6元</li>
                                        <li className="left margin-right">503对可售</li>
                                        <li className="left margin-right">
                                            <div className="num">
                                                <span className="pull">-</span>
                                                <input type="text" placeholder="1"/>
                                                <span className="push">+</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="act_button">
                                    <button className="on">立即订购</button>
                                    <button>加入购物车</button>
                                    <button>一键铺货</button>
                                    <button>分享朋友圈</button>
                                </div>
                            </div>
                            <div className="pro_recommend left">卖家都在看</div>
                            <div class="clearfix"></div>
                        </div>
                        <div className="ad_img">
                            <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                        </div>
                        <div className="clearfix">
                            <div className="left_vender margin-right left">厂家分类</div>
                            <div className="right_pro_info left">
                                <ul className="tab list-inline">
                                    <li className="on margin-left margin-right col-padding">商品详情</li>
                                    <li className="margin-left margin-right col-padding">成交</li>
                                    <li className="margin-left margin-right col-padding">评价</li>
                                </ul>
                                <div className="image_text margin-bottom-20">
                                    <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                </div>
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
})(CommodityDetails);

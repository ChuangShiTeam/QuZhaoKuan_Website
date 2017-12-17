import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Header from '../component/Header';
import Footer from '../component/Footer';

import util from '../common/util';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        util.setTitle('首页');

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
                    <div className="index_banner margin-top-60 min_width">
                        <div className="index_banner_box container">
                            <div className="index_sidebar">
                                <div className="index_sidebar_title">厂家优选类目</div>
                                <div className="index_sidebar_item">
                                    <div className="index_sidebar_title margin-bottom-20 margin-top-30">时尚饰品</div>
                                    <ul className="list-inline">
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                    </ul>
                                </div>
                                <div className="index_sidebar_item">
                                    <div className="index_sidebar_title margin-bottom-20 margin-top-30">时尚饰品</div>
                                    <ul className="list-inline">
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                    </ul>
                                </div>
                                <div className="index_sidebar_item">
                                    <div className="index_sidebar_title margin-bottom-20 margin-top-30">时尚饰品</div>
                                    <ul className="list-inline">
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                        <li className="col-padding-right">发饰</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="index_nav">
                                <ul className="list-inline">
                                    <li className="act">找新款</li>
                                    <li>找爆款</li>
                                    <li>找搭配</li>
                                    <li>找代工</li>
                                    <li>给扶持</li>
                                </ul>
                            </div>
                            <div className="index_personal">
                                <div className="user_image">
                                    <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                </div>
                                <div className="user_cue">
                                    <div className="index_personal_prompt text-center">您好！欢迎来到趣找款</div>
                                    <div className="user_login_reg line">
                                        <button className="login">登陆</button >
                                        <button className="register">注册</button >
                                    </div>
                                </div>
                                <div className="index_notice margin-top">
                                    <ul>
                                        <li>[公告] 趣找款装商品上传及展示规则</li>
                                        <li>[公告] 趣找款装商品上传及展示规则</li>
                                        <li>[公告] 趣找款装商品上传及展示规则</li>
                                    </ul>
                                    <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="index_sale container min_width">
                        <div className="index_title text-center">特卖专场</div>
                        <div className="index_sale_left pull-left"><img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/></div>
                        <div className="index_sale_right pull-left">
                            <div className="top_item">
                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                            </div>
                            <div className="bottom_left_item pull-left">
                                <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                            </div>
                            <div className="bottom_right_item pull-left">
                                <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="clear-both"></div>
                    </div>
                    <div className="new_product margin-top-20 min_width">
                        <div className="container col-no-padding">
                            <div className="index_title text-center">首发新品</div>
                            <div className="main_left_img pull-left margin-bottom-20">
                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                <p className="index_pro_name text-center margin-top">淡水银河耳饰首发</p>
                                <p className="index_pro_price text-center margin-top margin-bottom-20">¥1200.00</p>
                            </div>
                            <div className="new_item pull-left">
                                <ul>
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
                                </ul>
                                <div className="clear-both"></div>
                            </div>
                        </div>
                    </div>
                    <div className="index_explosion container col-no-padding min_width">
                        <div className="index_title text-center">热卖爆款</div>
                        <div className="main_img">
                            <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                        </div>
                        <ul className="margin-top">
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
                    <div className="index_collocation min_width">
                        <div className="index_title text-center">热卖爆款</div>
                        <ul className="container col-no-padding">
                            <li className="pull-left margin-bottom">
                                <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                <div className="col-padding-left">
                                    <p className="index_collocation_title col-padding-left-10"><b>淡水银河耳饰首发</b></p>
                                    <p className="index_pro_price col-padding-left-10">¥1200.00</p>
                                </div>
                            </li>
                            <li className="pull-left margin-bottom">
                                <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                <div className="col-padding-left">
                                    <p className="index_collocation_title col-padding-left-10"><b>淡水银河耳饰首发</b></p>
                                    <p className="index_pro_price col-padding-left-10">¥1200.00</p>
                                </div>
                            </li>
                            <li className="pull-left margin-bottom">
                                <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                <div className="col-padding-left">
                                    <p className="index_collocation_title col-padding-left-10"><b>淡水银河耳饰首发</b></p>
                                    <p className="index_pro_price col-padding-left-10">¥1200.00</p>
                                </div>
                            </li>
                            <li className="pull-left margin-bottom">
                                <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                <div className="col-padding-left">
                                    <p className="index_collocation_title col-padding-left-10"><b>淡水银河耳饰首发</b></p>
                                    <p className="index_pro_price col-padding-left-10">¥1200.00</p>
                                </div>
                            </li>
                            <div className="clear-both"></div>
                        </ul>
                        <div className="clear-both"></div>
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
})(Index);

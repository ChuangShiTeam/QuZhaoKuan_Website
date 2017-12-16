import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Header from '../component/Header';
import Footer from '../component/Footer';

import constant from '../common/constant';
import http from '../common/http';
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
                    <div className="index_banner margin-top-60">
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

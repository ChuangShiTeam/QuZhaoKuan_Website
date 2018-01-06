import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Navbar, Nav, NavDropdown, MenuItem, Carousel} from 'react-bootstrap';

import Header from '../component/Header';
import Footer from '../component/Footer';
import Navigation from '../component/Navigation';

import util from '../common/util';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        util.setTitle('登陆');

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
                <div className="container col-no-padding margin-top-100">
                    <div className="col-md-6 login_img">
                        <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="login_title margin-top-20 clearfix">
                            <span className="left on">账号密码登陆</span>
                            <span className="right">手机登陆</span>
                        </div>
                        <div className="login_from clearfix">
                            <ul>
                                <li className="form-row row-area margin-top-20">
                                    <label className="form-label"><span className="glyphicon glyphicon-envelope"></span></label>
                                    <span className="form-act">
                                      <input type="text" className="input-block col-padding-left" placeholder="电子邮箱" required="" minlength="4" data-caution="请填写登录帐号，最少4个字符" />
                                    </span>
                                </li>
                                <li className="form-row row-area margin-top-20">
                                    <label className="form-label"><span className="glyphicon glyphicon-asterisk"></span></label>
                                    <span className="form-act">
                                      <input type="text" className="input-block col-padding-left" placeholder="密码" required="" minlength="4" data-caution="请填写登录帐号，最少4个字符" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="margin-top-20 login_item clearfix">
                            <span className="left">
                                <label>
                                    <input type="checkbox" />
                                    <span className="not-weight">自动登陆</span>
                                </label>
                            </span>
                            <span className="right">忘记密码</span>
                        </div>
                        <div className="margin-top-20 login_item clearfix">
                            <button>登陆</button>
                        </div>
                        <div className="margin-top-20 login_item clearfix">
                            <span className="left">其它方式登陆</span>
                            <span className="right">注册账户</span>
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
})(Login);

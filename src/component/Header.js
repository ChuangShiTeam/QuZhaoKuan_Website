import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Navbar, Nav, NavDropdown, MenuItem, Carousel} from 'react-bootstrap';
import {AutoAffix} from 'react-overlays';

import constant from '../common/constant';
import http from '../common/http';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="header margin-bottom-20">
                <div className="navigation">
                    <div className="container col-padding">
                        <div className="pull-left">
                            <Link className="margin-right" to="/index">欢迎来去找款</Link>
                            <Link className="margin-right margin-left" to="/login">请登录</Link>
                            <Link className="margin-right" to="/not/found">免费注册</Link>
                        </div>
                        <div className="pull-right">
                            <Link className="margin-right" to="/not/found">我的去找款</Link>
                            |
                            <Link className="margin-left margin-right" to="/not/found">进货车</Link>
                            |
                            <Link className="margin-left margin-right" to="/not/found">收藏夹</Link>
                            |
                            <Link className="margin-left margin-right" to="/not/found">我是设计师</Link>
                            |
                            <Link className="margin-left margin-right" to="/not/found">我是供应商</Link>
                            |
                            <Link className="margin-left margin-right" to="/not/found">客服中心</Link>
                        </div>
                    </div>
                    <div className="main">
                        <div className="container col-padding">
                            <div className="pull-left">
                                <Link to="/index">
                                    <b className="logo">趣找款</b>
                                    <span>趣找款让饰品采购更简单、有趣</span>
                                </Link>
                            </div>
                            <div className="pull-right">
                                <div className="search left margin-right">
                                    <div className="search-input">

                                    </div>
                                    <div className="search-bottom">
                                        <span className="glyphicon glyphicon-search col-padding-right"></span>
                                            搜索
                                    </div>
                                </div>
                                <Link to="/not/found">
                                    <div className="wagons left">
                                        <span className="glyphicon glyphicon-shopping-cart col-padding-right"></span>
                                        进货车
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

Header.propTypes = {

};

Header.defaultProps = {

};

export default Header;
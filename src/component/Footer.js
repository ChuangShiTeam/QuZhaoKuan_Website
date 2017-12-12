import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Footer extends Component {
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
            <div className="footer">
                <div className="container col-padding">
                    <div className="row copyright margin-top-20">
                        <div className="col-md-2 col-xs-2">
                            <h2 className="footer-title">趣找款</h2>
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <h2>新手指南</h2>
                            <p>了解趣找款</p>
                            <p>注册新用户</p>
                            <p>买家入门</p>
                            <p>卖家入门</p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <h2>采购商服务</h2>
                            <p>找供应商</p>
                            <p>采购平台</p>
                            <p>找货神器</p>
                            <p>企业信用</p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <h2>设计师服务</h2>
                            <p>诚信通服务</p>
                            <p>网销宝服务</p>
                            <p>卖家服务</p>
                            <p>物流服务</p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <h2>交易安全</h2>
                            <p>交易维权攻略</p>
                            <p>买家防骗</p>
                            <p>卖家防骗</p>
                            <p>在线咨询</p>
                        </div>
                        <div className="col-md-2 footer_code">
                            <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1062989499,1682648318&fm=58" alt=""/>
                        </div>
                        <div className="col-xs-12 visible-xs margin-bottom-20">
                        </div>
                    </div>
                    <div className="line hidden-xs"></div>
                    <div className="friendly-link copyright container">
                        <ul>
                            <li>关于我们</li>
                            <li>诚聘英才</li>
                            <li>商务合作</li>
                            <li>帮助中心</li>
                            <li>联系我们</li>
                        </ul>
                        <div className="margin-top-5">@2015 QuZhaoKuan All rights reserved</div>
                    </div>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {

};

Footer.defaultProps = {

};

export default Footer;
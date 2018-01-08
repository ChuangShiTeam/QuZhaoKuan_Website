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
                            <p><Link to="/not/found">了解趣找款</Link></p>
                            <p><Link to="/not/found">注册新用户</Link></p>
                            <p><Link to="/not/found">买家入门</Link></p>
                            <p><Link to="/not/found">卖家入门</Link></p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <h2>采购商服务</h2>
                            <p><Link to="/not/found">找供应商</Link></p>
                            <p><Link to="/not/found">采购平台</Link></p>
                            <p><Link to="/not/found">找货神器</Link></p>
                            <p><Link to="/not/found">企业信用</Link></p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <h2>设计师服务</h2>
                            <p><Link to="/not/found">诚信通服务</Link></p>
                            <p><Link to="/not/found">网销宝服务</Link></p>
                            <p><Link to="/not/found">卖家服务</Link></p>
                            <p><Link to="/not/found">物流服务</Link></p>
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <h2>交易安全</h2>
                            <p><Link to="/not/found">交易维权攻略</Link></p>
                            <p><Link to="/not/found">买家防骗</Link></p>
                            <p><Link to="/not/found">卖家防骗</Link></p>
                            <p><Link to="/not/found">在线咨询</Link></p>
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
                            <li><Link to="/not/found">关于我们</Link></li>
                            <li><Link to="/not/found">诚聘英才</Link></li>
                            <li><Link to="/not/found">商务合作</Link></li>
                            <li><Link to="/not/found">帮助中心</Link></li>
                            <li><Link to="/not/found">联系我们</Link></li>
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
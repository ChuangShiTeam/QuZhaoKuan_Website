import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class NotCart extends Component {
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
            <div className="container col-no-padding not_cart margin-top-100 margin-bottom-20">
                <div className="col-md-6 col-xs-6 icon_cart text-right">
                    <span className="glyphicon glyphicon-shopping-cart col-padding-right"></span>
                </div>
                <div classNam="col-md-6 col-xs-6">
                    <h4>购物袋空空如也，</h4>
                    <h4>快去抢购心仪商品吧~</h4>
                    <div className="margin-top-30">
                        <button className="go_purchase margin-right">立即进货</button>
                        <button className="go_order">查看订单</button>
                    </div>
                </div>
            </div>
        );
    }
}

NotCart.propTypes = {

};

NotCart.defaultProps = {

};

export default NotCart;
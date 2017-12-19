import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Navigation extends Component {
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
            <div className="nav_style margin-bottom-20">
                <div className="container col-no-padding">
                    <span className="category pull-left">厂家优选类目 <b className="pull-right">>></b></span>
                    <ul className="list-inline pull-left">
                        <li>首页</li>
                        <li className="on">找新款</li>
                        <li>找爆款</li>
                        <li>趣搭配</li>
                        <li>找代工</li>
                        <li>要政策</li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
            </div>
        );
    }
}

Navigation.propTypes = {

};

Navigation.defaultProps = {

};

export default Navigation;
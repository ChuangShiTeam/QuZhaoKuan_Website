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
                        <li><Link to="/index">首页</Link></li>
                        <li className="on"><Link to="/new/style">找新款</Link></li>
                        <li><Link to="/burst/style">找爆款</Link></li>
                        <li><Link to="/collocation">趣搭配</Link></li>
                        <li><Link to="/not/found">找代工</Link></li>
                        <li><Link to="/not/found">要政策</Link></li>
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
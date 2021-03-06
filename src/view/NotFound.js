import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from '../component/Header';
import Footer from '../component/Footer';
import util from '../common/util';

class NotFound extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        util.setTitle('404');

        util.scrollToTop(0);
    }

    componentWillReceiveProps(nextProps) {
        util.scrollToTop(0);
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="index">
                <Header history={this.props.history} website_menu_id="" is_show_banner={false}/>
                <div style={{height: '800px'}}>
                    <div className="not-found">

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default connect((state) => {
    return {

    }
})(NotFound);

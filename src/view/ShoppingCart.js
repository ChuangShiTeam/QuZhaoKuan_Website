import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Navbar, Nav, NavDropdown, MenuItem, Carousel} from 'react-bootstrap';

import Header from '../component/Header';
import Footer from '../component/Footer';
import NotCart from '../component/NotCart';
import Navigation from '../component/Navigation';

import util from '../common/util';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        util.setTitle('购物车');

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
                    <div className="container col-no-padding">
                        <NotCart />
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
})(ShoppingCart);

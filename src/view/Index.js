import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Header from '../component/Header';
import Footer from '../component/Footer';

import util from '../common/util';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
        util.setTitle('首页');

        util.scrollToTop(0);
        if (this.props.index.navList && this.props.index.navList.length === 0) {
            //TODO 从后台获取数据
            //本地测试静态数据
            this.props.dispatch({
                type: 'index',
                data: {
                    navList: [
                        {
                            navItemName: '找新款',
                            navItemUrl: '/new/style',
                        },
                        {
                            navItemName: '找爆款',
                            navItemUrl: '/burst/style',
                        },
                        {
                            navItemName: '找搭配',
                            navItemUrl: '/collocation',
                        },
                        {
                            navItemName: '找代工',
                            navItemUrl: '/not/found',
                        },
                        {
                            navItemName: '给扶持',
                            navItemUrl: '/not/found',
                        }
                    ],
                    categoryList: [
                        {
                            categoryItemName: '时尚饰品',
                            children: [{
                                categoryItemName: '发饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '发饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '发饰',
                                categoryItemUrl: '/not/found',
                            }
                            ]
                        },
                        {
                            categoryItemName: '时尚手链',
                            children: [{
                                categoryItemName: '发饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '头饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '手饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '发饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '头饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '手饰',
                                categoryItemUrl: '/not/found',
                            },
                            ]
                        },
                        {
                            categoryItemName: '时尚饰品',
                            children: [{
                                categoryItemName: '发饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '发饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '发饰',
                                categoryItemUrl: '/not/found',
                            }
                            ]
                        },
                        {
                            categoryItemName: '时尚手链',
                            children: [{
                                categoryItemName: '发饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '头饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '手饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '发饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '头饰',
                                categoryItemUrl: '/not/found',
                            },{
                                categoryItemName: '手饰',
                                categoryItemUrl: '/not/found',
                            },
                            ]
                        }
                    ]
                }

            })
        }

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Header />
                    <div className="index_banner margin-top-60 min_width">
                        <div className="index_banner_box container">
                            <div className="index_sidebar">
                                <div className="index_sidebar_title">厂家优选类目</div>
                                {
                                    this.props.index.categoryList.map((category, index) =>
                                        <div className="index_sidebar_item">
                                            <div className="index_sidebar_title margin-bottom-20 margin-top-30">{category.categoryItemName}</div>
                                            <ul className="list-inline">
                                                {
                                                    category.children.map((child, index) =>
                                                        <li className="col-padding-right" key={index}>
                                                            <Link to={child.categoryItemUrl}>{child.categoryItemName}</Link>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>

                                    )
                                }
                            </div>
                            <div className="index_nav">
                                <ul className="list-inline">
                                    {
                                        this.props.index.navList.map((navItem, index) =>
                                            <li key={index}><Link to={navItem.navItemUrl}>{navItem.navItemName}</Link></li>
                                        )
                                    }
                                </ul>
                            </div>
                            <div className="index_personal">
                                <div className="user_image">
                                    <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                </div>
                                <div className="user_cue">
                                    <div className="index_personal_prompt text-center">您好！欢迎来到趣找款</div>
                                    <div className="user_login_reg line">
                                        <Link to="/login"><button className="login">登陆</button></Link>
                                        <Link to="/not/found"><button className="register">注册</button></Link>
                                    </div>
                                </div>
                                <div className="index_notice margin-top">
                                    <ul>
                                        <li><Link to="/not/found">[公告] 趣找款装商品上传及展示规则</Link></li>
                                        <li><Link to="/not/found">[公告] 趣找款装商品上传及展示规则</Link></li>
                                        <li><Link to="/not/found">[公告] 趣找款装商品上传及展示规则</Link></li>
                                    </ul>
                                    <Link to="/not/found">
                                        <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="index_sale container min_width">
                        <div className="index_title text-center">特卖专场</div>
                        <div className="index_sale_left pull-left">
                            <Link to="/not/found">
                                <div className="index_sale_left_img">
                                    <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                </div>
                            </Link>
                        </div>
                        <div className="index_sale_right pull-left">
                            <div className="top_item">
                                <Link to="/not/found">
                                    <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                </Link>
                            </div>
                            <div className="bottom_left_item pull-left">
                                <Link to="/not/found">
                                    <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                </Link>
                            </div>
                            <div className="bottom_right_item pull-left">
                                <Link to="/not/found">
                                    <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                </Link>
                            </div>
                        </div>
                        <div className="clear-both"></div>
                    </div>
                    <div className="new_product margin-top-20 min_width">
                        <div className="container col-no-padding">
                            <div className="index_title text-center">首发新品</div>
                            <div className="main_left_img pull-left margin-bottom-20">
                                <Link to="/not/found">
                                    <div className="main_left_img_box">
                                        <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    </div>
                                    <p className="index_pro_name text-center margin-top">淡水银河耳饰首发</p>
                                    <p className="index_pro_price text-center margin-top margin-bottom-20">¥1200.00</p>
                                </Link>
                            </div>
                            <div className="new_item pull-left">
                                <ul>
                                    <li className="pull-left">
                                        <Link to="/not/found">
                                            <div className="img_box">
                                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                            </div>
                                            <p className="index_pro_name text-center margin-top">
                                                <span className="item_pro_name">淡水银河耳饰首发</span>
                                            </p>
                                            <p className="index_pro_price text-center">¥1200.00</p>
                                        </Link>
                                    </li>
                                    <li className="pull-left">
                                        <Link to="/not/found">
                                            <div className="img_box">
                                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                            </div>
                                            <p className="index_pro_name text-center margin-top">
                                                <span className="item_pro_name">淡水银河耳饰首发</span>
                                            </p>
                                            <p className="index_pro_price text-center">¥1200.00</p>
                                        </Link>
                                    </li>
                                    <li className="pull-left">
                                        <Link to="/not/found">
                                            <div className="img_box">
                                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                            </div>
                                            <p className="index_pro_name text-center margin-top">
                                                <span className="item_pro_name">淡水银河耳饰首发</span>
                                            </p>
                                            <p className="index_pro_price text-center">¥1200.00</p>
                                        </Link>
                                    </li>
                                    <li className="pull-left">
                                        <Link to="/not/found">
                                            <div className="img_box">
                                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                            </div>
                                            <p className="index_pro_name text-center margin-top">
                                                <span className="item_pro_name">淡水银河耳饰首发</span>
                                            </p>
                                            <p className="index_pro_price text-center">¥1200.00</p>
                                        </Link>
                                    </li>
                                    <li className="pull-left">
                                        <Link to="/not/found">
                                            <div className="img_box">
                                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                            </div>
                                            <p className="index_pro_name text-center margin-top">
                                                <span className="item_pro_name">淡水银河耳饰首发</span>
                                            </p>
                                            <p className="index_pro_price text-center">¥1200.00</p>
                                        </Link>
                                    </li>
                                    <li className="pull-left">
                                        <Link to="/not/found">
                                            <div className="img_box">
                                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                            </div>
                                            <p className="index_pro_name text-center margin-top">
                                                <span className="item_pro_name">淡水银河耳饰首发</span>
                                            </p>
                                            <p className="index_pro_price text-center">¥1200.00</p>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="clear-both"></div>
                            </div>
                        </div>
                    </div>
                    <div className="index_explosion container col-no-padding min_width">
                        <div className="index_title text-center">热卖爆款</div>
                        <div className="main_img ">
                            <Link to="/not/found">
                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                            </Link>
                        </div>
                        <ul className="margin-top">
                            <li className="pull-left">
                                <Link to="/not/found">
                                    <div className="img_box">
                                        <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    </div>
                                    <p className="index_pro_name text-center margin-top">
                                        <span className="item_pro_name">淡水银河耳饰首发</span>
                                    </p>
                                    <p className="index_pro_price text-center">¥1200.00</p>
                                </Link>
                            </li>
                            <li className="pull-left">
                                <Link to="/not/found">
                                    <div className="img_box">
                                        <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    </div>
                                    <p className="index_pro_name text-center margin-top">
                                        <span className="item_pro_name">淡水银河耳饰首发</span>
                                    </p>
                                    <p className="index_pro_price text-center">¥1200.00</p>
                                </Link>
                            </li>
                            <li className="pull-left">
                                <Link to="/not/found">
                                    <div className="img_box">
                                        <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    </div>
                                    <p className="index_pro_name text-center margin-top">
                                        <span className="item_pro_name">淡水银河耳饰首发</span>
                                    </p>
                                    <p className="index_pro_price text-center">¥1200.00</p>
                                </Link>
                            </li>
                            <li className="pull-left">
                                <Link to="/not/found">
                                    <div className="img_box">
                                        <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    </div>
                                    <p className="index_pro_name text-center margin-top">
                                        <span className="item_pro_name">淡水银河耳饰首发</span>
                                    </p>
                                    <p className="index_pro_price text-center">¥1200.00</p>
                                </Link>
                            </li>
                            <div className="clear-both"></div>
                        </ul>
                    </div>
                    <div className="index_collocation min_width">
                        <div className="index_title text-center">热卖爆款</div>
                        <ul className="container col-no-padding">
                            <li className="pull-left margin-bottom">
                                <Link to="/not/found">
                                    <div className="collocation_main_li_img">
                                        <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    </div>
                                    <div className="col-padding-left">
                                        <p className="index_collocation_title col-padding-left-10"><b>淡水银河耳饰首发</b></p>
                                        <p className="index_pro_price col-padding-left-10">¥1200.00</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="pull-left margin-bottom">
                                <Link to="/not/found">
                                    <div className="collocation_main_li_img">
                                        <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    </div>
                                    <div className="col-padding-left">
                                        <p className="index_collocation_title col-padding-left-10"><b>淡水银河耳饰首发</b></p>
                                        <p className="index_pro_price col-padding-left-10">¥1200.00</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="pull-left margin-bottom">
                                <Link to="/not/found">
                                    <div className="collocation_main_li_img">
                                        <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    </div>
                                    <div className="col-padding-left">
                                        <p className="index_collocation_title col-padding-left-10"><b>淡水银河耳饰首发</b></p>
                                        <p className="index_pro_price col-padding-left-10">¥1200.00</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="pull-left margin-bottom">
                                <Link to="/not/found">
                                    <div className="collocation_main_li_img">
                                        <img className="img-responsive" src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                    </div>
                                    <div className="col-padding-left">
                                        <p className="index_collocation_title col-padding-left-10"><b>淡水银河耳饰首发</b></p>
                                        <p className="index_pro_price col-padding-left-10">¥1200.00</p>
                                    </div>
                                </Link>
                            </li>
                            <div className="clear-both"></div>
                        </ul>
                        <div className="clear-both"></div>
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

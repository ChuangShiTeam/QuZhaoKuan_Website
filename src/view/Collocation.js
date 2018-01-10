import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Navbar, Nav, NavDropdown, MenuItem, Carousel} from 'react-bootstrap';

import Header from '../component/Header';
import Footer from '../component/Footer';
import Navigation from '../component/Navigation';

import util from '../common/util';

class Collocation extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        util.setTitle('找搭配');

        util.scrollToTop(0);

        if (this.props.collocation.categoryList && this.props.collocation.categoryList.length === 0) {
            //TODO 从后台获取数据
            //本地测试静态数据
            this.props.dispatch({
                type: 'collocation',
                data: {
                    categoryList: [
                        {
                            categoryId: '12345678',
                            categoryName: '爆款分类',
                            children: [{
                                categoryItemId: '453453454',
                                categoryItemName: '发饰',
                            },{
                                categoryItemId: '5567676868',
                                categoryItemName: '耳饰',
                            },{
                                categoryItemId: '4565756756765',
                                categoryItemName: '手饰',
                            }
                            ]
                        },
                        {
                            categoryId: '45656567567',
                            categoryName: '颜色大分类',
                            children: [{
                                categoryItemId: '45622256567567',
                                categoryItemName: '红色',
                            },{
                                categoryItemId: '4562233267567',
                                categoryItemName: '紫橙色',
                            },{
                                categoryItemId: '45621116567567',
                                categoryItemName: '黑橙色',
                            },{
                                categoryItemId: '45689899867',
                                categoryItemName: '灰橙色',
                            },{
                                categoryItemId: '456229967567',
                                categoryItemName: '白橙色',
                            },{
                                categoryItemId: '4562333367567',
                                categoryItemName: '橙橙色',
                            },
                            ]
                        },
                        {
                            categoryId: '45236567567',
                            categoryName: '款式分类',
                            children: [{
                                categoryItemId: '456227777567',
                                categoryItemName: '上衣',
                            },{
                                categoryItemId: '4513136567567',
                                categoryItemName: '下衣',
                            },{
                                categoryItemId: '456000067567',
                                categoryItemName: '内衣',
                            }
                            ]
                        }
                    ]
                }

            })
        }

        if (this.props.collocation.categoryList && this.props.collocation.categoryList.length === 0) {
            //TODO 从后台获取数据
            //本地测试静态数据
            this.props.dispatch({
                type: 'collocation',
                data: {
                    categoryList: [
                        {
                            categoryId: '12345678',
                            categoryName: '时尚分类',
                            children: [{
                                categoryItemId: '453453454',
                                categoryItemName: '发饰',
                            },{
                                categoryItemId: '5567676868',
                                categoryItemName: '耳饰',
                            },{
                                categoryItemId: '4565756756765',
                                categoryItemName: '手饰',
                            }
                            ]
                        },
                        {
                            categoryId: '45656567567',
                            categoryName: '颜色分类',
                            children: [{
                                categoryItemId: '45622256567567',
                                categoryItemName: '红色',
                            },{
                                categoryItemId: '4562233267567',
                                categoryItemName: '紫色',
                            },{
                                categoryItemId: '45621116567567',
                                categoryItemName: '黑色',
                            },{
                                categoryItemId: '45689899867',
                                categoryItemName: '灰色',
                            },{
                                categoryItemId: '456229967567',
                                categoryItemName: '白色',
                            },{
                                categoryItemId: '4562333367567',
                                categoryItemName: '橙色',
                            },
                            ]
                        },
                        {
                            categoryId: '45236567567',
                            categoryName: '款式',
                            children: [{
                                categoryItemId: '456227777567',
                                categoryItemName: '上衣',
                            },{
                                categoryItemId: '4513136567567',
                                categoryItemName: '下衣',
                            },{
                                categoryItemId: '456000067567',
                                categoryItemName: '内衣',
                            }
                            ]
                        }
                    ],

                    goodsList:[
                        {
                            goodsId: '12345678',
                            goodsName: '淡水银河耳饰首发1',
                            goodsPrice: '¥1200.00',
                            goodsImg: 'http://s.amazeui.org/media/i/demos/pure-1.jpg',
                            goodsUrl: '',
                        },
                        {
                            goodsId: '1234528',
                            goodsName: '淡水银河耳饰首发2',
                            goodsPrice: '¥1200.00',
                            goodsImg: 'http://s.amazeui.org/media/i/demos/pure-2.jpg',
                            goodsUrl: '',
                        },
                        {
                            goodsId: '12345178',
                            goodsName: '淡水银河耳饰首发3',
                            goodsPrice: '¥1200.00',
                            goodsImg: 'http://s.amazeui.org/media/i/demos/pure-3.jpg',
                            goodsUrl: '',
                        },

                        {
                            goodsId: '12345178',
                            goodsName: '淡水银河耳饰首发3',
                            goodsPrice: '¥1200.00',
                            goodsImg: 'http://s.amazeui.org/media/i/demos/pure-3.jpg',
                            goodsUrl: '',
                        },

                        {
                            goodsId: '12345178',
                            goodsName: '淡水银河耳饰首发3',
                            goodsPrice: '¥1200.00',
                            goodsImg: 'http://s.amazeui.org/media/i/demos/pure-3.jpg',
                            goodsUrl: '',
                        },

                        {
                            goodsId: '12345178',
                            goodsName: '淡水银河耳饰首发3',
                            goodsPrice: '¥1200.00',
                            goodsImg: 'http://s.amazeui.org/media/i/demos/pure-3.jpg',
                            goodsUrl: '',
                        },

                        {
                            goodsId: '12345178',
                            goodsName: '淡水银河耳饰首发3',
                            goodsPrice: '¥1200.00',
                            goodsImg: 'http://s.amazeui.org/media/i/demos/pure-3.jpg',
                            goodsUrl: '',
                        },
                    ]
                }

            })
        }

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleSelectCategory(categoryId, categoryItem) {
        let selectCategory = this.props.collocation.selectCategory;
        let selectCategoryIndex = selectCategory.findIndex((item, index) => item.categoryId === categoryId);
        if (selectCategoryIndex > -1) {
            selectCategory.splice(selectCategoryIndex, 1);
        }
        categoryItem.categoryId = categoryId;
        selectCategory.push(categoryItem);
        let categoryList = this.props.collocation.categoryList;
        let categoryIndex = categoryList.findIndex((category, index) => category.categoryId === categoryId);
        if (categoryIndex > -1) {
            let newCategoryItem = categoryList[categoryIndex];
            let categoryItemIndex = newCategoryItem.children.findIndex((item, index) => item.categoryItemId === categoryItem.categoryItemId);
            if (categoryItemIndex > -1) {
                newCategoryItem.children.forEach((item) => {
                    item.isActive = false;
                });
                newCategoryItem.children[categoryItemIndex].isActive = true;
                categoryList[categoryIndex] = newCategoryItem;
            }
        }

        this.props.dispatch({
            type: 'collocation',
            data: {
                selectCategory: selectCategory,
                categoryList: categoryList
            }
        })
    }

    handleCancelSelect(categoryId, categoryItemId) {
        let selectCategory = this.props.collocation.selectCategory;  //获取数组元素
        let index = selectCategory.findIndex((categoryItem, index) => categoryItem.categoryItemId === categoryItemId);  //判断元素是否存在
        if (index > -1) {
            selectCategory.splice(index, 1);
            // selectCategory.children[index].isActive = false;
        }

        let categoryList = this.props.collocation.categoryList;
        let categoryIndex = categoryList.findIndex((category, index) => category.categoryId === categoryId);
        if (categoryIndex > -1) {
            let newCategoryItem = categoryList[categoryIndex];

            let categoryItemIndex = newCategoryItem.children.findIndex((item, index) => item.categoryItemId === categoryItemId);
            if (categoryItemIndex > -1) {
                newCategoryItem.children[categoryItemIndex].isActive = false;
                categoryList[categoryIndex] = newCategoryItem;
            }
        }
        this.props.dispatch({
            type: 'collocation',
            data: {
                selectCategory: selectCategory
            }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Navigation />
                <div className="all_classify container col-no-padding">
                    <div className="col-md-1 col-xs-2 col-no-padding-right">所有分类</div>
                    <div className="col-md-11 col-xs-10">
                        <div className="col-md-9 col-no-padding">
                            <ul className="list-inline all_item">
                                {
                                    this.props.collocation.selectCategory.map((categoryItem, index) =>
                                        <li className="col-padding-right margin-right">
                                            {categoryItem.categoryItemName}
                                            <span className="glyphicon glyphicon-remove col-padding-left" onClick={this.handleCancelSelect.bind(this, categoryItem.categoryId, categoryItem.categoryItemId)}></span>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="col-md-3 text-right col-no-padding">
                            共239984件相关产品
                            <span className="product_up margin-left">
                                <span className="glyphicon glyphicon-chevron-up"></span>
                            </span>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="category_list margin-top">
                        <ul>
                            {
                                this.props.collocation.categoryList.map((category, index) =>
                                    <li className="col-padding-right-10 clearfix" key={index}>
                                        <div className="col-md-1 col-xs-2">
                                            <span className="left">{category.categoryName}</span>
                                        </div>
                                        <div className="col-md-11 col-xs-10">
                                            <ul className="item list-inline left">
                                                {
                                                    category.children.map((child, index) =>
                                                        {
                                                            if (child.isActive) {
                                                                return (<li className="clearfix" onClick={this.handleSelectCategory.bind(this, category.categoryId, child)}>
                                                                    <span className="act">{child.categoryItemName}</span>
                                                                </li>)
                                                            } else {
                                                                return (<li className="clearfix" onClick={this.handleSelectCategory.bind(this, category.categoryId, child)}>
                                                                    {child.categoryItemName}
                                                                </li>)
                                                            }
                                                        }
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="category_nav margin-top-20 margin-bottom-20">
                        <ul className="list-inline">
                            <li className="act">排序</li>
                            <li>价格</li>
                            <li>销量</li>
                            <li>新品</li>
                        </ul>
                    </div>

                    <div className="index_collocation collocation_main min_width margin-top-100">
                        <ul className="container col-no-padding">    
                            {
                                this.props.collocation.goodsList.map((goodsList, index) =>
                                    <li className="pull-left margin-bottom">
                                        <Link to={goodsList.goodsUrl}>
                                            <div className="collocation_main_li_img">
                                                <img src="http://s.amazeui.org/media/i/demos/pure-4.jpg" alt=""/>
                                            </div>
                                            <div className="col-padding-left">
                                                <p className="index_collocation_title col-padding-left-10">
                                                    <b>{goodsList.goodsName}</b>
                                                </p>
                                                <p className="index_pro_price col-padding-left-10">{goodsList.goodsPrice}</p>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            }
                            <div className="clear-both"></div>
                        </ul>
                        <div className="clear-both"></div>
                    </div>

                    <div className="page text-right">
                        <ul className="pagination">
                            <li><a href="#">&laquo;</a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">&raquo;</a></li>
                        </ul>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default connect((state) => {
    return {
        collocation: state.collocation
    }
})(Collocation);
/**
 *@Title: dataBank
 *@Description:
 *@Author: hy-zhangb
 *Email: lovewinders@163.com
 *Date: 2017-05-05 18:02
 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
/*首页导航组件*/
class NavList extends React.Component {
    render(){
        let navList = [
            {"name": "个人/企业", "children": ["个人","企业"]},
            {"name": "接入服务商", "children": ["万达","数据堂","阿里"]},
            {"name": "适用领域", "children": ["交通","旅行","汽车","社交"]},
            {"name": "支持格式", "children": ["json","xml"]},
            {"name": "请求方式", "children": ["get","post"]},
            {"name": "存储方式", "children": ["jpg","xls","csv"]}
        ];
        return (
            <ul>
                {
                    navList.map((text, i) =>
                        <li key={i}>
                            <label className="nav-label">
                                {text.name}
                            </label>
                            <span className="nav-span">
                                {
                                    navList[i].children.map((child, j) =>
                                        <label key={j}><input type="checkbox"/>{child}</label>
                                    )
                                }
                            </span>
                        </li>
                    )
                }
            </ul>
        );
    }
}
/*首页导航搜索组件*/
class NavSearch extends React.Component {
    render(){
        return (
            <div className="hy-fr">
                <input type="text" className="nav-search-ipt" placeholder="请输入关键字" />
                <button type="button" className="hy-btn btn-search">搜索</button>
            </div>
        );
    }
}
/*首页导航搜索列表*/
class NavContent extends React.Component {
    render(){
        let dataList = [
            {
                "imgSrc": "images/goodsList.png",
                "name": "身份证信息",
                "desc": "建立科技时代了放假啊律师费大家；了咖啡的就离开洒家费德勒；交流空间；简历库"
            },
            {
                "imgSrc": "images/goodsList.png",
                "name": "身份证信息",
                "desc": "u98098098098"
            },
            {
                "imgSrc": "images/goodsList.png",
                "name": "身份证信息",
                "desc": "u98098098098"
            },
            {
                "imgSrc": "images/goodsList.png",
                "name": "身份证信息",
                "desc": "u98098098098"
            },
            {
                "imgSrc": "images/goodsList.png",
                "name": "身份证信息",
                "desc": "u98098098098"
            }
        ];
        return (
            <div className="goods-box">
                {
                    dataList.map((res, i) =>
                        <div className="goods-list" key={i}>
                            <img width="70" height="70" title={res.name} alt={res.name} src={require('../../images/goodsList.png')}/>
                            <h6>{res.name}</h6>
                            <p>{res.desc}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}
/*分页组件*/
class Pagination extends React.Component {
    constructor(){
        super();
        this.state = {
            dataList: {
                "data": [
                    {
                        "imgSrc": "images/goodsList.png",
                        "name": "身份证信息",
                        "desc": "建立科技时代了放假啊律师费大家；了咖啡的就离开洒家费德勒；交流空间；简历库"
                    },
                    {
                        "imgSrc": "images/goodsList.png",
                        "name": "身份证信息",
                        "desc": "u98098098098"
                    },
                    {
                        "imgSrc": "images/goodsList.png",
                        "name": "身份证信息",
                        "desc": "u98098098098"
                    }
                ],
                "countPage": 9,
                "currentPage": 1,
            },
            item: [1,2,3,4,5]
        }
    }
    handleClick = (e) => {
        //给这处理函数
        let item = [];
        let size = 4;//偶数
        let min = Math.min.apply(null, item);
        let max = Math.max.apply(null, item);
        let pagePar = {
            "countPage": this.state.dataList.countPage,
            "lastPage": this.state.dataList.currentPage,
        };
        let curPage = e.target.getAttribute("data-val");
        if(!(curPage < max && curPage > min)){
            let minNum = Number(curPage) - size/2;
            let maxNum = Number(curPage) + size/2;
            if(minNum <= 0){
                // item = [];
                for(let i=1; i<=size+1; i++){
                    item.push(i);
                }
            }else if(maxNum > pagePar.countPage){
                // item = [];
                let passNum = curPage-size;
                for(let i=passNum; i<=curPage; i++){
                    item.push(i);
                }
            }else{
                // item = [];
                for(let i=minNum; i<=maxNum; i++){
                    item.push(i);
                }
            }
        }
        this.setState(
            {
                dataList: {
                    data: [],
                    countPage: 9,
                    currentPage: curPage
                },
                item: item
            }
        );
    };
    render() {
        let item = this.state.item;
        let pagePar = {
            "countPage": this.state.dataList.countPage,
            "currentPage": this.state.dataList.currentPage,
        };
        return (
            <ul className="page">
                {
                    Math.min.apply(null,item) > 1 ? <li className="pageItem"><Link to={{pathname:"/homeIndex/1"}} onClick={this.handleClick} data-val="1">首页</Link></li>:""
                }
                {
                    item.map((key, i) => {
                        if (pagePar.currentPage == key) {
                            return <li key={i} className="pageItem active"><Link to={{pathname: "/homeIndex/" + key}} onClick={this.handleClick} data-val={key}>{key}</Link></li>;
                        } else {
                            return <li key={i} className="pageItem"><Link to={{pathname: "/homeIndex/" + key}} onClick={this.handleClick} data-val={key}>{key}</Link></li>;
                        }
                    })
                }
                {
                    Math.max.apply(null,item) < pagePar.countPage ? <li className="pageItem"><Link to={{pathname:"/homeIndex/" + pagePar.countPage}} onClick={this.handleClick} data-val={pagePar.countPage}>尾页</Link></li>:""
                }
            </ul>
        )
    }
}
/*首页页面渲染*/
class HomeIndex extends React.Component {
    render(){
        return (
            <div className="con-center">
                <div className="nav-box hy-clearfix">
                    <NavList/>
                    <div className="nav-search hy-clearfix">
                        <NavSearch/>
                    </div>
                    <NavContent/>
                    <div className="page-num-box">
                        <Pagination/>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomeIndex;
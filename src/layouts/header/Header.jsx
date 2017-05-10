/**
 *@Title: dataBank
 *@Description:
 *@Author: hy-zhangb
 *Email: lovewinders@163.com
 *Date: 2017-05-05 18:15
 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
class Header extends React.Component {
    render(){
        return (
            <div>
                <div className="header">
                    <div className="header-center">
                        <div className="header-top hy-clearfix">
                            <span className="home-top hy-fr">
                                <Link className="home-tel" to="/goodsDesc"><i></i>010-82253877</Link>
                                <Link className="home-top-href" to="/homeIndex/1">登录</Link>
                                <Link className="home-top-href" to="/goodsDesc">注册</Link>
                                <Link className="home-top-href" to="/goodsDesc">关于我们</Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="header-title">
                    <div className="header-center header-title-con">
                        <img src={require('../../images/logo.png')}/>
                        <h5>数据统计</h5>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;
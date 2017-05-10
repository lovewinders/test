/**
 *@Title: dataBank
 *@Description:
 *@Author: hy-zhangb
 *Email: lovewinders@163.com
 *Date: 2017-05-05 18:02
 */
import React, {Component} from 'react';
import 'whatwg-fetch';

import './goodsDesc.scss';
/*详情页-图片组件*/
class GoodsImg extends React.Component {
    render(){
        return (
            <div className="gd-box">
                <div className="gd-img">
                    <img src={require('../../images/goodsList.png')} />
                    <p>身份证信息</p>
                </div>
                <div className="gd-info">
                    <div className="gd-info-times">90</div>
                    <p>身份证信息</p>
                </div>
            </div>
        )
    }
}
/*详情页-流程信息*/
class FlowInfo extends React.Component {
    render(){
        return (
            <div>
                <p>流程信息</p>
                <div>
                    图表展示区域
                </div>
            </div>
        )
    }
}
/*详情页-基本信息-table表格*/
class TabelPar extends React.Component {
    render(){
        let dataTh = this.props.dataTh;
        let dataList = this.props.dataList;
        return (
            <table className="base-table">
                <thead>
                <tr>
                    {
                        dataTh.map((res, i) => {
                            return <th key={i}>{res}</th>
                        })
                    }
                </tr>
                </thead>
                <tbody>
                {
                    dataList.map((res, i) => {
                        return (<tr key={i}>
                            {
                                Object.keys(dataList[i]).map((re, j) => {
                                    return <td key={j}>
                                        {
                                            Object.prototype.toString.call(dataList[i][re]) === "[object Boolean]" ?
                                                dataList[i][re] ? "是":"否"
                                                :
                                                dataList[i][re]
                                        }
                                    </td>
                                })
                            }
                        </tr>)
                    })
                }
                </tbody>
            </table>
        )
    }
}
/*详情页-基本信息-jsong格式转换*/
class JsonToString extends React.Component {
    componentDidMount = () => {
        fetch("https://api.github.com/users/octocat/gists").then(function (res) {
            return res.text();
        }).then(function (data) {
            console.log(data);
        })
    };
    handleJsonToStr = (json) => {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return "<pre>" + json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                let cls = 'number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                    } else {
                        cls = 'string';
                    }
                } else if (/true|false/.test(match)) {
                    cls = 'boolean';
                } else if (/null/.test(match)) {
                    cls = 'null';
                }
                return '<span class="' + cls + '">' + match + '</span>';
            }) + "</pre>";
    };
    render(){
        let dataJson =  {
            "msg":"success",
            "result":[
                {
                    "reqParam":[
                        {
                            "name":"姓名 ",
                            "require":true,
                            "type":"name"
                        },
                        {
                            "name":"身份证号码",
                            "require":true,
                            "type":"cardNo"
                        }
                    ]
                },
                {
                    "resParam":[
                        {
                            "name":"生日",
                            "require":"true",
                            "type":"birthday"
                        },
                        {
                            "name":"姓名",
                            "require":"true",
                            "type":"name"
                        },
                        {
                            "name":"身份证号码",
                            "require":"false",
                            "type":"personDocumentNo"
                        },
                        {
                            "name":"最高学历 ",
                            "require":"false",
                            "type":"personDegree"
                        }
                    ]
                }
            ],
            "code":0
        };
        let htmlStr = this.handleJsonToStr(JSON.stringify(dataJson, null, 4));
        return (
            <div dangerouslySetInnerHTML={{__html: htmlStr}}>
            </div>
        )
    }
}
/*详情页-基本信息*/
class BaseInfo extends React.Component {
    render() {
        //模拟数据1
        let dataTh1 = ["参数code", "参数名称", "是否为空", "描述&备注"];
        let dataList1 = [
            {code: "name", name: "姓名", isNull: true, desc: '1'},
            {code: "cardNo", name: "身份证号码", isNull: true, desc: '1'},
            {code: "cardNo_Type", name: "证件类型", isNull: false, desc: '1'}
        ];
        //模拟数据2
        let dataTh2 = ["数据项ID", "数据项名称", "是否可为空", "描述&备注"];
        let dataList2 = [
            {code: "PersonId", name: "身份证号", isNull: false, desc: '1'},
            {code: "PersonName", name: "姓名", isNull: false, desc: '1'},
            {code: "city", name: "城市", isNull: false, desc: '1'},
            {code: "csrq", name: "生日", isNull: false, desc: '1'},
            {code: "resultGmsfhm", name: "省份证号一致性", isNull: false, desc: '1'},
            {code: "resultXm", name: "姓名一致性", isNull: false, desc: '1'},
            {code: "whcd", name: "民族", isNull: false, desc: '1'},
            {code: "xb", name: "性别", isNull: false, desc: '1'},
            {code: "zz", name: "详细地址", isNull: false, desc: '1'},
            {code: "validate_result", name: "该卡是否有数据", isNull: false, desc: '1：有数据 0：无数据'},
            {code: "active_result", name: "该卡活跃状态", isNull: false, desc: '0：非活跃卡；1：活跃卡2：过度活跃卡'},
            {code: "data_result", name: "该卡交易数据", isNull: true, desc: '交易详细数据'},
            {code: "S0046-1", name: "最近第 1 个月交易笔数", isNull: true, desc: '每月交易笔数'}
        ];
        return (
            <div>
                <div className="gd-base-box">
                    <p className="gd-base-tit">流程地址</p>
                    <span>http://192.168.0.1/databank/yhhx</span>
                </div>
                <div className="gd-base-box">
                    <p className="gd-base-tit">请求参数说明：</p>
                    <TabelPar dataTh={dataTh1} dataList={dataList1}/>
                </div>
                <div className="gd-base-box">
                    <p className="gd-base-tit">返回数据详解：</p>
                    <TabelPar dataTh={dataTh2} dataList={dataList2}/>
                </div>
                <div className="gd-base-box">
                    <p className="gd-base-tit">返回结果：</p>
                    <JsonToString/>
                </div>
            </div>
        )
    }
}
class GoodsDesc extends React.Component {
    render(){
        return (
            <div className="con-center">
                <div>
                    <GoodsImg/>
                    <FlowInfo/>
                    <BaseInfo/>
                </div>
            </div>
        );
    }
}
export default GoodsDesc;
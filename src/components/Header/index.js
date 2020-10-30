/*
 * @Description: 
 * @Version: 2.0
 * @Autor: 吴振国
 * @Date: 2020-10-29 10:35:51
 * @LastEditors: 吴振国
 * @LastEditTime: 2020-10-30 14:37:24
 */
import { Col, Row } from 'antd';
import React from 'react';
import utils from '../../utils/utils.js'
import './index.less'

export default class Header extends React.Component {
    state = {
        sysTime : '' 
    }
    componentWillMount() {
        this.setState({
            userName : '河畔一角'
        })
        setInterval((item) => {
            let sysTime = utils.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)         
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎：{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        );
    }
};
/*
 * @Description: 
 * @Version: 2.0
 * @Autor: 吴振国
 * @Date: 2020-10-29 10:39:11
 * @LastEditors: 吴振国
 * @LastEditTime: 2020-10-30 11:19:59
 */
import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import './style/common.less'

export default class Admin extends React.Component{
    render() {
        return (
            <Row className="container">
                <Col span={3} className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span={21} className="main">
                    <Header/>
                    <Row className="content">
                        content
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        )
    }
}
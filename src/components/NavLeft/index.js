/*
 * @Description: 
 * @Version: 2.0
 * @Autor: 吴振国
 * @Date: 2020-10-29 10:35:51
 * @LastEditors: 吴振国
 * @LastEditTime: 2020-10-30 11:25:01
 */

// 问题:  不在state里定义 直接setState 是否等价于 定义在赋值
// retren ( ... )  内容是返回给谁 Menu.Item 是如何接收到的
// menuTreeNode 这个是什么值 结构图 ? 还是数组
// 生命周期

import React from 'react';
import { Menu } from 'antd';
import MenuConfig from '../../config/menuConfig'
import './index.less'
const { SubMenu } = Menu;
export default class NavLeft extends React.Component {
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}> {item.title} </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Imooc</h1>
                </div>
                <Menu theme="dark">
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        );
    }
};
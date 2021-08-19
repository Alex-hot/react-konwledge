/*
 * @Descripttion: 
 * @Author: Alex
 * @Date: 2021-08-19 16:58:23
 */
import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import logo from '../assets/logo.png';
import { withRouter } from 'react-router-dom';
import './layout.less'
import { configRouters } from '../routes';
import Breadcrumbs from "./Breadcrumbs";
const { SubMenu, Item } = Menu;
const { Header, Content, Sider } = Layout;

class PageLayout extends Component {
    handleMenuClick = ({ key }) => {
        this.props.history.push(key)
    }
    renderMenuItem = ({ pathname, title, icon }) => {
        return (
            <Item key={pathname}>
                {icon && <Icon type={icon} />}
                <span>{title}</span>
            </Item>
        )
    }
    renderSubMenu({ pathname, title, icon, children }) {
        return (
            <SubMenu
                key={pathname}
                title={
                    <span>
                        {icon && <Icon type={icon} />}
                        <span>{title}</span>
                    </span>
                }>
                {
                    children && children.map(child => {
                        return child.children ? this.renderSubMenu(child) : this.renderMenuItem(child)
                    })
                }
            </SubMenu>
        )
    }
    render() {
        return (
            <Layout>
                <Header className="diy-header">
                    <div className="diy-logo" >
                        <img src={logo} alt='antd-admin' />
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['/admin/dashboard']}
                            style={{ height: '100%', borderRight: 0 }}
                            onClick={this.handleMenuClick}
                        >
                            {
                                configRouters.map(item => {
                                    return item.children ? this.renderSubMenu(item) : this.renderMenuItem(item)
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumbs />
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {
                                this.props.children
                            }
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }

}
export default withRouter(PageLayout)

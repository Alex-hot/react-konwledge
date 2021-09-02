/*
 * @Descripttion:
 * @Author: Alex
 * @Date: 2021-08-19 16:58:23
 */
import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import logo from "../assets/logo.png";
import { withRouter } from "react-router-dom";
import "./layout.less";
import { configRouters } from "../routes";
import Breadcrumbs from "./Breadcrumbs";
const { SubMenu, Item } = Menu;
const { Header, Content, Sider } = Layout;

class PageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  handleMenuClick = ({ key }) => {
    this.props.history.push(key);
  };
  renderMenuItem = ({ pathname, title, icon }) => {
    return (
      <Item key={pathname}>
        {icon && <Icon type={icon} />}
        <span>{title}</span>
      </Item>
    );
  };
  renderSubMenu({ pathname, title, icon, children }) {
    return (
      <SubMenu
        key={pathname}
        title={
          <span>
            {icon && <Icon type={icon} />}
            <span>{title}</span>
          </span>
        }
      >
        {children &&
          children.map((child) => {
            return child.children
              ? this.renderSubMenu(child)
              : this.renderMenuItem(child);
          })}
      </SubMenu>
    );
  }
  render() {
    return (
      <Layout className="page">
        <Sider width={240}  style={{ background: "#fff" ,height:'100%'}}>
          <div className="logo">
            <img src={logo} alt="logo"></img>
            {!this.state.collapsed && <span>React学习系统</span>}
          </div>
          <Menu
            mode="inline"
            theme="dark"
            className='menuContainer'
            defaultSelectedKeys={["/admin/dashboard"]}
            style={{ borderRight: 0 }}
            onClick={this.handleMenuClick}
          >
            {configRouters.map((item) => {
              return item.children
                ? this.renderSubMenu(item)
                : this.renderMenuItem(item);
            })}
          </Menu>
        </Sider>
        <Layout className='container-wrapper'>
          <Header className="diy-header">
            <div className="diy-logo">哈哈哈哈</div>
          </Header>
          <Content className="content-wrapper">{this.props.children}</Content>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(PageLayout);

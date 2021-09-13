import React from 'react';
import MyMenu from './Menu';
import MyMain from './Main';
import { Layout, Dropdown, Button, Menu } from 'antd';
import logo from '../../assets/images/logo.png';
import './index.scss';
import { Link } from 'react-router-dom';

const { Content, Footer, Sider, Header } = Layout;

class LayoutIndex extends React.PureComponent {
  render() {
    const userInfo = JSON.parse(localStorage.getItem('blog-userinfo'));
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to={'/login'}>退出</Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible onCollapse={this.onCollapse}>
          <img src={logo} className="logo" alt="" />
          <MyMenu />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="layout-header"
            style={{
              padding: '0 15px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Button>{userInfo.nickname}</Button>
            </Dropdown>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            {/* <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              Bill is a cat.
            </div> */}

            <MyMain />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            blog-admin ©2021 Created by zhooson
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutIndex;

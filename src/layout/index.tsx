/*
 * @Author: yangchenguang
 * @Description: 布局页面
 * @Date: 2023-12-21 18:41:53
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-04 19:44:13
 */

import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('首页', '/home', <PieChartOutlined />),
  getItem('form', '/form', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3', <UserOutlined />),
    getItem('Bill', '4', <UserOutlined />),
    getItem('Alex', '5', <UserOutlined />),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App: React.FC = () => {
  // hook
  const navigate = useNavigate()
  const location = useLocation()

  // menu选中key数组
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  // 刷新页面选中当前路由的menu
  useEffect(() => {
    setSelectedKeys([location.pathname])
  }, [location])
  // menu展开收起
  const [collapsed, setCollapsed] = useState(false);
  // menu点击事件
  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key)
  }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="h-8 bg-slate-600 m-4 rounded-md text-center text-sky-500 font-bold leading-8">Logo</div>
        <Menu theme="dark" mode="inline" selectedKeys={selectedKeys} items={items} onClick={handleMenuClick} />
      </Sider>
      <Layout>
        <Header className='p-0' style={{ background: colorBgContainer }} />
        <Content className='flex flex-col mx-4'>
          <Breadcrumb className='my-4'>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        <div
            className='flex-1 p-6'          
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer className='text-center'>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
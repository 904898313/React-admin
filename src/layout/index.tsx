/*
 * @Author: yangchenguang
 * @Description: 布局页面
 * @Date: 2023-12-21 18:41:53
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-24 17:52:40
 */

import React from 'react';
import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
const { Content } = Layout;
import Sidebar from './components/sidebar/index'
import Footer from './components/footer/index'
import Header from './components/header/index'
import Breadcrumb from './components/breadcrumb/index'

const App: React.FC = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className='flex flex-col'>
        <Header />
        <Content className='flex flex-col mx-4 flex-1'>
          <Breadcrumb />
          <div
            className='flex-1 p-6 overflow-auto'
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
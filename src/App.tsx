/*
 * @Author: yangchenguang
 * @Description: app
 * @Date: 2024-01-04 16:38:05
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-24 16:31:07
 */

// 路由
import { BrowserRouter } from "react-router-dom"; // 路由提供者
import Router from './router/index'
import Auth from "@/router/auth.tsx"
// ant 全局样式
import { ConfigProvider } from 'antd';

function App() {
  return (
      <ConfigProvider
        theme={{
          token: {
            // Seed Token，影响范围大
            // colorPrimary: '#00b96b',
            // borderRadius: 2,

            // colorBgContainer: '#f6ffed',
          },
          components: {
            Button: {
              // colorPrimary: 'red',
              // dasdlgorithm: true, // 启用算法
            },
            Input: {
              // colorPrimary: 'red',
              // algorithm: true, // 启用算法
            }
          }
        }}
      >
        <BrowserRouter>
            <Auth>
                <Router />
            </Auth>
        </BrowserRouter>
      </ConfigProvider>
  )
}

export default App

/*
 * @Author: yangchenguang
 * @Description: app
 * @Date: 2024-01-04 16:38:05
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-24 16:31:07
 */

// 路由
import { RouterProvider } from "react-router-dom"; // 路由提供者
import { router } from './router/index'
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

          // 派生变量，影响范围小
          // colorBgContainer: '#f6ffed',
        },
        components: {
          Button: {
            // colorPrimary: 'red',
            // algorithm: true, // 启用算法
          },
          Input: {
            // colorPrimary: 'red',
            // algorithm: true, // 启用算法
          }
        }
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  )
}

export default App

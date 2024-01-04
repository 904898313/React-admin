/*
 * @Author: yangchenguang
 * @Description: app
 * @Date: 2024-01-04 16:38:05
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-04 16:38:05
 */

// 路由
import { RouterProvider } from "react-router-dom"; // 路由提供者
import { router } from './router/index'

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App

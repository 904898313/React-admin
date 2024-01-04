

/*
 * @Author: yangchenguang
 * @Description: 路由
 * @Date: 2024-01-04 16:39:14
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-04 19:15:14
 */

import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from '../layout/index'
import Home from '../views/home/index'
import Form from '../views/form/index'
import Error404 from '../views/error/404'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/home"></Navigate>
    }, {
        element: <Layout />,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/form',
                element: <Form></Form>
            }
        ]
    }, {
        path: '/404',
        element: <Error404 />
    }, {
        path: '*',
        element: <Navigate to="/404" replace />
    }
])

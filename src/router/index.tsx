

/*
 * @Author: yangchenguang
 * @Description: 路由
 * @Date: 2024-01-04 16:39:14
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-23 09:46:07
 */

import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from '../layout/index'
import Home from '../views/home/index'
import Form from '../views/form/index'
import Table from '../views/table/index'
import Error404 from '../views/error/404'
import Tom from '../views/user/tom/index'
import Api from '../views/user/api/index'
// 嵌套餐单
import Menu1 from '../views/menu/menu1'
import Menu21 from '../views/menu/menu2/menu2-1'
import Menu221 from '../views/menu/menu2/menu2-2/menu2-2-1'
import Menu222 from '../views/menu/menu2/menu2-2/menu2-2-2'

export const router = createBrowserRouter([
    {
			path: '/',
			element: <Navigate to="/home"></Navigate>
    },
    {
			element: <Layout />,
			children: [
				{
					path: '/home',
					element: <Home></Home>
				},
				{
					path: '/form',
					element: <Form></Form>
				},
				{
					path: '/table',
					element: <Table></Table>
				},
				{
					children: [
						{
							path: '/user/tom',
							element: <Tom></Tom>
						},
						{
							path: '/user/api',
							element: <Api></Api>
						}
					]
				},
				{
					children: [
						{
							path: '/menu/menu1',
							element: <Menu1></Menu1>
						},
						{
							children: [
								{
									path: '/menu/menu2/Menu2-1',
									element: <Menu21></Menu21>
								},
								{
									children: [
										{
											path: '/menu/menu2/Menu2-2/menu2-2-1',
											element: <Menu221></Menu221>
										},
										{
											path: '/menu/menu2/Menu2-2/menu2-2-2',
											element: <Menu222></Menu222>
										}
									]
								}
							]
						},
					]
				}
			]
    },
    {
			path: '/404',
			element: <Error404 />
    },
    {
			path: '*',
			element: <Navigate to="/404" replace />
    }
])

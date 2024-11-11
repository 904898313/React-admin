

/*
 * @Author: yangchenguang
 * @Description: 路由
 * @Date: 2024-01-04 16:39:14
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-04-17 15:18:58
 */

import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from '../layout/index'
import Home from '../views/home/index'
import Form from '../views/form/index'
import Form2 from '../views/form2/index'
import Table from '../views/table/index'
import Error404 from '../views/error/404'
import Tom from '../views/user/tom/index'
import List from '../views/user/list/index'
import Api from '../views/user/api/index'
import TestMyApi from '../views/user/testMyApi/index'
import TestMome from '../views/user/testMome/index'
// 嵌套餐单
import Menu1 from '../views/menu/menu1'
import Menu21 from '../views/menu/menu2/menu2-1'
import Menu221 from '../views/menu/menu2/menu2-2/menu2-2-1'
import Menu222 from '../views/menu/menu2/menu2-2/menu2-2-2'
// icon
import {
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const routes = [
				{
					label: '首页',
					path: '/home',
					key: '/home',
					element: <Home></Home>,
					icon: <PieChartOutlined />
				},
				{
					label: 'form',
					path: '/form',
					key: '/form',
					element: <Form></Form>,
					icon: <UserOutlined />
				},
				{
					label: 'form2',
					path: '/form2',
					key: '/form2',
					element: <Form2></Form2>,
					icon: <UserOutlined />
				},
				{
					label: 'table',
					path: '/table',
					key: '/table',
					element: <Table></Table>,
					icon: <UserOutlined />
				},
				{
					label: 'User',
					key: '/user',
					icon: <UserOutlined />,
					children: [
						{
							label: '用户列表',
							path: '/user/list',
							key: '/user/list',
							element: <List></List>,
							icon: <UserOutlined />
						},
						{
							label: 'Tom',
							path: '/user/tom',
							key: '/user/tom',
							element: <Tom></Tom>,
							icon: <UserOutlined />
						},
						{
							label: 'api',
							path: '/user/api',
							key: '/user/api',
							element: <Api></Api>,
							icon: <UserOutlined />
						},
						{
							label: 'test-myApi',
							path: '/user/test-myApi',
							key: '/user/test-myApi',
							element: <TestMyApi></TestMyApi>,
							icon: <UserOutlined />
						},
						{
							label: 'testMome',
							path: '/user/testMome',
							key: '/user/testMome',
							element: <TestMome></TestMome>,
							icon: <UserOutlined />
						}
					]
				},
				{
					label: '菜单嵌套',
					key: '/menu',
					icon: <UserOutlined />,
					children: [
						{
							label: '菜单1',
							path: '/menu/menu1',
							key: '/menu/menu1',
							element: <Menu1></Menu1>,
							icon: <UserOutlined />
						},
						{
							label: '菜单2',
							key: '/menu/menu2',
							icon: <UserOutlined />,
							children: [
								{
									label: '菜单2-1',
									path: '/menu/menu2/Menu2-1',
									key: '/menu/menu2/Menu2-1',
									element: <Menu21></Menu21>,
									icon: <UserOutlined />
								},
								{
									label: '菜单2-2',
									key: '/menu/menu2/Menu2-2',
									icon: <UserOutlined />,
									children: [
										{
											label: '菜单2-2-1',
											path: '/menu/menu2/Menu2-2/menu2-2-1',
											key: '/menu/menu2/Menu2-2/menu2-2-1',
											element: <Menu221></Menu221>,
											icon: <UserOutlined />
										},
										{
											label: '菜单2-2-2',
											path: '/menu/menu2/Menu2-2/menu2-2-2',
											key: '/menu/menu2/Menu2-2/menu2-2-2',
											element: <Menu222></Menu222>,
											icon: <UserOutlined />
										}
									]
								}
							]
						},
					]
				}
			]

export const router = createBrowserRouter([
    {
			path: '/',
			element: <Navigate to="/home"></Navigate>
		},
		{
			element: <Layout />,
			children: routes
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

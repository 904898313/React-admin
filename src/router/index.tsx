

/*
 * @Author: yangchenguang
 * @Description: 路由
 * @Date: 2024-01-04 16:39:14
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-04-17 15:18:58
 */

import { Navigate } from "react-router-dom";
import Layout from '../layout/index'
import Home from '../views/home/index'
import Form from '@/views/functions/form/index'
import Table from '../views/functions/table/index'
import Error404 from '../views/error/404'
import Modal from '../views/functions/modal/index'
import Zustand from '../views/functions/zustand/index'
import Login from "@/views/login";

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
		label: '功能',
		key: '/functions',
		icon: <UserOutlined />,
		children: [
			{
				label: 'table',
				path: '/functions/table',
				key: '/functions/table',
				element: <Table></Table>,
				icon: <UserOutlined />
			},
			{

				label: 'form',
				path: '/functions/form',
				key: '/functions/form',
				element: <Form></Form>,
				icon: <UserOutlined />
			},
			{
				label: 'modal',
				path: '/functions/modal',
				key: '/functions/modal',
				element: <Modal></Modal>,
				icon: <UserOutlined />
			},
			{
				label: 'zustand',
				path: '/functions/zustand',
				key: '/functions/zustand',
				element: <Zustand></Zustand>,
				icon: <UserOutlined />
			},

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

export const router = [
	{
		path: '/',
		element: <Navigate to="/home"></Navigate>
	},
	{
		path: '/login',
		element: <Login></Login>,
		meta: {
			noVerificationRequired: true,
		}
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
]

const Router = () => {
	const routes = useRoutes(router);
	return routes;
};

export default Router;


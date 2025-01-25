

/*
 * @Author: yangchenguang
 * @Description: 路由
 * @Date: 2024-01-04 16:39:14
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-04-17 15:18:58
 */

import { Navigate } from "react-router-dom";
import Layout from '@/layout/index'
import Home from '@/views/home/index'
import Form from '@/views/antd/form/index'
import Table from '@/views/antd/table/index'
import Error404 from '@/views/error/404'
import Modal from '@/views/antd/modal/index'
import Zustand from '@/views/function/zustand/index'
import Login from "@/views/login";
import UserRule from "@/views/function/userRule";
import TimerOut from "@/views/function/timerOut";
import TaspectRatio from "@/views/tailwindcss/aspectRatio";
import Flex from "@/views/tailwindcss/flex";
import React from "@/views/function/react";

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
		label: 'Antd',
		key: '/antd',
		icon: <UserOutlined />,
		children: [
			{
				label: 'table',
				path: '/antd/table',
				key: '/antd/table',
				element: <Table></Table>,
				icon: <UserOutlined />
			},
			{

				label: 'form',
				path: '/antd/form',
				key: '/antd/form',
				element: <Form></Form>,
				icon: <UserOutlined />
			},
			{
				label: 'modal',
				path: '/antd/modal',
				key: '/antd/modal',
				element: <Modal></Modal>,
				icon: <UserOutlined />
			},
		]
	},
	{
		label: 'tailwindcss',
		key: '/tailwindcss',
		icon: <UserOutlined />,
		children: [
			{
				label: '横纵比',
				path: '/tailwindcss/taspectRatio',
				key: '/tailwindcss/taspectRatio',
				element: <TaspectRatio></TaspectRatio>,
				icon: <UserOutlined />
			},
			{
				label: 'flex',
				path: '/tailwindcss/flex',
				key: '/tailwindcss/flex',
				element: <Flex></Flex>,
				icon: <UserOutlined />
			},
		]
	},
	{
		label: '功能',
		key: '/function',
		icon: <UserOutlined />,
		children: [
			{
				label: 'timerOut',
				path: '/function/timerOut',
				key: '/function/timerOut',
				element: <TimerOut></TimerOut>,
				icon: <UserOutlined />
			},
			{
				label: 'zustand',
				path: '/function/zustand',
				key: '/function/zustand',
				element: <Zustand></Zustand>,
				icon: <UserOutlined />
			},
			{
				label: '用户分组',
				path: '/function/userRule',
				key: '/function/userRule',
				element: <UserRule></UserRule>,
				icon: <UserOutlined />
			},
			{
				label: 'React',
				path: '/function/React',
				key: '/function/React',
				element: <React></React>,
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
	return useRoutes(router);
};

export default Router;


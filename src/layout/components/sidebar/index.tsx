

/*
 * @Author: yangchenguang
 * @Description: 侧边栏
 * @Date: 2024-01-05 09:16:48
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-02-06 15:13:52
 */

import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import {
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;
// hooks
import { useSessionStorageState } from 'ahooks'
// 资源
import { getOpenKeys } from '@/utils/index'

export default function Sidebar() {
	// hooks
  const location = useLocation()
	const navigate = useNavigate()
	
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
		getItem('table', '/table', <PieChartOutlined />),
		getItem('User', '/user', <UserOutlined />, [
			getItem('Tom', '/user/tom', <UserOutlined />),
			getItem('api', '/user/api', <UserOutlined />),
		]),
		getItem('菜单嵌套', '/menu', <UserOutlined />, [
			getItem('菜单1', '/menu/menu1', <UserOutlined />),
			getItem('菜单2', '/menu/menu2', <UserOutlined />, [
				getItem('菜单2-1', '/menu/menu2/menu2-1', <UserOutlined />),
				getItem('菜单2-2', '/menu/menu2/menu2-2', <UserOutlined />, [
					getItem('菜单2-2-1', '/menu/menu2/menu2-2/menu2-2-1', <UserOutlined />),
					getItem('菜单2-2-2', '/menu/menu2/menu2-2/menu2-2-2', <UserOutlined />),
				]),
			]),
		]),
	];
  
	const [collapsed, setCollapsed] = useState(false); // menu 左右展开收起
	// menu默认选中key数组
	const [defaultSelectedKeys, setdefaultSelectedKeys] = useSessionStorageState<string[]>('defaultSelectedKeys', {
		defaultValue: ['/home'],
	})
	// menu当前选中key数组
	const [selectedKeys, setSelectedKeys] = useState<string[]>([])
	// 默认选中展开的key数组
	const [defaultOpenKeys, setDefaultOpenKeys] = useSessionStorageState<string[]>('defaultOpenKeys', {
		defaultValue: []
	})
	// 当前选中展开的key数组
	const [openKeys, setOpenKeys] = useState<string[]>([])
	
  // 刷新页面选中当前路由的menu
  useEffect(() => {
		setdefaultSelectedKeys([location.pathname])
		setSelectedKeys([location.pathname])
		setDefaultOpenKeys(getOpenKeys(location.pathname))
		setOpenKeys(getOpenKeys(location.pathname))
	}, [location])
	
  // menu点击事件
  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key)
	}

	// 设置当前展开的 subMenu
	const handleMenuOpenChange = (openKeys: string[]) => {
		console.log(openKeys, "openKeys");
		if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
		const latestOpenKey = openKeys[openKeys.length - 1];
		if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
		setOpenKeys([latestOpenKey]);
	}
	
	return (
		<Sider
			collapsible
			collapsed={collapsed}
			onCollapse={(value) => setCollapsed(value)}
		>
			<div className="h-8 bg-slate-600 m-4 rounded-md text-center text-sky-500 font-bold leading-8">Logo</div>
			<Menu
				theme="dark"
				mode="inline"
				items={items}
				defaultSelectedKeys={defaultSelectedKeys}
				selectedKeys={selectedKeys}
				openKeys={openKeys}
				defaultOpenKeys={defaultOpenKeys}
				onClick={handleMenuClick}
				onOpenChange={handleMenuOpenChange}
			/>
		</Sider>
	)
}

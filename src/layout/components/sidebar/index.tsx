import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
// hooks
import { useSessionStorageState } from 'ahooks'
// 资源
import { getOpenKeys } from '@/utils/index'
import { routes } from '@/router';

export default function Sidebar() {
	// hooks
  const location = useLocation()
	const navigate = useNavigate()
	
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
	
	// * 改为tailwindcss
	const siderStyle: React.CSSProperties = {
		scrollbarWidth: 'none',
	};
	return (
		<Sider
			style={siderStyle}
			className="overflow-auto mb-12"
			collapsible
			collapsed={collapsed}
			onCollapse={(value) => setCollapsed(value)}
		>
			<div className="h-8 bg-slate-600 m-4 rounded-md text-center text-sky-500 font-bold leading-8">Logo</div>
			<Menu
				theme="dark"
				mode="inline"
				items={routes}
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

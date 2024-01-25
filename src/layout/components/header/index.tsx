

/*
 * @Author: yangchenguang
 * @Description: header
 * @Date: 2024-01-09 10:01:18
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-09 10:02:41
 */

import { Layout, theme } from 'antd';
const { Header } = Layout;

export default function HeaderComponent() {
	
  const { token: { colorBgContainer } } = theme.useToken();
	
	return (
		<Header className='p-0' style={{ background: colorBgContainer }} />
	)
}
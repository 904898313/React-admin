

/*
 * @Author: yangchenguang
 * @Description: 面包屑
 * @Date: 2024-01-09 10:24:52
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-17 11:34:48
 */

import { Breadcrumb } from 'antd';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function BreadcrumbComponent() {
	const location = useLocation()
	console.log(location.pathname,"location.pathname");
	const [breadcrumbList] = useState([
		{
			title: <Link to="/home">home</Link>,
		},
		{
			title: 'test',
		},
	])

	return (
		<Breadcrumb
			className='my-4'
			separator='>'
			items={breadcrumbList}
		/>
	)
}
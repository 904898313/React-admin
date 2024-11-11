/*
 * @Author: yangchenguang
 * @Description: 表单
 * @Date: 2024-01-04 19:14:14
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-22 19:59:45
 */
import React from 'react';
import type { TableProps, FormProps } from 'antd';
import {Button, Card, Form, Input,Space,Table, Tag } from 'antd';
import { SearchOutlined, RedoOutlined } from '@ant-design/icons';
// components
import Detail from "./components/Detail.tsx";

const FormDemo: React.FC = () => {
	const [form] = Form.useForm();

	type FieldType = {
		name?: string;
	};
	const handleFormFinish: FormProps<FieldType>['onFinish'] = (values) => {
		setData(tableData.filter((item) => !values.name || item.name.includes(values.name!)));
	}
	const handleFormReset =() => {
		form.resetFields();
		setData(tableData);
	}
	const handleFormFill = () => {
		form.setFieldsValue({name: '填充name'})
	}

	// table
	interface DataType {
		key: string;
		name: string;
		age: number;
		address: string;
		tags: string[];
	}
	const columns: TableProps<DataType>['columns'] = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Tags',
			key: 'tags',
			dataIndex: 'tags',
			render: (_, { tags }) => (
				<>
					{tags.map((tag) => {
						let color = tag.length > 5 ? 'geekblue' : 'green';
						if (tag === 'loser') {
							color = 'volcano';
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<a>Invite {record.name}</a>
					<a>Delete</a>
				</Space>
			),
		},
	];
	const tableData: DataType[] = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
			tags: ['loser'],
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sydney No. 1 Lake Park',
			tags: ['cool', 'teacher'],
		},
	]
	const [data, setData] = useState(tableData)

	// 详情弹窗
	const detailRef = useRef<HTMLInputElement | null>(null)
	const [show, setShow] = useState(false);
	const handleDataAdd = () => {
		setShow(true);
	}
	const handleOk = () => {
		setShow(false);
	}
	const handleCancel = () => {
		setShow(false);
	}
	return (
		<>
			<Card size="small">
				<Form form={form} layout="inline" colon={true} onFinish={handleFormFinish} onReset={handleFormReset}>
					<Form.Item label="名称" name="name">
						<Input placeholder="请输入名称" />
					</Form.Item>
					<Form.Item>
						<Space>
							<Button size={"middle"} htmlType="submit" type="primary" icon={<SearchOutlined />}>查询</Button>
							<Button size={"middle"} htmlType="reset" icon={<RedoOutlined />}>重置</Button>
							<Button size={"middle"} onClick={handleFormFill}>填充</Button>
						</Space>
					</Form.Item>
				</Form>
			</Card>
			<Card size="small" className={"mt-4"}>
				<Button className={"my-2"} onClick={handleDataAdd}>添加</Button>
				<Table<DataType> columns={columns} dataSource={data} />
			</Card>
			<Detail ref={detailRef} isModalOpen={show} handleOk={handleOk} handleCancel={handleCancel}></Detail>
		</>
	)
};

export default FormDemo;
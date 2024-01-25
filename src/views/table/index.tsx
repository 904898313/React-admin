/*
 * @Author: yangchenguang
 * @Description: table
 * @Date: 2024-01-23 09:25:27
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-25 16:56:26
 */

import { Card, Form, DatePicker, Select, Button, Space, Table, Popconfirm, message } from "antd";
import { SearchOutlined, SyncOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
// components
import EditForm from "./components/Edit";

export default function TableDemo() {
	const [form] = Form.useForm();
	const modalRef = useRef<any>()
	// 搜索
	function onFinish(values: any) {
		console.log(values, "onFinish");
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1500);
	}
	// 重置
	function handleReset() {
		form.resetFields()
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1500);
	}

	// table
	const [loading, setLoading] = useState(false)
	type dataType = {
		id: number
		key: string
		name: string
		age: number
		address: string
	}
	const dataSource:dataType[] = [
		{
			id: 1,
			key: '1',
			name: '胡彦斌',
			age: 32,
			address: '西湖区湖底公园1号',
		},
		{
			id: 2,
			key: '2',
			name: '胡彦祖',
			age: 42,
			address: '西湖区湖底公园1号',
		},
	];
	const columns = [
		{
			title: '姓名',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '年龄',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: '住址',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: 'Action',
			key: 'action',
			render: (text:any, record:dataType, index: number) => (
				<Space>
					<Button type="primary" onClick={() => handleEdit(record.id)}>编辑</Button>
					<Popconfirm
						title="删除"
						description={`删除第${index+1}条数据吗?`}
						onConfirm={() => handleDeleteConfirm(record.id)}
						okText="确认"
						cancelText="取消"
					>
						<Button type="dashed" danger>删除</Button>
					</Popconfirm>
				</Space>
			),
		},
	];
	// 删除
	function handleDeleteConfirm(id: number) {
		message.success(`id:${id}删除成功`)
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 1500);
	}
	// 编辑
	function handleEdit(id: number) {
		console.log(id, "id");
		console.log(modalRef.current.open(),"modalRef");
	}

	return (
		<>
			<Card size="small" className="mb-4">
				<Form
					layout="inline"
					form={form}
					initialValues={{ date: dayjs(), type: 'jack' }}
					onFinish={onFinish}
				>
					<Form.Item label="日期" name="date">
						<DatePicker></DatePicker>
					</Form.Item>
					<Form.Item label="类型" name="type">
						<Select
							style={{ width: 150 }}
							options={[
								{ value: 'jack', label: 'Jack' },
								{ value: 'lucy', label: 'Lucy' },
								{ value: 'Yiminghe', label: 'yiminghe' },
								{ value: 'disabled', label: 'Disabled', disabled: true },
							]}
						></Select>
					</Form.Item>
					<Form.Item>
						<Space>
							<Button type="primary" icon={<SearchOutlined />} htmlType="submit">搜索</Button>
							<Button icon={<SyncOutlined />} onClick={handleReset}>重置</Button>
						</Space>
					</Form.Item>
				</Form>
			</Card>
			<Card size="small">
				<Space className="mb-4">
					<Button type="primary" icon={<PlusOutlined />}>添加</Button>
					<Button danger icon={<DeleteOutlined />}>删除</Button>
				</Space>
			
				<Table bordered loading={loading} dataSource={dataSource} columns={columns} />
			</Card>
			<EditForm ref={modalRef} />
		</>
	)
}
import { Card, Form, DatePicker, Select, Button, Space, Table, Popconfirm, message, Input  } from "antd";
import { SearchOutlined, SyncOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
// components
import EditForm from "./components/Edit";
// api
import { getCountry } from '@/api/module/world.tsx'

export default function TableDemo() {
	useEffect(() => {
		onFinish({})
	},[])

	// form
	const [form] = Form.useForm();
	const modalRef = useRef<any>()
	// 搜索
	async function onFinish(values: any) {
		// const res = await runAsync()
		// console.log(res,"res111");
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
	const [dataSource, setDataSource] = useState<dataType[]>()
	const columns = [
		{
			title: 'Code',
			dataIndex: 'Code',
			key: 'Code',
		},
		{
			title: '国家名称',
			dataIndex: 'Name',
			key: 'Name',
		},
		{
			title: '大陆',
			dataIndex: 'Continent',
			key: 'Continent',
		},
		{
			title: '地区',
			dataIndex: 'Region',
			key: 'Region',
		},
		{
			title: '面积',
			dataIndex: 'SurfaceArea',
			key: 'SurfaceArea',
		},
		{
			title: '独立日',
			dataIndex: 'IndepYear',
			key: 'IndepYear',
		},
		{
			title: '人口',
			dataIndex: 'Population',
			key: 'Population',
		},
		{
			title: '国家人均预期寿命',
			dataIndex: 'LifeExpectancy',
			key: 'LifeExpectancy',
		},
		{
			title: '国民生产总值',
			dataIndex: 'GNP',
			key: 'GNP',
		},
		{
			title: '政府表格',
			dataIndex: 'GovernmentForm',
			key: 'GovernmentForm',
		},
		{
			title: '国家领导人',
			dataIndex: 'HeadOfState',
			key: 'HeadOfState',
		},
		{
			title: '备注',
			dataIndex: 'remark',
			key: 'remark',
		},
		{
			title: 'Action',
			key: 'action',
			render: (_: null, record: dataType, index: number) => (
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
					<Form.Item label="国家" name="country">
						<Input placeholder="请输入国家名称" />
					</Form.Item>
					<Form.Item>
						<Space>
							<Button type="primary" icon={<SearchOutlined />} htmlType="submit">搜索</Button>
							<Button icon={<SyncOutlined />} onClick={handleReset}>重置</Button>
						</Space>
					</Form.Item>
					{ JSON.stringify(dataSource)}1
				</Form>
			</Card>
			<Card size="small">
				<Space className="mb-4">
					<Button type="primary" icon={<PlusOutlined />}>添加</Button>
					<Button danger icon={<DeleteOutlined />}>删除</Button>
				</Space>
			
				<Table rowKey="Code" bordered loading={loading} dataSource={dataSource} columns={columns} />
			</Card>
			<EditForm ref={modalRef} />
		</>
	)
}
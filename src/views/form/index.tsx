/*
 * @Author: yangchenguang
 * @Description: 表单
 * @Date: 2024-01-04 19:14:14
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-22 19:59:45
 */
import React, { useState } from 'react';
import { Button, Form, Input, Radio, Checkbox, Select, Switch } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const FormDemo: React.FC = () => {
	// 表单实例
	const [form] = Form.useForm();
	// 表单布局类型
	const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
	// 表单布局类型切换
	const onFormLayoutChange = ({ layout }: { layout: LayoutType }, allValues: any) => {
		console.log(allValues, "allValues");
		if (layout) {
			setFormLayout(layout)
		}
  };
	// 表单布局类型 样式切换
  const formItemLayout =
    formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;
  const buttonItemLayout =
    formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

	// 验证通过的提交
	function onFinish(values: any) {
		console.log(values,"values");
	}
	// 验证失败的提交
	function onFinishFailed({ values, errorFields, outOfDate } : any) {
		console.log(values, errorFields, outOfDate, "values, errorFields, outOfDate");
	}

	// 重置
	function handleFormRest() {
		const base = form.getFieldValue('disabled')
		form.resetFields()
		form.setFieldValue('disabled', base)
	}

	// 填充
	function handleFormFill() {
		form.setFieldsValue({username:'admin',password:'123456'})
	}
	return (
		<>
			<Form
				{...formItemLayout}
				layout={formLayout}
				form={form}
				initialValues={{ layout: formLayout }}
				onValuesChange={onFormLayoutChange}
				style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item label="布局类型" name="layout">
					<Radio.Group>
						<Radio.Button value="horizontal">Horizontal</Radio.Button>
						<Radio.Button value="vertical">Vertical</Radio.Button>
						<Radio.Button value="inline">Inline</Radio.Button>
					</Radio.Group>
				</Form.Item>
				<Form.Item label="表单禁用" name="disabled" valuePropName="checked">
					<Switch />
				</Form.Item>
				{/* 用户名 */}
				<Form.Item noStyle shouldUpdate={(prevValues, currentValues) => {
					return prevValues.disabled !== currentValues.disabled
				}}>
					{
						({ getFieldValue }) => <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
							<Input placeholder="请输入用户名" disabled={getFieldValue('disabled') === true} />
						</Form.Item>
					}
				</Form.Item>
				{/* 密码 */}
				<Form.Item noStyle shouldUpdate={(prevValues, currentValues) => {
					return prevValues.disabled !== currentValues.disabled
				}}>
					{
						({ getFieldValue }) => <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
							<Input.Password placeholder="请输入密码" disabled={getFieldValue('disabled') === true} />
						</Form.Item>
					}
				</Form.Item>
				{/* 交互字段A */}
				<Form.Item noStyle shouldUpdate={(prevValues, currentValues) => {
					return prevValues.disabled !== currentValues.disabled
				}}>
					{
						({ getFieldValue }) => <Form.Item label="交互字段A" name="comboA">
							<Select
								style={{ width: '200px'}}
								disabled={getFieldValue('disabled') === true}
								options={[
									{ value: 'show', label: '显示B' },
									{ value: 'hidd', label: '隐藏B' },
								]}
							/>
						</Form.Item>
					}
				</Form.Item>
				{/* 交互字段B */}
				<Form.Item noStyle shouldUpdate={(prevValues, currentValues) => {
					return prevValues.disabled !== currentValues.disabled || prevValues.comboA !== currentValues.comboA
				}}>
					{
						({ getFieldValue }) => getFieldValue('comboA') === 'show' ?
							<Form.Item label="交互字段B" name="comboB">
								<Input placeholder="我是受控制的字段" disabled={getFieldValue('disabled') === true} />
							</Form.Item> : null
					}
				</Form.Item>
				<Form.Item
					name="remember"
					valuePropName="checked"
					{...buttonItemLayout}
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>
				<Form.Item {...buttonItemLayout}>
					<Button className='mr-2' type="primary" htmlType="submit">Submit</Button>
					<Button className='mr-2' type="primary" onClick={handleFormRest}>Reset</Button>
					<Button type="primary" onClick={handleFormFill}>fill</Button>
				</Form.Item>
			</Form>
		</>
  );
};

export default FormDemo;
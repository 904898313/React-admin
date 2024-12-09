import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Space, Typography, Select } from 'antd';

const andOr = [
    {label: "且", value: 1},
    {label: "或", value: 2},
]
const keys = [
    {label: "性别", value: 1, conditionType: 1, valueType: 1},
    {label: "是否为会员", value: 2, conditionType: 1, valueType: 2},
    {label: "用户注册天数", value: 3, conditionType: 1, valueType: 0},
    {label: "连续在线天数", value: 4, conditionType: 1, valueType: 0},
    {label: "已消费金额", value: 5, conditionType: 1, valueType: 0},
]
const condition = {
    1: [{label: "等于",value: 10},{label: "不等于",value: 0},],
    2: [
        {label: "<",value: 1},
        {label: "<=",value: 2},
        {label: "=",value: 10},
        {label: ">=",value: 3},
        {label: ">",value: 4},
    ]
}
// const values = {
//     1: [{label: "男",value: 1},{label: "女",value: 2},],
//     2: [{label: "会员",value: 1},{label: "非会员",value: 2},],
// }

const Index: React.FC = () => {
    const [form] = Form.useForm();

    return (
        <Form
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            form={form}
            name="dynamic_form_complex"
            style={{ maxWidth: "100%" }}
            autoComplete="off"
            initialValues={{ rules: [{}] }}
        >
            <Form.List name="rules">
                {(fields, { add, remove }) => (
                    <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
                        {fields.map((field) => (
                            <Card
                                size="small"
                                title={`用户分组 ${field.name + 1}`}
                                key={field.key}
                                extra={
                                    <CloseOutlined
                                        style={{ color: 'red' }}
                                        onClick={() => {
                                            remove(field.name);
                                        }}
                                    />
                                }
                            >
                                <Form.Item label="分组名称" name={[field.name, 'name']}>
                                    <Input />
                                </Form.Item>

                                {/* Nest Form.List */}
                                <Form.Item label="分组规则">
                                    <Form.List name={[field.name, 'list']}>
                                        {(subFields, subOpt) => (
                                            <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
                                                {subFields.map((subField) => (
                                                    <Space key={subField.key}>
                                                        {/*条件1 且/或*/}
                                                        <Form.Item noStyle name={[subField.name, 'andOr']}>
                                                            <Select placeholder={"请选择生成条件"} style={{width:'100px'}}>
                                                                {
                                                                    andOr.map(i => (
                                                                        <Select.Option key={i.value} value={i.value}>
                                                                            {i.label}
                                                                        </Select.Option>
                                                                    ))
                                                                }
                                                            </Select>
                                                        </Form.Item>
                                                        {/*类型*/}
                                                        <Form.Item noStyle name={[subField.name, 'key']}>
                                                            <Select placeholder={"请选择类型"} style={{width:'200px'}}>
                                                                {
                                                                    keys.map(i => (
                                                                        <Select.Option key={i.value} value={i.value}>
                                                                            {i.label}
                                                                        </Select.Option>
                                                                    ))
                                                                }
                                                            </Select>
                                                        </Form.Item>
                                                        {/*条件*/}
                                                        <Form.Item
                                                            noStyle
                                                            name={[subField.name, 'condition']}
                                                            shouldUpdate={(prevValues, currentValues) => {
                                                                console.log(prevValues, "prevValues");
                                                                console.log(currentValues, "currentValues");
                                                               return true
                                                            }}
                                                        >
                                                            <Select placeholder={"请选择条件"} style={{width:'100px'}}>
                                                                {
                                                                    condition[2].map(i => (
                                                                        <Select.Option key={i.value} value={i.value}>
                                                                            {i.label}
                                                                        </Select.Option>
                                                                    ))
                                                                }
                                                            </Select>
                                                        </Form.Item>
                                                        <Form.Item noStyle name={[subField.name, 'value']}>
                                                            <Input placeholder="second" />
                                                        </Form.Item>
                                                        <CloseOutlined
                                                            style={{ color: 'red' }}
                                                            onClick={() => {
                                                                subOpt.remove(subField.name);
                                                            }}
                                                        />
                                                    </Space>
                                                ))}
                                                <Button type="dashed" onClick={() => subOpt.add()} block>
                                                    + 添加规则
                                                </Button>
                                            </div>
                                        )}
                                    </Form.List>
                                </Form.Item>
                            </Card>
                        ))}

                        <Button type="dashed" onClick={() => add()} block>
                            + 添加用户分组
                        </Button>
                    </div>
                )}
            </Form.List>

            <Form.Item noStyle shouldUpdate>
                {() => (
                    <Typography>
                        <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
                    </Typography>
                )}
            </Form.Item>
        </Form>
    );
};

export default Index;
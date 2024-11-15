// components
import {Form, Input, InputNumber, Modal, Select, FormProps} from "antd";
// types
import { TableItem } from "../types.ts";

interface Props {
    isModalOpen: boolean;
    editParams?: TableItem;
    handleOk: (T:TableItem) => void;
    handleCancel: () => void;
}

const Detail = ({editParams,isModalOpen,handleOk,handleCancel}:Props) => {

    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue(editParams)
    }, [form, editParams])
    const handleModalOk = () => {
        form.submit()
    }
    const onFinish: FormProps<TableItem>['onFinish'] = (values) => {
        handleOk(values)
        form.resetFields()
    }
    const handleModalCancel = () => {
        form.resetFields()
        handleCancel()
    }

    return <>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleModalOk} onCancel={handleModalCancel}>
            <Form form={form} onFinish={onFinish} wrapperCol={{span: 20}} labelCol={{span: 4}}>
                <Form.Item name="name" label="name" rules={[{ required: true, message: "name是必填项" }]}>
                    <Input></Input>
                </Form.Item>
                <Form.Item name="age" label="age" rules={[{ required: true, message: "age是必填项" }]}>
                    <InputNumber min={1} max={150}/>
                </Form.Item>
                <Form.Item name="address" label="address" rules={[{ required: true, message: "Address是必填项" }]}>
                    <Input></Input>
                </Form.Item>
                <Form.Item name="tags" label="tags" rules={[{ required: true, message: "Tags是必填项" }]}>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="请选择标签"
                        options={[{label: "NICE", value: "NICE"},{label: "DEVELOPER", value: "DEVELOPER"},{label: "LOSER", value: "LOSER"},]}
                    />
                </Form.Item>
            </Form>
        </Modal>
    </>
}

export default Detail
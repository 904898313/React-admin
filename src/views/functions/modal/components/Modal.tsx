import {Form, Input, InputNumber, Modal} from "antd"
import {useState, useRef,useImperativeHandle,forwardRef} from "react";
import {tableItem} from "../types.ts";

const Modal1 = forwardRef((_,ref) => {
    const [form] = Form.useForm();
    const [show,setShow] = useState(false);
    const showResRef = useRef<{resolve: (value: tableItem | false) => void}>()
    useImperativeHandle(ref,() => {
        return {
            show: (values: tableItem) => {
                setShow(true)
                form.setFieldsValue(values)
                return new Promise((resolve) => {
                    showResRef.current = { resolve }
                })
            }
        }
    })

    const handleOk = () => {
        form.validateFields().then(() => {
            const values = form.getFieldsValue(true)
            console.log(values, "values");
            showResRef.current!.resolve(values)
            form.resetFields()
            setShow(false)
        })
    }
    const hanldeCancel = () => {
        setShow(false)
        form.resetFields()
        showResRef.current!.resolve(false)
    }

    return <>
        <Modal open={show} onOk={handleOk} onCancel={hanldeCancel}>
            <Form form={form} wrapperCol={{span: 20}} labelCol={{span: 4}}>
                <Form.Item name="name" label="name" rules={[{ required: true, message: "name是必填项" }]}>
                    <Input placeholder={"请输入name"}></Input>
                </Form.Item>
                <Form.Item name="age" label="age" rules={[{ required: true, message: "age是必填项" }]}>
                    <InputNumber placeholder={"请输入1-150"} min={1} max={150} className={"w-full"}/>
                </Form.Item>
                <Form.Item name="address" label="address" rules={[{ required: true, message: "Address是必填项" }]}>
                    <Input placeholder={"请输入address"}></Input>
                </Form.Item>
            </Form>
        </Modal>
    </>
})

export default Modal1;
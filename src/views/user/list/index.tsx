

/*
 * @Author: yangchenguang
 * @Description: 用户管理
 * @Date: 2024-04-17 15:15:19
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-04-19 17:23:44
 */
import { Button, Form, Input, Radio, Checkbox, Select, Switch, Table, Space, Tag, message } from 'antd';
import type { TableProps } from 'antd';
import { useRequest } from 'ahooks'
import { getUserListApi, deleteUserApi } from '@/api/module/user'
// 组件
import Detail from './components/detail'
import {configureStore} from "@reduxjs/toolkit";

// interface DataType {
//   key: string;
//   name: string;
//   age: number;
//   address: string;
// }


const List = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  // table数据
  const [data, setData] = useState<any[]>([])
  const columns: TableProps<any>['columns'] = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: '账号',
      dataIndex: 'account',
      key: 'account',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => detailRef.current.open(record)}>update</a>
          <a onClick={() => handleUserDel(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];
  // 字段发生变化
  const onFormLayoutChange = () => {
    console.log(1,"1");
  }
  // 获取用户列表
  const { loading, run } = useRequest(getUserListApi, {
    manual: true,
    onSuccess: (res, params) => {
      console.log(res,"res");
      setData(res)
    },
  });
  // 删除用户
  const { loading: loading1, run: handleUserDel } = useRequest(deleteUserApi, {
    manual: true,
    onSuccess: (res, params) => {
      console.log(res, "res");
      messageApi.open({
        type: 'success',
        content: '删除成功',
      });
      run()
    },
  });
  // 表单提交
  const onFinish = (values:any) => {
    run(values.id)
  }
  // detail
  const detailRef = useRef(null)
  const [open, setOpen] = useState<boolean>(false)
  const cancel = () => {
    setOpen(false)
  }
  const ok = () => {
    setOpen(false)
  }

  const onMount = useCallback(() => {
    run()
  },[])
  useEffect(() => {
    onMount()
  },[onMount])

  const f = () => {
    console.log(7)
  }
  f()
  const [value, setValue] = useState(123)
  const handleTestClcik = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setValue(v => v+1)
  }
  return (
    <>
      {contextHolder}
      {/* search */}
      <Form
        form={form}
        layout="inline"
        onFinish={onFinish}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="id" name="id">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
          <Button onClick={handleTestClcik}>{value}</Button>
        </Form.Item>
      </Form>
      {/* table */}
      <Table columns={columns} dataSource={data} rowKey="id" />
      {/* detail */}
       {/* ok={ok} cancel={cancel} row={row} */}
      <Detail ref={detailRef} />
    </>
  )
}

export default List
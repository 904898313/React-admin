import {Table, Space, Button, Popconfirm } from "antd";
import {useRef,useState} from "react";
import Modal from "./components/Modal.tsx"
import {tableItem} from "./types.ts";
import {PlusOutlined} from "@ant-design/icons";

const Index = () => {
    const ref = useRef();
    const [tableData, setTableData] = useState<tableItem[]>([
        {
            id: 1,
            name: "ycg",
            age: 18,
            address: "address"
        },
        {
            id: 2,
            name: "ycg1",
            age: 181,
            address: "address1"
        },
    ])
    const tableColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: void , record: tableItem,index: number) => (
                <Space size="middle">
                    <a onClick={() => handleModalShow(record)}>Edit</a>
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => handleTableDelete(index)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger type="link">Delete</Button>
                    </Popconfirm>
                    {/*<a>Delete</a>*/}
                </Space>
            ),
        },
    ]
    // 显示弹窗
    const handleModalShow = async (record?:tableItem) => {
        const userInfo = await ref.current.show(record)
        if(userInfo) {
            if(userInfo.id) {
                // 编辑
                setTableData(users => {
                    const index = users.findIndex(user => user.id === userInfo.id);
                    const updateUser = { ...users[index], ...userInfo }
                    const cloneUsers = [...users]
                    cloneUsers.splice(index, 1, updateUser)
                    return cloneUsers
                })
            }else {
                // 新增
                setTableData(users => {
                    userInfo.id = users.length+1
                    return [...users,userInfo]
                })
            }
        }
    }
    // 删除
    const handleTableDelete = (index:number) => {
        setTableData(users => {
            const cloneUsers = [...users]
            cloneUsers.splice(index, 1)
            return cloneUsers
        })
    }
    return (
        <>
            <Space className="mb-4">
                <Button type="primary" icon={<PlusOutlined />} onClick={() => handleModalShow()}>add</Button>
            </Space>
            <Table dataSource={tableData} columns={tableColumns} rowKey={"name"} bordered={true}></Table>
            <Modal ref={ref}></Modal>
        </>
    );
};

export default Index;
import {Table, Space, Button} from "antd";
import {useRef,useState} from "react";
import Modal from "./components/Modal.tsx"
import {tableItem} from "./types.ts";

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
            render: (record: tableItem) => (
                <Space size="middle">
                    <a onClick={() => handleModalShow(record)}>Edit</a>
                    {/*<a>Delete</a>*/}
                </Space>
            ),
        },
    ]
    const handleModalShow = async (record?:tableItem) => {
        const userInfo = await ref.current!.show(record)
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
    return (
        <>
            <Button onClick={() => handleModalShow()}>add</Button>
            <Table dataSource={tableData} columns={tableColumns} rowKey={"name"}></Table>
            <Modal ref={ref}></Modal>
        </>
    );
};

export default Index;
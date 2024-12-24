import React from 'react';
import {Splitter, Tree, Space, Input, Button, Popconfirm, Card} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import type { TreeDataNode, TreeProps } from 'antd';
import Detail from "./components/Detail.tsx";

// 树数据
const treeData: TreeDataNode[] = [
    {
        title: '新用户(注册15天内)',
        key: '1',
        disableCheckbox: true,
    },
    {
        title: '老用户(注册时间大于365天)',
        key: '2',
    },
    {
        title: '是会员用户',
        key: '3',
        children: [
            {
                title: '会员时长<3天(提示续费)',
                key: '3-1',
            },
            {
                title: '会员时长<30天',
                key: '3-2',
            },
        ],
    },
    {
        title: '非会员用户',
        key: '8',
    },
    {
        title: '性别为男的用户',
        key: '4',
    },
    {
        title: '性别为女的用户',
        key: '5',
    },
    {
        title: '连续在线天数>30',
        key: '6',
    },
    {
        title: '已消费金额>1000',
        key: '7',
    },
];
// 过滤树数据
const filterTreeData = (data: TreeDataNode[], searchValue: string): TreeDataNode[] => {
    return data
        .map(node => {
            const children = node.children ? filterTreeData(node.children, searchValue) : [];
            if (node.title.includes(searchValue) || children.length) {
                return { ...node, children };
            }
            return null;
        })
        .filter(node => node !== null) as TreeDataNode[];
};

const Index: React.FC = () => {
    const [searchValue, setSearchValue] = React.useState('');
    const [filteredData, setFilteredData] = React.useState(treeData);
    const [checkedKeys, setCheckedKeys] = React.useState<string[]>([]);
    const [selectedKey, setSelectedKey] = React.useState<string>();

    React.useEffect(() => {
        setFilteredData(filterTreeData(treeData, searchValue));
    }, [searchValue]);

    // 点击树节点
    const handleTreeSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        setSelectedKey(selectedKeys[0] as string)
    };
    // 勾选树节点
    const handleTreeCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
        setCheckedKeys(checkedKeys.checked);
    };
    // 删除选中用户分组
    const handleTreeDelete = () => {
        console.log('删除 keys:', checkedKeys);
    };

    return (
        <>
            <Splitter>
                <Splitter.Panel defaultSize="20%" min="13%" max="30%">
                    <Space className={"mb-3"}>
                        <Input
                            style={{ width: "100%" }}
                            placeholder="过滤用户分组名称"
                            onChange={e => setSearchValue(e.target.value)}
                        />
                        <Button type="primary">新增</Button>
                        <Popconfirm
                            title="确定删除选中的用户分组吗?"
                            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                            okText={"确定"}
                            cancelText={"取消"}
                            okButtonProps={{ type: 'primary', danger: true }}
                            onConfirm={handleTreeDelete}
                        >
                            <Button type="primary" danger>删除</Button>
                        </Popconfirm>
                    </Space>
                    <Tree
                        checkable
                        blockNode
                        defaultExpandAll
                        treeData={filteredData}
                        checkStrictly={true}
                        onSelect={handleTreeSelect}
                        onCheck={handleTreeCheck}
                    />
                </Splitter.Panel>
                <Splitter.Panel>
                    <Detail selectedKey={selectedKey}></Detail>
                </Splitter.Panel>
            </Splitter>
        </>
    );
};

export default Index;
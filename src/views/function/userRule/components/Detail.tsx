import { useEffect } from "react";
import { Card, Form, Input, Button, Space, Select } from "antd";
import { CloseOutlined } from "@ant-design/icons";

// 复用常量配置
const andOr = [
  { label: "且", value: 1 },
  { label: "或", value: 2 },
];

const keys = [
  {
    label: "性别",
    value: 1,
    conditionType: [
      { label: "等于", value: 10 },
      { label: "不等于", value: 0 },
    ],
    valueType: [
      { label: "男", value: 1 },
      { label: "女", value: 2 },
    ],
  },
  {
    label: "是否为会员",
    value: 2,
    conditionType: [
      { label: "等于", value: 10 },
      { label: "不等于", value: 0 },
    ],
    valueType: [
      { label: "会员", value: 1 },
      { label: "非会员", value: 2 },
    ],
  },
  {
    label: "用户注册天数",
    value: 3,
    conditionType: [
      { label: "<", value: 1 },
      { label: "<=", value: 2 },
      { label: "=", value: 10 },
      { label: ">=", value: 3 },
      { label: ">", value: 4 },
    ],
  },
  {
    label: "连续在线天数",
    value: 4,
    conditionType: [
      { label: "<", value: 1 },
      { label: "<=", value: 2 },
      { label: "=", value: 10 },
      { label: ">=", value: 3 },
      { label: ">", value: 4 },
    ],
  },
  {
    label: "已消费金额(元)",
    value: 5,
    conditionType: [
      { label: "<", value: 1 },
      { label: "<=", value: 2 },
      { label: "=", value: 10 },
      { label: ">=", value: 3 },
      { label: ">", value: 4 },
    ],
  },
];

// 根据选择的 key 返回对应的 value 类型
const getCnditionComponent = (keyValue: number) => {
  const key = keys.find((i) => i.value === keyValue);
  if (key?.conditionType) {
    return (
      <Select placeholder="请选择" style={{ width: "120px" }}>
        {key?.conditionType.map((i) => (
          <Select.Option value={i.value} key={i.value}>
            {i.label}
          </Select.Option>
        ))}
      </Select>
    );
  }
  // 其他数值类型
  return (
    <Select placeholder="暂无" style={{ width: "120px" }}>
    </Select>
  );
};

// 根据选择的 key 返回对应的 value 类型
const getValueComponent = (keyValue: number) => {
  const key = keys.find((i) => i.value === keyValue);
  if (key?.valueType) {
    return (
      <Select placeholder="请选择" style={{ width: "120px" }}>
        {key?.valueType.map((i) => (
          <Select.Option value={i.value} key={i.value}>{i.label}</Select.Option>
        ))}
      </Select>
    );
  }
  // 其他数值类型
  return <Input placeholder="请输入值" type="number" />;
}
type key = {
  andOr: string;
  key: number;
  condition: string;
  value: string;
};
// 获取禁用列表
const getDisabledList = (value: key[]) => {
  console.log(value, "value");
  return keys.map((i) => (
    <Select.Option
      key={i.value}
      value={i.value}
      disabled={value.some((item) => item?.key === i.value)}
    >
      {i.label}
    </Select.Option>
  ));
}

const Detail = ({ selectedKey }: { selectedKey?: string }) => {
  const [form] = Form.useForm();

  const getDetail = async (key?: string) => {
    const res = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${key} 详情`);
      }, 1000);
    });
    console.log(res, "res");
  };

  useEffect(() => {
    getDetail(selectedKey);
  }, [selectedKey]);

  return (
    <Form
      form={form}
      name="dynamic_detail_form"
      autoComplete="off"
      initialValues={{ name: "", conditions: [{}] }}
    >
      <Card size="small" title={`规则详情`}>
        <Form.Item name="name" label="规则名称">
          <Input placeholder="请输入规则名称" />
        </Form.Item>

        <Form.Item label="规则条件">
          <Form.List name="conditions">
            {(fields, { add, remove }) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {fields.map((field) => (
                  <Space key={field.key}>
                    <Form.Item noStyle name={[field.name, "andOr"]}>
                      <Select
                        placeholder="请选择条件"
                        style={{ width: "100px" }}
                      >
                        {andOr.map((i) => (
                          <Select.Option key={i.value} value={i.value}>
                            {i.label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      noStyle
                      name={[field.name, "key"]}
                      dependencies={[["conditions", field.name, "key"]]}
                    >
                      <Select
                        placeholder="请选择类型"
                        style={{ width: "200px" }}
                        onChange={() => {
                          // 当类型改变时，清空条件和值
                          form.setFieldValue(
                            ["conditions", field.name, "condition"],
                            undefined
                          );
                          form.setFieldValue(
                            ["conditions", field.name, "value"],
                            undefined
                          );
                        }}
                      >
                        {getDisabledList(form.getFieldValue("conditions"))}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      noStyle
                      dependencies={[["conditions", field.name, "key"]]}
                    >
                      {() => (
                        <Form.Item noStyle name={[field.name, "condition"]}>
                          {getCnditionComponent(
                            form.getFieldValue([
                              "conditions",
                              field.name,
                              "key",
                            ])
                          )}
                        </Form.Item>
                      )}
                    </Form.Item>

                    <Form.Item
                      noStyle
                      dependencies={[["conditions", field.name, "key"]]}
                    >
                      {() => (
                        <Form.Item noStyle name={[field.name, "value"]}>
                          {getValueComponent(
                            form.getFieldValue([
                              "conditions",
                              field.name,
                              "key",
                            ])
                          )}
                        </Form.Item>
                      )}
                    </Form.Item>

                    <CloseOutlined
                      style={{ color: "red" }}
                      onClick={() => remove(field.name)}
                    />
                  </Space>
                ))}
                <Button type="dashed" onClick={() => add()} block>
                  + 添加条件
                </Button>
              </div>
            )}
          </Form.List>
        </Form.Item>
      </Card>

      <Form.Item noStyle shouldUpdate>
        {() => <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>}
      </Form.Item>
    </Form>
  );
};

export default Detail;

import {Card, Form} from "antd";

const Detail = ({selectedKey}:{selectedKey?: string}) => {
    console.log(selectedKey, "selectedKey");
    const getDetail = async (key?: string) => {
        const res = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(`${key} 详情`)
            }, 1000)
        })
    }

    useEffect(() => {
        getDetail(selectedKey)
    },[selectedKey])
    return (
        <>
            <Card title={selectedKey? "" : ""}>
                {selectedKey}
                <Form>

                </Form>
            </Card>
        </>
    );
};

export default Detail;
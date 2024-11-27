import {Button, Form, Input, Space} from 'antd';
import {getImageCode} from "@/api/module/auth.ts"
import { useAuthStore } from "@/store/auth.ts"

const Index = () => {
    const navigate = useNavigate();
    const setToken = useAuthStore(state => state.setToken)
    // form
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values, "values");
        setToken('login after token')
        navigate('/home')
    }

    // 验证码
    const [verificationCode, setVerificationCode] = useState<string>();
    const getVerificationCode = async () => {
        const params = {
            codeId: "10vq29qfgieo1"
        }
        const res = await getImageCode(params)
        setVerificationCode(res.data.imageCode)
    }
    useEffect(() => {
        getVerificationCode()
    },[])
    const handleVerificationCodeRefresh = () => {
        getVerificationCode()
    }
    return (
        <>
            <Form
                form={form}
                onFinish={onFinish}
            >
                <Form.Item label="账号" name="user">
                    <Input />
                </Form.Item>
                <Form.Item label="密码" name="password">
                    <Input />
                </Form.Item>
                <Form.Item label="验证码">
                    <Space>
                        <Form.Item noStyle name="VerificationCode">
                            <Input/>
                        </Form.Item>
                        <img src={verificationCode} alt="验证码" onClick={handleVerificationCodeRefresh} />
                    </Space>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={"submit"}>登录</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Index;
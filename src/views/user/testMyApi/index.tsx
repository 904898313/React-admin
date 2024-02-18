

/*
 * @Author: yangchenguang
 * @Description: test-myapi
 * @Date: 2024-02-18 14:53:38
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-02-18 16:57:47
 */

import { testMyApi, testPostMyApi } from '@/api/module/user'
import { useRequest } from 'ahooks'
import { Button, message } from 'antd';

export default function TestMyApi() {
  const [messageApi, contextHolder] = message.useMessage();
  // get
  const { data, error, loading, runAsync: getData } = useRequest(() => testMyApi({}), {
    manual: true
  });
  const handleRequest = () => {
    getData()
  }
  // post
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { data: postData, error: postError, loading: postLoading, runAsync: getPostData } = useRequest(() => testPostMyApi({
    username: username,
    password: password
  }), {
    manual: true
  });
  const handlePostRequest = () => {
    getPostData().then(res => {
      if (res?.success) {
        messageApi.open({
          type: 'success',
          content: '注册成功',
        });
      }
    })
  }
  console.log(1,"1");
  return (
    <>
      {contextHolder}
      <Button onClick={handleRequest}>发起请求-get</Button>
      {loading ? <span>加载中...</span> : data?.data}<br />
      <h2>注册</h2>
      <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} value={username} /><br />
      <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} /><br />
      <Button onClick={handlePostRequest} loading={postLoading}>注册</Button><br />
    </>
  )
} 
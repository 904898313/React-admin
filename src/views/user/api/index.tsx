/*
 * @Author: yangchenguang
 * @Description: api
 * @Date: 2024-01-09 10:42:22
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-02-18 17:06:22
 */
// api
import { useRequest } from "ahooks"
import { getUserInfo } from '@/api/module/user'

export default function Tom() {
	const [value, setValue] = useState<string>("")
  const { data, error, loading, runAsync: getData } = useRequest(() => getUserInfo({number:value}));
  const initData = async () => {
    getData()
  }

	return (
		<>
      <h1>test useRequest</h1><br />
      <button onClick={initData}>手动调接口</button><br />
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="信息条数，默认一条" /><br />
      <h1>狗的随机信息</h1>
      <>{loading ? <>加载中...</> : (
        <ul>
          {
            data?.facts.map((i) => {
              return <li key={i}>{ i }</li>
            })
          }
        </ul>
      ) }</>
		</>
	)
}
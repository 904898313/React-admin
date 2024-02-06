/*
 * @Author: yangchenguang
 * @Description: tom
 * @Date: 2024-01-09 10:42:22
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-02-06 15:11:46
 */
import { useSelector, useDispatch } from "react-redux"
import { add, del } from '@/sotre/slice/user'

export default function Tom() {
	// store
	const userValue = useSelector((state: any) => state.user.value)
	const dispatch = useDispatch()
	const [value, setValue] = useState<string>("")

	return (
		<>
			<h1>test redux</h1>
			<h1>{userValue}</h1>
			<input type="text" value={value} onChange={(e) => setValue(e.target.value)} /><br />
			<button onClick={() => dispatch(add(Number(value)))}>add</button><br />
			<button onClick={() => dispatch(del(Number(value)))}>subtract</button>
		</>
	)
}
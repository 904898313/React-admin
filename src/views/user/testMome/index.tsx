

/*
 * @Author: yangchenguang
 * @Description: 
 * @Date: 2024-02-26 15:50:14
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-02-26 16:17:12
 */

import Cc from './components/Cc'

export default function TestMome() {
  const [value, setValue] = useState<string>('123')
  const [values, setValues] = useState<string>('123')
  // const fun = useCallback(() => {
  //   console.log(1,"1");
  // }, [])
  // const fun = () => {
  //   console.log(1,"1");
  // }

  const a = useMemo(
    () => Number(values) * 2,
    [values]
  )
  return (
    <>
      <input type="text" value={values} onChange={(e) => setValues(e.target.value)} />
      {a}
      <Cc value={value} />
    </>
  )
}
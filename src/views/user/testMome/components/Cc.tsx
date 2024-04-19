

/*
 * @Author: yangchenguang
 * @Description: 
 * @Date: 2024-02-26 15:50:31
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-02-26 15:58:39
 */

export default memo(function Cc({ value }: {value: string}) {
  console.log("我是子组件");
  return (
    <>
      Cc
    </>
  )
})
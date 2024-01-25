/*
 * @Author: yangchenguang
 * @Description: home
 * @Date: 2024-01-04 16:38:05
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-17 09:55:17
 */
import welcome from '@/assets/images/welcome.png'

const Home = () => {
	return (
		<>
			<div className='flex items-center justify-center h-full'>
				<img style={{width: "70%"}} src={welcome} alt="welcome" />
			</div>
		</>
	)
}
export default Home
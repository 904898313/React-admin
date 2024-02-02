

/*
 * @Author: yangchenguang
 * @Description: store
 * @Date: 2024-02-02 10:29:52
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-02-02 10:29:55
 */

import { configureStore } from '@reduxjs/toolkit'
// slice
import user from './slice/user'

export default configureStore({
	reducer: {
		user
	}
})
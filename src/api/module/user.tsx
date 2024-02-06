

/*
 * @Author: yangchenguang
 * @Description: 用户API
 * @Date: 2024-02-02 14:28:52
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-02-02 15:44:36
 */

import serve, { Get } from '@/api/index'

export const getUserInfo = (params: any) => {
	return Get('https://dog-api.kinduff.com/api/facts',params)
}
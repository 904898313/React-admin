

/*
 * @Author: yangchenguang
 * @Description: 用户API
 * @Date: 2024-02-02 14:28:52
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-02-21 16:19:22
 */

import serve, { Get, Post } from '@/api/index'

export const getUserInfo = (params: any) => {
	return Get('https://dog-api.kinduff.com/api/facts',params)
}

export const testMyApi = (params: any) => {
	return Get('http://localhost:3001/getUserInfo',params)
}

export const testPostMyApi = (params: any) => {
	return Post('http://localhost:3001/getUser',params)
}
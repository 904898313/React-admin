

/*
 * @Author: yangchenguang
 * @Description: 用户API
 * @Date: 2024-02-02 14:28:52
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-04-19 15:05:16
 */

import serve, { Get, Post, Delete } from '@/api/index'

export const getUserInfo = (params: any) => {
	return Get('https://dog-api.kinduff.com/api/facts',params)
}

export const testMyApi = (params: any) => {
	return Get('http://localhost:3001/getUserInfo',params)
}

export const testPostMyApi = (params: any) => {
	return Post('http://localhost:3001/getUser',params)
}

// 获取用户列表
export const getUserListApi = (params?: any) => {
	return Get<{ a: number}>('http://localhost:3000/user'+`${params ? `/${params}` : ''}`,)
}

// 删除用户
export const deleteUserApi = (params?: any) => {
	return Delete<{ a: number}>('http://localhost:3000/user'+`${params ? `/${params}` : ''}`,)
}
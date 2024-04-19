

/*
 * @Author: yangchenguang
 * @Description: 
 * @Date: 2024-02-02 11:32:04
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-04-19 15:10:31
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'antd';

const Serve = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 10000,
  // headers: {'X-Custom-Header': 'foobar'}
});

// 添加请求拦截器
Serve.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Serve.interceptors.response.use(function (response) {
  if (!response.data) {
    message.error(response.data.errorMessage)
  }
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

type successData = {
  status: boolean,
  data: any,
  [key: string]: any
}

export const Get = <T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<successData, T>> => {
  return new Promise((resolve, reject) => {
    Serve.get(url, {
      params,
      ...config
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export const Post = (url: string, params?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<successData>> => {
  return new Promise((resolve, reject) => {
    Serve.post(url, params, config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export const Delete = <T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<successData, T>> => {
  return new Promise((resolve, reject) => {
    Serve.delete(url, {
      params,
      ...config
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export default Serve
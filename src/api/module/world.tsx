/*
 * @Author: yangchenguang
 * @Description: 世界接口
 * @Date: 2024-03-01 10:43:13
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-04-19 15:05:10
 */

import { Get } from "../index.ts";

export const getCountry = (params: any) => {
  return Get("http://localhost:3001/getCountry", params);
};

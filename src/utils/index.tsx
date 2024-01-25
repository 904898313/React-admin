

/*
 * @Author: yangchenguang
 * @Description: 工具
 * @Date: 2024-01-09 16:19:03
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-01-09 16:20:18
 */

/**
 * @description 获取需要展开的 subMenu
 * @param {String} path 当前访问地址
 * @returns array
 */
export const getOpenKeys = (path: string) => {
	let newStr: string = "";
	const newArr: string[] = [];
	const arr = path.split("/").map(i => "/" + i);
	for (let i = 1; i < arr.length - 1; i++) {
		newStr += arr[i];
		newArr.push(newStr);
	}
	return newArr;
};
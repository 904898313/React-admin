

/*
 * @Author: yangchenguang
 * @Description: 用户store
 * @Date: 2024-02-02 10:35:18
 * @LastEditors: yangchenguang
 * @LastEditTime: 2024-02-02 11:00:49
 */

import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
	value: number
}

const initialState:InitialState = {
	value: 1
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		add: (state, action: { type: string, payload: number }) => {
			console.log(state, action,"state, action");
			state.value += action.payload;
		},
		del: (state, action: { type: string, payload: number }) => {
			console.log(state, action,"state, action");
			state.value -= action.payload;
		}
	}
})

export const { add, del } = userSlice.actions;
export default userSlice.reducer
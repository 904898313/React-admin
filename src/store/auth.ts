import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
    token: string
}

type Actions = {
    setToken: (token: string) => void
    clearToken: () => void
}

export const useAuthStore = create<State & Actions>()(
    persist(
        immer((setState) => ({
            token: "",
            setToken: (token) =>
                setState((state) => {
                    state.token = token;
                }),
            clearToken: () =>
                setState((state) => {
                    state.token = ""; // 只修改 draft
                }),
        })),
        {
            name: 'tokenStorage', // 本地存储的键名
            storage: createJSONStorage(() => localStorage) // 默认是 localStorage
        }
    )
)

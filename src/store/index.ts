import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
    user: {
        userName: string,
        age: number
    }
}

type Actions = {
    incrementAge: (qty?: number) => void
    decrementAge: (qty?: number) => void
    changeUserName: (qty: string) => void
}

export const useCountStore = create<State & Actions>()(
    immer((setState) => ({
        user: {
            userName: "yangchenguang",
            age: 28,
        },
        incrementAge: (qty = 1) =>
            setState((state) => {
                state.user.age += qty
            }),
        decrementAge: (qty = 1) =>
            setState((state) => {
                state.user.age -= qty
            }),
        changeUserName: (userName) => setState((state) => { state.user.userName = userName })
    })),
)

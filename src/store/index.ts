import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type State = {
    user: {
        a: number,
        b: number
    }
}

type Actions = {
    increment: (qty?: number) => void
    decrement: (qty?: number) => void
}

export const useCountStore = create<State & Actions>()(
    immer((setState) => ({
        user: {
            a: 0,
            b: 0,
        },
        increment: (qty = 1) =>
            setState((state) => {
                state.user.a += qty
            }),
        decrement: (qty = 1) =>
            setState((state) => {
                state.user.a -= qty
            }),
    })),
)

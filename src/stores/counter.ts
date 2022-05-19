import { defineStore } from 'pinia'
export interface ICounterState {
  count: number
  result: any
}

export const useCounter = defineStore('counter', {
  state: (): ICounterState => ({
    count: 0,
    result: 'init',
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
    },
    increment2x() {
      this.count *= 2
    },
    find() {
      this.result = 1
    },
  },
})

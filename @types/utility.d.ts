import type { Dispatch, SetStateAction } from 'react'

declare global {
  type AnyFunction = (...args: unknown[]) => unknown
}

declare module 'react' {
  type SetState<S> = Dispatch<SetStateAction<S>>
}

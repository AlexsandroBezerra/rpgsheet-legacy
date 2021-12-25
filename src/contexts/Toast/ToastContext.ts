import { createContext } from 'react'

export type ToastMessage = {
  id: string
  type?: 'default' | 'success' | 'error'
  title: string
  description?: string
}

export type AddToastProps = Omit<ToastMessage, 'id'>

type ToastContextData = {
  addToast(message: AddToastProps): void
  removeToast(id: string): void
}

export const ToastContext = createContext<ToastContextData>({
  addToast: () => {},
  removeToast: () => {}
})

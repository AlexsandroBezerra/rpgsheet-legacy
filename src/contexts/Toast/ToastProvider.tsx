import { ReactNode, useCallback, useState } from 'react'
import { nanoid } from 'nanoid'

import { ToastContext, ToastMessage } from './ToastContext'
import { ToastContainer } from './ToastContainer'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ToastMessage[]>([])

  const addToast = useCallback(({ title, description, type }: Omit<ToastMessage, 'id'>) => {
    const id = nanoid()

    const toast = {
      id,
      title,
      type,
      description
    }

    setMessages(state => [...state, toast])
  }, [])

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer messages={messages} />
      {children}
    </ToastContext.Provider>
  )
}

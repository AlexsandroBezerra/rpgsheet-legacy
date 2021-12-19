import React from 'react'
import { useTransition } from 'react-spring'

import { Toast } from '~/components/Toast'

import { ToastMessage } from './ToastContext'
import { Container } from './styles'

interface ToastContainerProps {
  messages: ToastMessage[]
}

export function ToastContainer({ messages }: ToastContainerProps) {
  const messagesWithTransictions = useTransition(messages, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 }
  })

  return (
    <Container>
      {messagesWithTransictions((props, item) => (
        <Toast key={item.id} message={item} style={props} />
      ))}
    </Container>
  )
}

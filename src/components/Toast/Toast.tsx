import React, { useEffect } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from 'react-icons/fi'

import { ToastMessage } from '~/contexts/Toast'
import { useToast } from '~/hooks/useToast'

import { Container } from './styles'

interface ToastProps {
  message: ToastMessage
  style: object
}

const icons = {
  default: <FiInfo size={20} />,
  success: <FiCheckCircle size={20} />,
  error: <FiAlertCircle size={20} />
}

const FOUR_SECONDS = 4 * 1000

export function Toast({ message, style }: ToastProps) {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, FOUR_SECONDS)

    return () => {
      clearTimeout(timer)
    }
  }, [message.id, removeToast])

  return (
    <Container type={message.type} style={style}>
      {icons[message.type || 'default']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button" onClick={() => removeToast(message.id)}>
        <FiX size={18} />
      </button>
    </Container>
  )
}

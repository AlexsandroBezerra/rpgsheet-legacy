import styled, { css } from 'styled-components'
import { animated } from 'react-spring'
import { ifProp, theme } from 'styled-tools'

interface ContainerProps {
  type?: 'default' | 'success' | 'error'
  hasDescription?: number
}

const toastTypeVariations = {
  default: css`
    background: ${theme('toast.default.background')};
    color: ${theme('toast.default.color')};
  `,

  success: css`
    background: ${theme('toast.success.background')};
    color: ${theme('toast.success.color')};
  `,

  error: css`
    background: ${theme('toast.error.background')};
    color: ${theme('toast.error.color')};
  `
}

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  position: relative;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'default']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;

    display: flex;
    align-items: center;
  }

  ${ifProp(
    'hasDescription',
    css`
      align-items: center;

      svg {
        margin-top 0;
      }
    `
  )}
`

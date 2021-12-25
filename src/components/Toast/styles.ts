import styled, { css } from 'styled-components'
import { animated } from 'react-spring'
import { theme } from 'styled-tools'

type ContainerProps = {
  type?: 'default' | 'success' | 'error'
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
  width: 100%;
  max-width: 22.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;

  & + div {
    margin-top: 0.5rem;
  }

  ${props => toastTypeVariations[props.type || 'default']}

  > svg {
    margin: 0.5rem 0.75rem 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 0.25rem;
      font-size: 0.875rem;
      opacity: 0.8;
      line-height: 1.25rem;
    }
  }

  button {
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;

    display: flex;
    align-items: center;
    margin-left: 0.25rem;
  }
`

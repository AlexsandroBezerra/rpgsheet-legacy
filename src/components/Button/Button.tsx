import { ForwardedRef, forwardRef } from 'react'
import type { ButtonProps } from 'rebass/styled-components'

import { ButtonContainer } from './styles'

export const Button = forwardRef(({ children, ...rest }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  return (
    <ButtonContainer {...rest} ref={ref}>
      {children}
    </ButtonContainer>
  )
})

Button.displayName = 'Button'

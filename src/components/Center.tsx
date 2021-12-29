import { Flex, FlexProps } from 'rebass/styled-components'

export function Center({ children, ...rest }: FlexProps) {
  return (
    <Flex alignItems="center" justifyContent="center" {...rest}>
      {children}
    </Flex>
  )
}

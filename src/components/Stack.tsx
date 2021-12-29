import { Flex, FlexProps } from 'rebass/styled-components'

type Direction = 'vertical' | 'horizontal'
type FlexDirection = 'row' | 'column'

type StackProps = FlexProps & {
  direction?: Direction
  spacing: string | number
}

const directionToFlexDirection: Record<Direction, FlexDirection> = {
  horizontal: 'row',
  vertical: 'column'
}

export function Stack({ children, direction = 'vertical', spacing, ...rest }: StackProps) {
  const flexDirection = directionToFlexDirection[direction]

  return (
    <Flex {...rest} flexDirection={flexDirection} sx={{ gap: spacing }}>
      {children}
    </Flex>
  )
}

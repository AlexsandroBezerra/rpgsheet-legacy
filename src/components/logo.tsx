import { Text } from '@chakra-ui/react'
import { memo } from 'react'

function LogoComponent() {
  return (
    <Text fontSize={['2xl', '3xl']} fontWeight="bold" letterSpacing="tight">
      rpgsheet
      <Text as="span" ml="1" color="pink.500">
        .
      </Text>
    </Text>
  )
}

export const Logo = memo(LogoComponent)

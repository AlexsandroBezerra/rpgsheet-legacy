import { Flex } from '@chakra-ui/react'

import { Logo } from '..'
import { Profile } from './profile'

export function Header() {
  return (
    <Flex as="header" w="100%" maxWidth="92.5rem" h="20" mx="auto" mt="4" px="6" align="center">
      <Logo />

      <Flex ml="auto" align="center">
        <Profile />
      </Flex>
    </Flex>
  )
}

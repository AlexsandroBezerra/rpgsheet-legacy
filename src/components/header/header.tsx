import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'

import { Logo } from '../logo'
import { Profile } from './profile'
import { useSidebarDrawer } from '~/contexts/sidebar-drawer'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex as="header" w="100%" maxWidth="92.5rem" h="20" mx="auto" mt="4" px="6" align="center">
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          mr="2"
          onClick={onOpen}
        />
      )}

      <Logo />

      <Flex ml="auto" align="center">
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}

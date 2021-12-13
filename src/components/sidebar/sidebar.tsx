import { Box } from '@chakra-ui/react'

import { SidebarNav } from './sidebar-nav'

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}

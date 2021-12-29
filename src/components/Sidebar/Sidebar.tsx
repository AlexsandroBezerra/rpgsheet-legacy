import { Box } from 'rebass/styled-components'

import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  return (
    <Box as="aside" width="16rem" mr="2rem">
      <SidebarNav />
    </Box>
  )
}

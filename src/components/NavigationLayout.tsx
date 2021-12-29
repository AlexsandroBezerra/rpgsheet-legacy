import { ReactNode } from 'react'
import { Box, Flex } from 'rebass/styled-components'
import { Header } from './Header'

import { Sidebar } from './Sidebar'

type NavigationLayoutProps = {
  children: ReactNode
}

export function NavigationLayout({ children }: NavigationLayoutProps) {
  return (
    <>
      <Header />

      <Flex as="main" width="100%" maxWidth={1480} mx="auto" px="1.5rem" my="1.5rem">
        <Sidebar />

        <Box as="main">{children}</Box>
      </Flex>
    </>
  )
}

import { ReactNode } from 'react'
import { Box, Text } from 'rebass/styled-components'

import { Stack } from '../Stack'

type NavSessionProps = {
  title: string
  children: ReactNode
}

export function NavSession(props: NavSessionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small" lineHeight="base">
        {props.title}
      </Text>

      <Stack spacing="1rem" mt="2rem" alignItems="stretch">
        {props.children}
      </Stack>
    </Box>
  )
}

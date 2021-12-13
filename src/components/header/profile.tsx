import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'

export function Profile() {
  const { data } = useSession()

  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>{data?.user?.name}</Text>

        <Text color="gray.300" fontSize="small">
          {data?.user?.email}
        </Text>
      </Box>

      <Avatar size="md" name={data?.user?.name || ''} src={data?.user?.image || ''} />
    </Flex>
  )
}

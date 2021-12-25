import { useSession } from 'next-auth/react'
import { Flex, Text } from 'rebass/styled-components'
import { AvatarImage, ProfileDataContainer } from './styles'

export function Profile() {
  const { data } = useSession()

  return (
    <Flex alignItems="center">
      <ProfileDataContainer>
        <Text lineHeight="base">{data?.user?.name}</Text>

        <Text color="gray.300" fontSize="small" lineHeight="short">
          {data?.user?.email}
        </Text>
      </ProfileDataContainer>

      <AvatarImage src={data?.user?.image as string} alt={data?.user?.name as string} />
    </Flex>
  )
}
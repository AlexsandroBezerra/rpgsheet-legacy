import { useSession } from 'next-auth/react'
import { Flex, Text } from 'rebass/styled-components'

import { AvatarImage, ProfileDataContainer } from './styles'

type ProfileProps = {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const { data } = useSession()

  return (
    <Flex alignItems="center">
      {showProfileData && (
        <ProfileDataContainer>
          <Text lineHeight="base">{data?.user?.name}</Text>

          <Text color="gray.300" fontSize="small" lineHeight="base">
            {data?.user?.email}
          </Text>
        </ProfileDataContainer>
      )}

      <AvatarImage src={data?.user?.image as string} alt={data?.user?.name as string} />
    </Flex>
  )
}

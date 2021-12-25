import { Flex, Text } from 'rebass/styled-components'
import { AvatarImage, ProfileDataContainer } from './styles'

type ProfileProps = {
  name: string
  src: string
}

export function Profile({ src, name }: ProfileProps) {
  return (
    <Flex alignItems="center">
      <ProfileDataContainer>
        <Text lineHeight="base">Alexsandro Bezerra</Text>

        <Text color="gray.300" fontSize="small" lineHeight="short">
          alexsandro.g.bezerra@gmail.com
        </Text>
      </ProfileDataContainer>

      <AvatarImage src={src} alt={name} />
    </Flex>
  )
}

import { IconType } from 'react-icons/lib'
import { Text, LinkProps as RebassLinkProps } from 'rebass/styled-components'

import { ActiveLink } from './ActiveLink'

import { NavLinkContainer } from './styles'

type NavLinkProps = RebassLinkProps & {
  icon: IconType
  href: string
  children: string
}

export function NavLink({ icon: Icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <NavLinkContainer {...rest}>
        <Icon size="1.25em" />

        <Text ml="1rem" fontWeight="500" lineHeight="base">
          {children}
        </Text>
      </NavLinkContainer>
    </ActiveLink>
  )
}

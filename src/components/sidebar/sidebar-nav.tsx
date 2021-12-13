import { Stack } from '@chakra-ui/layout'
import { RiDashboardLine, RiSettings2Line } from 'react-icons/ri'

import { NavLink } from './nav-link'
import { NavSession } from './nav-session'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSession title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>

        <NavLink href="/settings" icon={RiSettings2Line}>
          Preferências
        </NavLink>
      </NavSession>
    </Stack>
  )
}

import { RiDashboardLine, RiSettings2Line } from 'react-icons/ri'

import { NavLink } from './NavLink'
import { NavSession } from './NavSession'
import { Stack } from '../Stack'

export function SidebarNav() {
  return (
    <Stack spacing="1rem" alignItems="flex-start">
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

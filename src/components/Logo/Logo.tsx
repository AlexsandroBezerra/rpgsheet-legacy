import { LogoContainer, LogoDot } from './styles'

export function Logo() {
  return (
    <LogoContainer as="h1">
      rpgsheet
      <LogoDot as="span">.</LogoDot>
    </LogoContainer>
  )
}

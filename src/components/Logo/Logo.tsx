import { LogoContainer, LogoDot } from './styles'

export function Logo() {
  return (
    <h1>
      <LogoContainer fontSize={['2xl', '3xl']}>
        rpgsheet
        <LogoDot as="span">.</LogoDot>
      </LogoContainer>
    </h1>
  )
}

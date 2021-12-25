import { useWindowWidth } from '@react-hook/window-size'

import { windowSizes } from '~/styles/breakpoints'

const DELAY_IN_MILLISECONDS = 100

export function useBreakpoints() {
  const width = useWindowWidth({ wait: DELAY_IN_MILLISECONDS })

  const isSmall = width <= windowSizes.small.inPixels
  const isMedium = width <= windowSizes.medium.inPixels
  const isLarge = width <= windowSizes.large.inPixels

  const isGreaterThanSmall = width >= windowSizes.small.inPixels
  const isGreaterThanMedium = width >= windowSizes.medium.inPixels
  const isGreaterThanLarge = width >= windowSizes.large.inPixels

  return {
    isGreaterThanLarge,
    isGreaterThanMedium,
    isGreaterThanSmall,
    isLarge,
    isMedium,
    isSmall
  }
}

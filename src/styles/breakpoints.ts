export const windowSizes = {
  small: {
    inPixels: 480,
    inRelativeSize: '30em'
  },
  medium: {
    inPixels: 768,
    inRelativeSize: '48em'
  },
  large: {
    inPixels: 992,
    inRelativeSize: '62em'
  }
}

export const breakpoints = [
  windowSizes.small.inRelativeSize,
  windowSizes.medium.inRelativeSize,
  windowSizes.large.inRelativeSize
]

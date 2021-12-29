import type { ColorRecord, Colors } from './styled'

const gray: ColorRecord = {
  900: '#181B23',
  800: '#1F2029',
  700: '#353646',
  600: '#4B4D63',
  500: '#616480',
  400: '#797D9A',
  300: '#9699B0',
  200: '#B3B5C6',
  100: '#D1D2DC',
  50: '#EEEEF2'
}

const blue: ColorRecord = {
  900: '#1A365D',
  800: '#2A4365',
  700: '#2C5282',
  600: '#2B6CB0',
  500: '#3182CE',
  400: '#4299E1',
  300: '#63B3ED',
  200: '#90CDF4',
  100: '#BEE3F8',
  50: '#EBF8FF'
}

const red: ColorRecord = {
  900: '#63171B',
  800: '#822727',
  700: '#9B2C2C',
  600: '#C53030',
  500: '#E53E3E',
  400: '#F56565',
  300: '#FC8181',
  200: '#FEB2B2',
  100: '#FED7D7',
  50: '#FFF5F5'
}

const green: ColorRecord = {
  900: '#1C4532',
  800: '#22543D',
  700: '#276749',
  600: '#2F855A',
  500: '#38A169',
  400: '#48BB78',
  300: '#68D391',
  200: '#9AE6B4',
  100: '#C6F6D5',
  50: '#F0FFF4'
}

const pink: ColorRecord = {
  900: '#521B41',
  800: '#702459',
  700: '#97266D',
  600: '#B83280',
  500: '#D53F8C',
  400: '#ED64A6',
  300: '#F687B3',
  200: '#FBB6CE',
  100: '#FED7E2',
  50: '#FFF5F7'
}

export const colors: Colors = {
  primary: '#D53F8C',
  primaryHover: '#B83280',

  white: '#FFFFFF',
  black: '#000000',

  gray,
  blue,
  green,
  red,
  pink
}

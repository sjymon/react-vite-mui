import '@fontsource/poppins'
import type { ThemeOptions } from '@mui/material/styles'
import breakpoints from './breakpoints'
import { ResponsiveFontSize } from './types'

const REM_BASE = 16

const FONT_PRIMARY = '"Poppins", sans-serif' // Google Font

const typography: ThemeOptions['typography'] = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 300,
  fontWeightMedium: 400,
  fontWeightBold: 700,
  title: {
    fontSize: pxToRem(36),
    fontWeight: 400,
    lineHeight: 1.3,
  },
  xxSmallRegular: {
    fontSize: pxToRem(10.5),
    fontWeight: 400,
    lineHeight: 1.3,
  },
  xxSmallSemibold: {
    fontSize: pxToRem(10.5),
    fontWeight: 500,
    lineHeight: 1.3,
  },
  xxSmallBold: {
    fontSize: pxToRem(10.5),
    fontWeight: 700,
    lineHeight: 1.3,
  },
  xSmallRegular: {
    fontSize: pxToRem(12),
    fontWeight: 400,
    lineHeight: 1.3,
  },
  xSmallSemibold: {
    fontSize: pxToRem(12),
    fontWeight: 500,
    lineHeight: 1.3,
  },
  xSmallBold: {
    fontSize: pxToRem(12),
    fontWeight: 700,
    lineHeight: 1.3,
  },
  smallRegular: {
    fontSize: pxToRem(14),
    fontWeight: 400,
    lineHeight: 1.3,
  },
  smallSemibold: {
    fontSize: pxToRem(14),
    fontWeight: 500,
    lineHeight: 1.3,
  },
  smallBold: {
    fontSize: pxToRem(14),
    fontWeight: 700,
    lineHeight: 1.3,
  },
  baseRegular: {
    fontSize: pxToRem(16),
    fontWeight: 400,
    lineHeight: 1.3,
  },
  baseSemibold: {
    fontSize: pxToRem(16),
    fontWeight: 500,
    lineHeight: 1.3,
  },
  baseBold: {
    fontSize: pxToRem(16),
    fontWeight: 700,
    lineHeight: 1.3,
  },
  mediumRegular: {
    fontSize: pxToRem(18),
    fontWeight: 400,
    lineHeight: 1.3,
  },
  mediumSemibold: {
    fontSize: pxToRem(18),
    fontWeight: 500,
    lineHeight: 1.3,
  },
  mediumBold: {
    fontSize: pxToRem(18),
    fontWeight: 700,
    lineHeight: 1.3,
  },
  largeRegular: {
    fontSize: pxToRem(20),
    fontWeight: 400,
    lineHeight: 1.3,
  },
  largeSemibold: {
    fontSize: pxToRem(20),
    fontWeight: 500,
    lineHeight: 1.3,
  },
  largeBold: {
    fontSize: pxToRem(20),
    fontWeight: 700,
    lineHeight: 1.3,
  },
  xLargeRegular: {
    fontSize: pxToRem(22),
    fontWeight: 400,
    lineHeight: 1.3,
  },
  xLargeSemibold: {
    fontSize: pxToRem(22),
    fontWeight: 500,
    lineHeight: 1.3,
  },
  xLargeBold: {
    fontSize: pxToRem(22),
    fontWeight: 700,
    lineHeight: 1.3,
  },
  bigRegular: {
    fontSize: pxToRem(26),
    fontWeight: 400,
    lineHeight: 1.3,
  },
  bigSemibold: {
    fontSize: pxToRem(26),
    fontWeight: 500,
    lineHeight: 1.3,
  },
  bigBold: {
    fontSize: pxToRem(26),
    fontWeight: 700,
    lineHeight: 1.3,
  },
}

export function remToPx(value: number) {
  return Math.round(parseFloat(value.toString()) * REM_BASE)
}

export function pxToRem(value: number) {
  return `${value / REM_BASE}rem`
}

export function responsiveFontSizes({ sm, md, lg }: ResponsiveFontSize) {
  return {
    [breakpoints.up('sm')]: {
      fontSize: pxToRem(sm),
    },
    [breakpoints.up('md')]: {
      fontSize: pxToRem(md),
    },
    [breakpoints.up('lg')]: {
      fontSize: pxToRem(lg),
    },
  }
}

export default typography

export interface ResponsiveFontSize {
  sm: number
  md: number
  lg: number
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    xxSmallRegular: React.CSSProperties
    xxSmallSemibold: React.CSSProperties
    xxSmallBold: React.CSSProperties
    xSmallRegular: React.CSSProperties
    xSmallSemibold: React.CSSProperties
    xSmallBold: React.CSSProperties
    smallRegular: React.CSSProperties
    smallSemibold: React.CSSProperties
    smallBold: React.CSSProperties
    baseRegular: React.CSSProperties
    baseSemibold: React.CSSProperties
    baseBold: React.CSSProperties
    mediumRegular: React.CSSProperties
    mediumSemibold: React.CSSProperties
    mediumBold: React.CSSProperties
    largeRegular: React.CSSProperties
    largeSemibold: React.CSSProperties
    largeBold: React.CSSProperties
    xLargeRegular: React.CSSProperties
    xLargeSemibold: React.CSSProperties
    xLargeBold: React.CSSProperties
    bigRegular: React.CSSProperties
    bigSemibold: React.CSSProperties
    bigBold: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title: React.CSSProperties
    error?: React.CSSProperties
    xxSmallRegular: React.CSSProperties
    xxSmallSemibold: React.CSSProperties
    xxSmallBold: React.CSSProperties
    xSmallRegular: React.CSSProperties
    xSmallSemibold: React.CSSProperties
    xSmallBold: React.CSSProperties
    smallRegular: React.CSSProperties
    smallSemibold: React.CSSProperties
    smallBold: React.CSSProperties
    baseRegular: React.CSSProperties
    baseSemibold: React.CSSProperties
    baseBold: React.CSSProperties
    mediumRegular: React.CSSProperties
    mediumSemibold: React.CSSProperties
    mediumBold: React.CSSProperties
    largeRegular: React.CSSProperties
    largeSemibold: React.CSSProperties
    largeBold: React.CSSProperties
    xLargeRegular: React.CSSProperties
    xLargeSemibold: React.CSSProperties
    xLargeBold: React.CSSProperties
    bigRegular: React.CSSProperties
    bigSemibold: React.CSSProperties
    bigBold: React.CSSProperties
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true
    error: true
    xxSmallRegular: true
    xxSmallSemibold: true
    xxSmallBold: true
    xSmallRegular: true
    xSmallSemibold: true
    xSmallBold: true
    smallRegular: true
    smallSemibold: true
    smallBold: true
    baseRegular: true
    baseSemibold: true
    baseBold: true
    mediumRegular: true
    mediumSemibold: true
    mediumBold: true
    largeRegular: true
    largeSemibold: true
    largeBold: true
    xLargeRegular: true
    xLargeSemibold: true
    xLargeBold: true
    bigRegular: true
    bigSemibold: true
    bigBold: true
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
  }
}

declare module '@mui/material/Button' {
  interface ButtonColorOverrides {
    primary_gradient: true //add new color called outlined-soft
  }

  interface ButtonPropsColorOverrides extends ButtonColorOverrides {}
}

import { baseColors, fontSizes } from '@/common/config/theme'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: baseColors.cinemaRed,
      contrastText: baseColors.pureWhite,
    },
    secondary: {
      main: baseColors.goldAccent,
      contrastText: baseColors.deepBlack,
    },
    background: {
      default: baseColors.deepBlack,
      paper: baseColors.darkGray,
    },
    text: {
      primary: baseColors.pureWhite,
      secondary: baseColors.lightGray,
      disabled: '#6b6b6b',
    },
    divider: baseColors.darkGray,
  },

  typography: {
    fontFamily:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',

    h1: {
      fontSize: `${fontSizes.h1}px`,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: `${fontSizes.h2}px`,
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h3: {
      fontSize: `${fontSizes.h3}px`,
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: `${fontSizes.h4}px`,
      fontWeight: 600,
      lineHeight: 1.35,
    },
    body1: {
      fontSize: `${fontSizes.body}px`,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: `${fontSizes.small}px`,
      lineHeight: 1.6,
    },
    caption: {
      fontSize: `${fontSizes.caption}px`,
      lineHeight: 1.4,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 8,
  },
})

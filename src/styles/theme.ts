import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '100': '#D9D9D9',
      '300': '#808080',
      '500': '#262626',
      '600': '#1A1A1A',
    },
    purple: {
      '10': '#8284FA',
      '20': '#5E60CE',
    },
    green: {
      '10': '#5FA89C',
      '20': '#0CCFA2',
    },

    danger: '#E25858',
    gradient: 'linear-gradient(104.19deg, #9747FF -19.68%, #0CD1A2 67.67%);',
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: '#1A1A1A',
        color: '#D9D9D9',
      },
    },
  },
})
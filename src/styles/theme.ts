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
      '100': '#8284FA',
      '200': '#5E60CE',
    },
    gren: {
      '100': '#4EA8DE',
      '200': '#1E6F9F',
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
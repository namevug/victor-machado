import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
        'purple': '#8284FA',
        'purple-200': '#5E60CE',
        'green': '#4EA8DE',
        'green-200': '#1E6F9F',
    },
    base: {
        'gray-100': '#D9D9D9',
        'gray-300': '#808080',
        'gray-500': '#262626',
        'gray-600': '#1A1A1A',
        'danger': '#E25858',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: '#1A1A1A',
      },
    },
  },
})
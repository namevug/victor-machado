import { Box, Text } from '@chakra-ui/react'

export default function Hi() {
  return (
    <Box
      w='100%'
      mt='2.5rem'
      fontSize={['38px', '38px', '48px']}
      fontWeight={'bold'}
      className='gradient-text'
    >
      <Text title='Hi, I’m'>Olá, sou</Text>
      <Text title='Victor Machado.'>Victor Machado.</Text>
    </Box>
  )
}

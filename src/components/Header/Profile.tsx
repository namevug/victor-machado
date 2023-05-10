import { Box, Image } from '@chakra-ui/react'

export default function Profile() {
  return (
    <Box
      boxSize={['130px', '130px', '160px']}
      cursor='pointer'
      _hover={{ transform: 'scale(1.01)' }}
      transition='transform 0.2s ease-in-out'
    >
      <Image
        src='https://avatars.githubusercontent.com/u/97545136?v=4'
        title='Imagem de perfil Victor'
        borderRadius='100%'
      />
    </Box>
  )
}

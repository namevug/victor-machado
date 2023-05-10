import { Box, Text, Image } from '@chakra-ui/react'

export default function Projects() {
  return (
    <Box
      w='100%'
      maxWidth='35.313rem'
      mt={['2.625rem', '2.625rem', '2.625rem', '0']}
    >
      <Text fontSize='0.875rem' color='gray.300'>
        2023 - Now
      </Text>
      <Text
        mt='0.438rem'
        fontSize='1.125rem'
        fontWeight='700'
        className='gradient-text'
      >
        MentorGo.
      </Text>
      <Text mt='0.313rem' fontSize='0.875rem'>
        Com o MentorGo, mentores podem gerenciar de forma eficiente o
        desenvolvimento individual de cada aluno. A plataforma oferece recursos
        personalizados, permitindo que os mentores criem desafios, escrevam
        artigos, cadastrem cursos e criem salas. Se você já presta algum tipo de
        mentoria, aumente a eficiência de seus ensinamentos e leve seus alunos
        ao próximo nível com o MentorGo.
      </Text>
      <Text mt='0.563rem' mb='0.563rem' fontSize='0.875rem' fontWeight='600'>
        NextJs ChakraUi MongoDb
      </Text>
      <Text fontWeight='600' color='#5FA89C'>
        <a href='#'>View in Github</a>
      </Text>

      <Box
        maxWidth='28.75rem'
        mt='0.75rem'
        cursor='pointer'
        _hover={{ transform: 'scale(1.06)' }}
        transition='transform 0.2s ease-in-out'
      >
        <Image src='/projects/mentorgo.png' />
      </Box>
    </Box>
  )
}

import { Box, Text, Image, Link, Flex } from '@chakra-ui/react'

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

      <Flex
        mt='0.563rem'
        mb='0.563rem'
        fontSize='1.125rem'
        fontWeight='600'
        alignItems='center'
        gap='0.375rem'
      >
        <Text
          cursor='pointer'
          _hover={{ color: 'green.10', transition: 'color 0.3s ease-in-out' }}
        >
          NextJs
        </Text>
        <Box
          w='0.375rem'
          h='0.375rem'
          borderRadius='9999px'
          bgColor='green.10'
        />
        <Text
          cursor='pointer'
          _hover={{ color: 'green.10', transition: 'color 0.3s ease-in-out' }}
        >
          ChakraUi
        </Text>
        <Box
          w='0.375rem'
          h='0.375rem'
          borderRadius='9999px'
          bgColor='green.10'
        />
        <Text
          cursor='pointer'
          _hover={{ color: 'green.10', transition: 'color 0.3s ease-in-out' }}
        >
          MongoDb
        </Text>
      </Flex>

      {/* <Text mt='0.563rem' mb='0.563rem' fontSize='1.125rem' fontWeight='600'>
        NextJs ChakraUi MongoDb
      </Text> */}

      <Link
        href='#'
        fontWeight='600'
        color='green.10'
        _hover={{ color: 'green.20', transition: 'color 0.6s ease-in-out' }}
      >
        View in Github
      </Link>

      <Box
        maxWidth='28.75rem'
        mt='1rem'
        cursor='pointer'
        _hover={{ transform: 'scale(1.06)' }}
        transition='transform 0.2s ease-in-out'
      >
        <Image src='/projects/mentorgo.png' />
      </Box>
    </Box>
  )
}

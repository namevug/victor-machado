import { Box, HStack, Image, Link, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <>
      <Box w='25.625rem'>
        <Image
          borderRadius='full'
          boxSize='160px'
          src='https://avatars.githubusercontent.com/u/97545136?v=4'
          alt='Namevug'
        />
        <Box
          w='100%'
          mt='2.5rem'
          fontSize='48px'
          fontWeight={'bold'}
          className='gradient-text'
        >
          <Text>Hi, I’m</Text>
          <Text>Victor Machado.</Text>
        </Box>
        <Text mt='3.125rem' fontSize='0.875rem'>
          Olá, sou Victor, um desenvolvedor Front-End de 25 anos apaixonado por
          criar interfaces elegantes e funcionais que proporcionam a melhor
          experiência possível para o usuário final. Sempre priorizando um
          código limpo e otimizado em meus projetos. Em meu portfólio, você
          encontrará alguns dos meus projetos recentes e desafiadores, além de
          informações sobre minhas habilidades e experiências anteriores.
        </Text>

        <HStack mt='2rem' color='gray.300' gap='1.25rem'>
          <Link href='#' _hover={{ color: 'green.10' }}>
            Blog
          </Link>
          <Link
            href='https://twitter.com/namevug'
            target='_blank'
            _hover={{ color: 'green.10' }}
          >
            Twitter
          </Link>
          <Link
            href='https://github.com/namevug'
            target='_blank'
            _hover={{ color: 'green.10' }}
          >
            GitHub
          </Link>
          {/* <Link
            href='https://www.instagram.com/namevug/'
            target='_blank'
            _hover={{ color: 'green.10' }}
          >
            Instagram
          </Link> */}
          <Link
            href='https://www.linkedin.com/in/victor-machado-291471229/'
            target='_blank'
            _hover={{ color: 'green.10' }}
          >
            Linkedin
          </Link>
        </HStack>
      </Box>
    </>
  )
}

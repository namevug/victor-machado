import { Box, HStack, Image, Text } from '@chakra-ui/react'

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
        <Text mt='4rem' fontSize='1.125rem'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          reiciendis necessitatibus eos voluptatum debitis repellat excepturi
          enim quam, ea deleniti facilis, quasi nesciunt. Veritatis laborum iste
          delectus, amet fuga earum?
        </Text>

        <HStack mt='2rem' color='gray.300'>
          <a href='#'>Blog</a>
          <a href='https://github.com/namevug' target='_blank'>
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/victor-machado-291471229/'
            target='_blank'
          >
            Linkedin
          </a>
          <a href='https://twitter.com/namevug' target='_blank'>
            Twitter
          </a>
          {/* <a href='https://www.instagram.com/namevug/' target='_blank'>
            Instagram
          </a> */}
        </HStack>
      </Box>
    </>
  )
}

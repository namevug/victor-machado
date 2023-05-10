import { Text, Flex, Box, Image, HStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Flex
        maxWidth='80rem'
        justifyContent='space-between'
        flexDirection={['column', 'column', 'column', 'row']}
        mt='5rem'
        ml='5rem'
        mr='5rem'
      >
        {/* Header */}
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
            enim quam, ea deleniti facilis, quasi nesciunt. Veritatis laborum
            iste delectus, amet fuga earum?
          </Text>
          <HStack mt='2rem' color='gray.300'>
            <a href='#'>Blog</a>
            <a href='#'>GitHub</a>
            <a href='#'>Linkedin</a>
            <a href='#'>Twitter</a>
            <a href='#'>Instagram</a>
          </HStack>
        </Box>

        {/* Content */}
        <Box
          w='100%'
          maxWidth='40.5rem'
          height='400px'
          bg='green'
          mt={['2.625rem', '2.625rem', '2.625rem', '0']}
        >
          <Text>Content</Text>
        </Box>
      </Flex>
    </>
  )
}

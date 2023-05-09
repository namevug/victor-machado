import { Text, Flex, Box, Image, HStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Flex mt='5rem' marginLeft='5rem' gap={'14rem'}>
        <Box maxWidth='25.625rem'>
          <Image
            borderRadius='full'
            boxSize='160px'
            src='https://avatars.githubusercontent.com/u/97545136?v=4'
            alt='Namevug'
          />
          <Box w='100%' mt='2.5rem' fontSize='48px' fontWeight={'bold'}>
            <Text>Hi, I’m</Text>
            <Text>Victor Machado.</Text>
          </Box>
          <Text mt='4rem'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            reiciendis necessitatibus eos voluptatum debitis repellat excepturi
            enim quam, ea deleniti facilis, quasi nesciunt. Veritatis laborum
            iste delectus, amet fuga earum?
          </Text>
          <HStack mt='2rem'>
            <a href='#'>Blog</a>
            <a href='#'>GitHub</a>
            <a href='#'>Linkedin</a>
            <a href='#'>Twitter</a>
            <a href='#'>Instagram</a>
          </HStack>
        </Box>
        <Box w='100%' maxWidth='40.5rem' height='400px' bg='green'>
          <Text>Content</Text>
        </Box>
      </Flex>
    </>
  )
}

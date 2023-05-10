import Header from '@/components/header'
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
        <Header />

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

import Header from '@/components/header'
import Projects from '@/components/projects'
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

        <Projects />
      </Flex>
    </>
  )
}

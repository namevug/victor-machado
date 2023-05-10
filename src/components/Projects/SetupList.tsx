import { Box, Flex, Text } from '@chakra-ui/react'

export default function SetupList() {
  return (
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
      <Box w='0.375rem' h='0.375rem' borderRadius='9999px' bgColor='green.10' />
      <Text
        cursor='pointer'
        _hover={{ color: 'green.10', transition: 'color 0.3s ease-in-out' }}
      >
        ChakraUi
      </Text>
      <Box w='0.375rem' h='0.375rem' borderRadius='9999px' bgColor='green.10' />
      <Text
        cursor='pointer'
        _hover={{ color: 'green.10', transition: 'color 0.3s ease-in-out' }}
      >
        MongoDb
      </Text>
    </Flex>
  )
}

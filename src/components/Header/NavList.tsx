import { HStack, Link } from '@chakra-ui/react'

export default function NavList() {
  return (
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
  )
}

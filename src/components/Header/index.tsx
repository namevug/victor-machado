import { Box, Text } from '@chakra-ui/react'
import Profile from './Profile'
import Hi from './Hi'
import NavList from './NavList'

export default function Header() {
  return (
    <>
      <Box
        w='100%'
        maxW='38.125rem'
        mt='2rem'
        // maxWidth='25.625rem'
        mr={["3rem", "6rem"]}
      >
        <Profile />
        <Hi />
        <Text w={'100%'} mt='3rem' fontSize={['0.813rem', '1rem', '1rem']}>
        Me chamo Victor, um desenvolvedor Front-End de 26 anos apaixonado por tecnologia, que também se aventura no mundo da moda no projeto Vug Collection. <br></br>
        Busco criar interfaces elegantes e funcionais que proporcionam a melhor experiência para o usuário final, priorizando um código limpo e otimizado
        em meus projetos.
        </Text>
        <NavList />
      </Box>
    </>
  )
}

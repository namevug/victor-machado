import { Box, Text } from '@chakra-ui/react'
import Profile from './Profile'
import Hi from './Hi'
import NavList from './NavList'

export default function Header() {
  return (
    <>
      <Box w='100%' maxWidth='25.625rem' mr='2rem'>
        <Profile />
        <Hi />
        <Text w={'100%'} mt='3rem' fontSize='0.875rem'>
          Olá, sou Victor, um desenvolvedor Front-End de 26 anos apaixonado por
          criar interfaces elegantes e funcionais que proporcionam a melhor
          experiência possível para o usuário final. Sempre priorizando um
          código limpo e otimizado em meus projetos. Em meu portfólio, você
          encontrará alguns dos meus projetos recentes e desafiadores, além de
          informações sobre minhas habilidades e experiências anteriores.
        </Text>
        <NavList />
      </Box>
    </>
  )
}

import Header from '@/components/Header'
import Projects from '@/components/Projects'
import { Flex, VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Flex
        maxWidth='80rem'
        justifyContent='space-between'
        flexDirection={['column', 'column', 'column', 'row']}
        m={['2rem', '2rem', '3rem', '3rem', '6rem']}
      >
        <Header />

        <Projects
          date='2023 - Now'
          title='MentorGo.'
          description='Com o MentorGo, mentores podem gerenciar de forma eficiente o
          desenvolvimento individual de cada aluno. A plataforma oferece recursos
          personalizados, permitindo que os mentores criem desafios, escrevam
          artigos, cadastrem cursos e criem salas. Se você já presta algum tipo de
          mentoria, aumente a eficiência de seus ensinamentos e leve seus alunos
          ao próximo nível com o MentorGo.'
          href='#'
          image='/projects/mentorgo.png'
        />
      </Flex>
    </>
  )
}

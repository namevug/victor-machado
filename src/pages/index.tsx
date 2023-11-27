import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { Flex, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const project = [
    {
      date: '2023 - Now',
      title: 'Verbaliza Cx.',
      description: 'Descrição do projeto...',
      href: 'https://verbalizacx.com/',
      image: '/projects/verbalizapp.png'
    },
    {
      date: '2023 Jan - Apr',
      title: 'MentorGo.',
      description: 'O MentorGo oferece aos mentores uma gestão eficiente do desenvolvimento individual de cada aluno. A plataforma proporciona recursos personalizados que possibilitam a criação de desafios, artigos, salas, o cadastramento de cursos. Se você já atua como mentor, potencialize a eficácia de seus ensinamentos e conduza seus alunos a um patamar superior com a ajuda do MentorGo.',
      href: 'https://mentor-go.vercel.app/',
      image: '/projects/mentorgo.png'
    }
  ]
  
  return (
    <>
      <Flex
        maxWidth="80rem"
        justifyContent="space-between"
        flexDirection={["column", "column", "column", "row"]}
        m={["2rem", "2rem", "3rem", "3rem", "6rem"]}
      >
        <Header />
        {windowWidth > 991 ? (
          <VStack
            h="75vh"
            gap="3rem"
            overflowY="scroll"
            w="610px"
            
            sx={{
              /* Chrome, Edge, and Safari */
              "&::-webkit-scrollbar": {
                width: "0.5rem",
                height: "0.5rem",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#808080",
                borderRadius: "4px",
                border: "4px none #808080",
              },
            }}
          >

        {project.map((project, index) => (
        <Projects
          key={index}
          date={project.date}
          title={project.title}
          description={project.description}
          href={project.href}
          image={project.image}
        />
      ))}

          </VStack>
        ) : null }
      </Flex>
    </>
  );
}

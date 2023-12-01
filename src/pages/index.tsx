import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { Center, Flex, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const project = [
    {
      date: "2023 - Oct",
      title: "VerbalizaCx.",
      description: "O Verbaliza redefine a gestão de experiência do cliente com inovação SaaS. Permitimos que os clientes se expressem de maneira única através de foto, vídeo, áudio e texto. Métricas detalhadas proporcionam insights valiosos, capacitando as empresas a compreenderem profundamente a satisfação do cliente. ",
      stacks: ["Next.js", "Tailwind", "PostgreSQL"],
      href: "https://verbalizacx.com/",
      image: "/projects/verbalizapp.png",
    },
    {
      date: "2023 Jan - Apr",
      title: "MentorGo.",
      description:
        "O MentorGo facilita a gestão do desenvolvimento individual de alunos, oferecendo recursos personalizados como criação de desafios, artigos, salas e cadastro de cursos.",
      stacks: ["Next.js", "ChakraUi", "MongoDB"],
      href: "https://mentor-go.vercel.app/",
      image: "/projects/mentorgo.png",
    },
  ];

  return (
    <>
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="center"
        alignContent="center"
        m="2rem"  // ajustar aqui, pois está gerando uma rolagem na página principal verificar!
      >
        <Header />
        {windowWidth > 991 ? (
          <VStack
            mt='1rem'
            // h="90vh"
            gap="7rem"
            // overflowY="scroll"
            // w="610px"
            p="1rem"

            // sx={{
            //   /* Chrome, Edge, and Safari */
            //   "&::-webkit-scrollbar": {
            //     width: "0.5rem",
            //     height: "0.5rem",
            //   },
            //   "&::-webkit-scrollbar-thumb": {
            //     backgroundColor: "#808080",
            //     borderRadius: "4px",
            //     border: "4px none #808080",
            //   },
            // }}
          >
            {project.map((project, index) => (
              <Projects
                key={index}
                date={project.date}
                title={project.title}
                description={project.description}
                stacks={project.stacks}
                href={project.href}
                image={project.image}
              />
            ))}
          </VStack>
        ) : (
          <VStack
          gap="4.5rem"
          maxW="610px"
          align="start"
        >
          {project.map((project, index) => (
            <Projects
              key={index}
              date={project.date}
              title={project.title}
              description={project.description}
              stacks={project.stacks}
              href={project.href}
              image={project.image}
            />
          ))}
        </VStack>
        )}
      </Flex>
    </>
  );
}

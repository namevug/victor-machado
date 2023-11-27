import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { Flex, VStack } from "@chakra-ui/react";
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
    // {
    //   date: "2023 - Now",
    //   title: "Verbaliza Cx.",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    //   stacks: ["Next.js", "Tailwind", "PostgreSQL"],
    //   href: "https://verbalizacx.com/",
    //   image: "/projects/verbalizapp.png",
    // },
    {
      date: "2023 Jan - Apr",
      title: "MentorGo.",
      description:
        "O MentorGo facilita a gestão do desenvolvimento individual de alunos, oferecendo recursos personalizados como criação de desafios, artigos, salas e cadastro de cursos. Potencialize seus ensinamentos e conduza seus alunos a um patamar superior com a ajuda do MentorGo.",
      stacks: ["Next.js", "ChakraUi", "MongoDB"],
      href: "https://mentor-go.vercel.app/",
      image: "/projects/mentorgo.png",
    },
  ];

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
            gap="4.5rem"
            overflowY="scroll"
            w="610px"
            pb="1rem"

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
                stacks={project.stacks}
                href={project.href}
                image={project.image}
              />
            ))}
          </VStack>
        ) : null}
      </Flex>
    </>
  );
}

import { Box, HStack, Image, Link } from "@chakra-ui/react";
import React from "react";
import StackList from "./StackList";

interface ProjectsProps {
  date: string;
  title: string;
  description: string;
  stacks: string[];
  href: string;
  image: string;
}

export default function Projects({
  date,
  title,
  description,
  stacks,
  href,
  image,
}: ProjectsProps) {
  return (
    <Box
      w="100%"
      maxWidth="35.313rem"
      mt={["2.625rem", "2.625rem", "2.625rem", "0"]}
    >
      <Box fontSize="0.875rem" color="gray.300">
        {date}
      </Box>
      <Box
        mt="0.438rem"
        fontSize="1.125rem"
        fontWeight="700"
        className="gradient-text"
      >
        {title}
      </Box>
      <Box w="100%" mt="0.313rem" fontSize={["0.813rem", "0.875rem"]}>
        {description}
      </Box>

      <HStack>
        {stacks.map((stack, index) => (
          <React.Fragment key={index}>
            <StackList name={stack} />
            {index < stacks.length - 1 && (
              <Box
                w="0.375rem"
                h="0.375rem"
                borderRadius="9999px"
                bgColor="green.10"
              />
            )}
          </React.Fragment>
        ))}
      </HStack>

      <Link
        maxWidth="28.75rem"
        href={href}
        target="_blank"
        fontWeight="600"
        color="green.10"
        _hover={{ color: "green.20", transition: "color 0.6s ease-in-out" }}
      >
        View in Web
        <Image
          w="100%"
          src={image}
          alt={image}
          mt="1rem"
          _hover={{ transform: "scale(1.03)" }}
          transition="transform 0.2s ease-in-out"
        />
      </Link>
    </Box>
  );
}

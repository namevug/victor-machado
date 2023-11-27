import { Box, Flex, Text } from "@chakra-ui/react";

interface Stack {
  name: string;
}

export default function StackList({ name }: Stack) {
  return (
    <Flex
      mt="0.563rem"
      mb="0.563rem"
      fontSize="1.125rem"
      fontWeight="600"
      alignItems="center"
      gap="0.375rem"
    >
      <Box
        cursor="pointer"
        _hover={{ color: "green.10", transition: "color 0.3s ease-in-out" }}
      >
        {name}
      </Box>
    </Flex>
  );
}

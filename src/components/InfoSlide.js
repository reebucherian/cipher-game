import { Flex } from "@chakra-ui/react";
import React from "react";

function InfoSlide({ children }) {
  return (
    <Flex
      w="100%"
      align="center"
      justify="center"
      textAlign="center"
      flexDirection="column"
      bg="red"
    >
      {children}
    </Flex>
  );
}

export default InfoSlide;

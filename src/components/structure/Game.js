import { Flex } from "@chakra-ui/react";
import React from "react";
import Level1 from "../levels/Level1";

function Game() {
  return (
    <Flex
      width="100%"
      height="100vh"
      bg="gray.400"
      justify="center"
      align="center"
    >
      <Flex width="800px" height="500px" bg="white">
        <Level1 />
      </Flex>
    </Flex>
  );
}

export default Game;

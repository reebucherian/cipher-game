import { Flex } from "@chakra-ui/react";
import React from "react";
import Level3 from "../levels/Level3";

function Game() {
  return (
    <Flex
      width="100%"
      height="100vh"
      bg="black"
      justify="center"
      align="center"
    >
      <Flex width="800px" height="500px" bg="black">
        <Level3 />
      </Flex>
    </Flex>
  );
}

export default Game;

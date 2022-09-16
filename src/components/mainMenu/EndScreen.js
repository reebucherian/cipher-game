import { Flex, Text, Button, Heading, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function EndScreen({ goToNextLevel }) {
  return (
    <>
      <Flex
        width="100%"
        height="100%"
        justify="center"
        flexDirection="column"
        align="center"
        fontFamily="'Press Start 2P', cursive"
        color="white"
        borderWidth="5px"
      >
        <Heading fontFamily="'Press Start 2P', cursive">
          Mission Successful!
        </Heading>
        <Text p="5" fontSize="12px" align="center">
          You captured The Evil Cryptographer. That's some serious cryptography
          skills you have there!
        </Text>
        <Image src="./platformer-assets/victoryDance.gif" margin="5"></Image>
        <Button
          w="225px"
          bg="blue.300"
          onClick={() => {
            window.localStorage.clear();
            goToNextLevel(-1);
          }}
        >
          Main Menu
        </Button>
      </Flex>
    </>
  );
}

export default EndScreen;

import {
  Flex,
  Text,
  Button,
  Input,
  Heading,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Instructions from "../buttons/Instructions";

function Menu({ goToNextLevel }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        pos="relative"
      >
        <Heading fontFamily="'Press Start 2P', cursive">Cipher Game</Heading>
        <Button
          w="225px"
          m="10"
          bg="blue.300"
          onClick={() => {
            let currentLevel = window.localStorage.getItem("latestLevel");
            if (currentLevel && currentLevel != 0) {
              onOpen();
            } else {
              goToNextLevel();
            }
          }}
        >
          Start Game
        </Button>

        <Instructions></Instructions>

        <Image
          src="./platformer-assets/idleLeft.gif"
          pos="absolute"
          right="10"
          bottom="125"
        ></Image>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          w="650px"
          h="250px"
          bg="black"
          p="3"
          m="2"
          color="white"
          borderColor="white"
          borderWidth="5px"
          borderRadius="0"
          justify="center"
          align="center"
          fontFamily="'Press Start 2P', cursive"
        >
          <ModalHeader>
            Would you like to continue where you left off?
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              px="50px"
              mr={3}
              onClick={() => {
                goToNextLevel(window.localStorage.getItem("latestLevel"));
              }}
              fontSize="xs"
            >
              Yes, continue
            </Button>
            <Button
              colorScheme="blue"
              px="50px"
              onClick={() => {
                goToNextLevel();
              }}
              fontSize="xs"
            >
              No, restart
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Menu;

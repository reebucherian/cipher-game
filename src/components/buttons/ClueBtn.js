import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export default function ClueBtn({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {" "}
      <Button
        bg="blue.300"
        borderRadius="50%"
        width="40px"
        height="40px"
        p="0"
        alignSelf="flex-end"
        margin="5"
        pos="absolute"
        top="5px"
        onClick={onOpen}
      >
        ?
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          bg="black"
          w="350px"
          h="200px"
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
          <ModalHeader>Clue</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="center"> {children}</ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

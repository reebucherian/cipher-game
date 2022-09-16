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

export default function InfoBtn({ children, title }) {
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
        margin="5"
        alignSelf="flex-start"
        left="0"
        pos="absolute"
        top="5px"
        onClick={onOpen}
      >
        i
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          bg="black"
          minWidth="800px"
          h="500px"
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
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            overflowY="scroll"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
              },
              "&::-webkit-scrollbar-track": {
                width: "15px",
                background: "black",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "white",
                borderRadius: "24px",
              },
            }}
          >
            {" "}
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

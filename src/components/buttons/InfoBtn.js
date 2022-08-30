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

export default function InfoBtn({ children }) {
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
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody> {children}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Select
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

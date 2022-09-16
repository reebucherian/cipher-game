import {
  Button,
  Modal,
  Text,
  Image,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import React from "react";

export default function Instructions() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {" "}
      <Button Button w="225px" bg="blue.300" onClick={onOpen}>
        Instructions
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
          <ModalHeader>Instructions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="12px" textAlign="left">
              The Evil Cryptographer has escaped from prison. We have located
              him to his evil lair. You're mission is to infiltrate his lair and
              capture him.
            </Text>
            <Text fontSize="12px" textAlign="left" marginTop="5">
              This will not be easy. You will face obstacles and enemies in each
              floor in his lair. To make things worse, he has protected the
              passageway to each floor with various ciphers.
            </Text>
            <Text fontSize="12px" textAlign="left" marginTop="5">
              Use the LEFT and RIGHT arrows to move and SPACEBAR to jump.
              Collect golden keys to get clues about the cipher you will face.
              Make sure you avoid any obstacles or you will take damage.
            </Text>
            <Flex marginTop="5" flexDirection="row">
              <Flex m="1" flexDirection="row" align="center">
                {" "}
                <Image src="./platformer-assets/leftArrow.png" h="75px" />
                <Text>Move Left</Text>
              </Flex>
              <Flex m="1" flexDirection="row" align="center">
                {" "}
                <Image src="./platformer-assets/rightArrow.png" h="75px" />
                <Text>Move Right</Text>
              </Flex>
              <Flex m="1" flexDirection="row" align="center">
                {" "}
                <Image src="./platformer-assets/spacebar.png" h="50px" />
                <Text>Jump</Text>
              </Flex>
            </Flex>
            <Text m="5" fontSize="20px">
              Good luck!
            </Text>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

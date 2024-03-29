import {
  Flex,
  Text,
  Button,
  Input,
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
import React, { useRef, useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import ClueBtn from "../buttons/ClueBtn";
import InfoBtn from "../buttons/InfoBtn";

function Level5({ goToNextLevel }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const [plaintext, setPlaintext] = useState("");
  const [levelComplete, setLevelComplete] = useState(false);
  const plaintextIndex = useRef(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selected, setSelected] = useState([]);

  const selectLetter = [
    "a a b c d e f g h i j k l m n o p q r s t u v w x y z ",
    "b b c d e f g h i j k l m n o p q r s t u v w x y z a",
    "c c d e f g h i j k l m n o p q r s t u v w x y z a b",
    "d d e f g h i j k l m n o p q r s t u v w x y z a b c",
    "e e f g h i j k l m n o p q r s t u v w x y z a b c d ",
    "f f g h i j k l m n o p q r s t u v w x y z a b c d e",
    "g g h i j k l m n o p q r s t u v w x y z a b c d e f",
    "h h i j k l m n o p q r s t u v w x y z a b c d e f g",
    "i i j k l m n o p q r s t u v w x y z a b c d e f g h",
    "j j k l m n o p q r s t u v w x y z a b c d e f g h i",
    "k k l m n o p q r s t u v w x y z a b c d e f g h i j",
    "l l m n o p q r s t u v w x y z a b c d e f g h i j k",
    "m m n o p q r s t u v w x y z a b c d e f g h i j k l",
    "n n o p q r s t u v w x y z a b c d e f g h i j k l m",
    "o o p q r s t u v w x y z a b c d e f g h i j k l m n",
    "p p q r s t u v w x y z a b c d e f g h i j k l m n o",
    "q q r s t u v w x y z a b c d e f g h i j k l m n o p",
    "r r s t u v w x y z a b c d e f g h i j k l m n o p q",
    "s s t u v w x y z a b c d e f g h i j k l m n o p q r",
    "t t u v w x y z a b c d e f g h i j k l m n o p q r s",
    "u u v w x y z a b c d e f g h i j k l m n o p q r s t",
    "v v w x y z a b c d e f g h i j k l m n o p q r s t u",
    "w w x y z a b c d e f g h i j k l m n o p q r s t u v",
    "x x y z a b c d e f g h i j k l m n o p q r s t u v w",
    "y y z a b c d e f g h i j k l m n o p q r s t u v w x",
    "z z a b c d e f g h i j k l m n o p q r s t u v w x y",
  ];

  const selectRow = (index) => {
    const copy = [...selected];
    copy.push(index);
    setSelected(copy);
  };

  const deselectRow = (index) => {
    const copy = [...selected];
    copy.splice(index, 1);
    setSelected(copy);
  };

  const addLetter = (letter) => {
    if (plaintextIndex.current > 5) return;

    const copy = [...plaintext];
    copy[plaintextIndex.current] = letter;
    plaintextIndex.current += 1;
    setPlaintext(copy);
  };

  const backspace = () => {
    if (plaintextIndex.current < 1) return;

    const copy = [...plaintext];
    if (
      copy[plaintextIndex.current] == null ||
      copy[plaintextIndex.current] == ""
    ) {
      plaintextIndex.current -= 1;
    }

    copy[plaintextIndex.current] = "";
    setPlaintext(copy);
  };

  useEffect(() => {
    if (plaintext == "BELLASO") {
      setLevelComplete(true);
    }
  }, [plaintext]);

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
        {/*Cipher section */}
        <Flex align="center">
          <Text>Cipher:</Text>
          <Flex
            w="250px"
            h="50px"
            p="3"
            m="2"
            borderColor="white"
            borderWidth="3px"
            justify="center"
            align="center"
          >
            XMYHIFK
          </Flex>
        </Flex>
        {/*Keyword section */}
        <Flex align="center">
          <Text>Keyword:</Text>
          <Input
            w="250px"
            h="50px"
            p="3"
            m="2"
            marginRight="6"
            borderColor="white"
            bg="white"
            textColor="black"
            borderRadius="0"
            textAlign="center"
            textTransform="uppercase"
            justify="center"
            align="center"
            variant="unstyled"
          ></Input>
        </Flex>
        {/* Alphabet map */}
        <Flex margin="4">
          {letters.map((letter) => {
            return (
              <Flex
                p="1"
                border="1px"
                fontSize="12"
                _hover={{ opacity: 0.7 }}
                cursor="pointer"
                onClick={() => {
                  setPlaintext(plaintext + letter);
                }}
              >
                {letter}
              </Flex>
            );
          })}
        </Flex>
        {/* Selectable Letter maps section */}
        <Flex
          flexDirection="column"
          width="650px"
          align="center"
          minHeight="100px"
          maxHeight="180px"
          overflowY="scroll"
          overflowX="hidden"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "15px",
              background: "black",
            },
            "&::-webkit-scrollbar-thumb": {
              background: selected.length > 5 ? "white" : "black",
              borderRadius: "24px",
            },
          }}
        >
          {selected.map((pickedPos) => {
            const pickedRow = selectLetter[pickedPos];
            return (
              <Flex margin="1" width="100%" pos="relative" justify="center">
                <Flex
                  p="1"
                  border="1px"
                  bg="white"
                  textColor="black"
                  fontSize="12"
                  marginRight="3"
                  pos="absolute"
                  left="0px"
                >
                  {pickedRow.replace(/\s/g, "").toUpperCase().split("")[0]}
                </Flex>
                {pickedRow
                  .replace(/\s/g, "")
                  .toUpperCase()
                  .substring(1)
                  .split("")
                  .map((letter) => {
                    return (
                      <Flex
                        p="1"
                        border="1px"
                        bg="white"
                        textColor="black"
                        fontSize="12"
                        marginRight=""
                      >
                        {letter}
                      </Flex>
                    );
                  })}
              </Flex>
            );
          })}
        </Flex>

        {/* Plaintext section */}
        <Flex align="center">
          <Text>Plaintext:</Text>
          <Flex>
            <Input
              w="250px"
              h="50px"
              p="3"
              m="2"
              borderColor="white"
              borderWidth="3px"
              borderRadius="0px"
              justify="center"
              textTransform="uppercase"
              textAlign="center"
              align="center"
              value={plaintext}
              onChange={(e) => {
                if (levelComplete) return;
                setPlaintext(e.target.value.toUpperCase());
              }}
            />
          </Flex>
        </Flex>
        <Button
          bg="blue.300"
          borderRadius="50%"
          width="40px"
          height="40px"
          p="0"
          alignSelf="flex-end"
          margin="5"
          pos="absolute"
          bottom="65px"
          onClick={onOpen}
        >
          A
        </Button>
        <ClueBtn>Keyword is 'WIN'</ClueBtn>
        <InfoBtn title="Vigenère Cipher">
          <Text fontSize="10px" textAlign="left">
            To encrypt a plaintext message using the Vigenère method, a keyword
            is selected and repeated to match the length of the plaintext, so
            that each letter of the plaintext has a direct mapping to a letter
            in the keyword. Each letter in the keyword presents a shifted
            alphabet which starts with that letter, as in the previous Caesar
            cipher levels, i.e. the letter ‘A’ in the keyword represents a shift
            of 0, the letter ‘B’ represents a right shift of 1 etc. Each
            plaintext letter is encrypted using the shift of the corresponding
            keyword letter. For example, the plaintext ‘apple’ with keyword
            ‘abc’, will give the key ‘abcab’ and ciphertext would be ‘aqrlf’.
          </Text>
          <AwesomeSlider className="slider">
            {/* slide 1 */}
            <Flex align="center">
              <Image
                src="./level-assets/vigcipher1.png"
                w="80%"
                h="100px"
                marginTop="5"
                border="2px solid white"
                objectFit="contain"
              />
              <Text w="80%" marginTop="4" fontSize="9px" textAlign="left">
                1.{")"} You are given the Cipher here. You have to decrypt it
                and find the Plaintext to go to the next level. The input box
                for the Keyword is below the Cipher. Type the keyword in and
                repeat it to match the length of the Cipher. For example, the
                keyword ‘KING’ is repeated to match the Cipher here.
              </Text>
            </Flex>

            {/* slide 2 */}
            <Flex align="center" p="0">
              <Image
                src="./level-assets/vigcipher2.png"
                w="80%"
                h="200px"
                marginTop="5"
                border="2px solid white"
                objectFit="contain"
              />
              <Text w="80%" marginTop="4" fontSize="9px" textAlign="left">
                2.{")"}Click on the ‘A’ button in the bottom right corner to
                view the Alphabet Map. Select the letters in the Keyword by
                clicking on the row where the letter is on the Alphabet Map. The
                selected letter rows will be highlighted in red. Once you have
                selected the letters, click the ‘Select’ button to exit.
              </Text>
            </Flex>
            {/* slide 3 */}
            <Flex align="center" p="0">
              <Image
                src="./level-assets/vigcipher3.png"
                w="80%"
                h="100px"
                marginTop="5"
                border="2px solid white"
                objectFit="contain"
              />
              <Text w="80%" marginTop="4" fontSize="9px" textAlign="left">
                3.{")"}Your selected letter maps with their shift will be shown
                in White tiles. Find the Cipher letter in the row of the
                corresponding Keyword letter. Map that position directly to the
                Black tile alphabet to get the Plaintext letter of that Cipher
                letter. You can click on the Black Plaintext letters to select
                the letter to go into the Plaintext input box or type it in
                using your keyboard. For example, ‘C’ the first letter of the
                Cipher, corresponds to ‘K’ of the Keyword ‘KING’, which maps to
                ‘S’ on the Plaintext letter map.
              </Text>
            </Flex>
          </AwesomeSlider>

          <Flex flexDirection="row"></Flex>
          <Flex flexDirection="column"></Flex>
        </InfoBtn>
        <Button
          visibility={levelComplete ? "visible" : "hidden"}
          bg="blue.300"
          alignSelf="flex-end"
          margin="5"
          pos="absolute"
          bottom={0}
          onClick={() => {
            goToNextLevel();
          }}
        >
          Continue
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent
          minHeight="450px"
          minWidth="700px"
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
          <ModalHeader>Alphabet Map</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody
            maxHeight="300px"
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
            {selectLetter.map((item, index) => {
              return (
                <Flex
                  _hover={{ opacity: 0.7, cursor: "pointer" }}
                  bg={selected.indexOf(index) !== -1 ? "red" : "black"}
                  onClick={() => {
                    const pos = selected.indexOf(index);
                    if (pos === -1) {
                      selectRow(index);
                    } else {
                      deselectRow(pos);
                    }
                  }}
                >
                  {/* Letter identifier */}
                  <Flex p="1" border="1px" fontSize="12" marginRight="15">
                    {item.replace(/\s/g, "").toUpperCase().split("")[0]}
                  </Flex>
                  {item
                    .replace(/\s/g, "")
                    .toUpperCase()
                    .substring(1)
                    .split("")
                    .map((letter) => {
                      return (
                        <Flex p="1" border="1px" fontSize="12" marginRight="">
                          {letter}
                        </Flex>
                      );
                    })}
                </Flex>
              );
            })}
          </ModalBody>

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

export default Level5;

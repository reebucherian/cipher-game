import { Flex, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

function Level1() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [shiftLetters, setShiftLetters] = useState(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  );
  const [shiftNumber, setShift] = useState(0);
  const [plaintext, setPlaintext] = useState(["", "", "", "", "", ""]);
  const plaintextIndex = useRef(0);

  const shiftLeft = () => {
    //if shiftNumber is less than 0, goes to 25 and works its way down
    setShift((shiftNumber - 1 < 0 ? 25 : shiftNumber - 1) % 26);
    const copy = [...shiftLetters];
    const firstLetter = copy.shift();
    copy.push(firstLetter);
    setShiftLetters(copy);
  };

  const shiftRight = () => {
    setShift((shiftNumber + 1) % 26);
    const copy = [...shiftLetters];
    const lastLetter = copy.pop();
    copy.unshift(lastLetter);
    setShiftLetters(copy);
  };

  const addLetter = (letter) => {
    if (plaintextIndex.current > 5) return;

    const copy = [...plaintext];
    copy[plaintextIndex.current] = letter;
    plaintextIndex.current += 1;
    setPlaintext(copy);
  };

  return (
    <Flex
      width="100%"
      height="100%"
      justify="center"
      flexDirection="column"
      align="center"
    >
      {/*Cipher section */}
      <Flex align="center">
        <Text>Cipher:</Text>
        <Flex>
          <Flex
            w="30px"
            h="50px"
            p="3"
            borderRadius="10px"
            bg="yellow"
            fontWeight="bold"
            m="2"
            justify="center"
            align="center"
          >
            G
          </Flex>
          <Flex
            w="30px"
            h="50px"
            p="3"
            borderRadius="10px"
            bg="yellow"
            fontWeight="bold"
            m="2"
            justify="center"
            align="center"
          >
            E
          </Flex>
          <Flex
            w="30px"
            h="50px"
            p="3"
            borderRadius="10px"
            bg="yellow"
            fontWeight="bold"
            m="2"
            justify="center"
            align="center"
          >
            I
          </Flex>
          <Flex
            w="30px"
            h="50px"
            p="3"
            borderRadius="10px"
            bg="yellow"
            fontWeight="bold"
            m="2"
            justify="center"
            align="center"
          >
            W
          </Flex>
          <Flex
            w="30px"
            h="50px"
            p="3"
            borderRadius="10px"
            bg="yellow"
            fontWeight="bold"
            m="2"
            justify="center"
            align="center"
          >
            E
          </Flex>
          <Flex
            w="30px"
            h="50px"
            p="3"
            borderRadius="10px"
            bg="yellow"
            fontWeight="bold"
            m="2"
            justify="center"
            align="center"
          >
            V
          </Flex>
        </Flex>
      </Flex>
      {/* Alphabet map */}
      <Flex margin="4">
        {letters.map((letter) => {
          return (
            <Flex bg="green.100" p="1" border="1px">
              {letter}
            </Flex>
          );
        })}
      </Flex>
      {/* Rotating Alphabet map */}
      <Flex margin="4">
        <Flex
          bg="red.100"
          p="1"
          border="1px"
          _hover={{ opacity: 0.7 }}
          cursor="pointer"
          onClick={shiftLeft}
        >
          {"<"}
        </Flex>
        {shiftLetters.map((letter) => {
          return (
            <Flex
              bg="blue.100"
              p="1"
              border="1px"
              _hover={{ opacity: 0.7 }}
              cursor="pointer"
              onClick={() => {
                addLetter(letter);
              }}
            >
              {letter}
            </Flex>
          );
        })}{" "}
        <Flex
          bg="red.100"
          p="1"
          border="1px"
          _hover={{ opacity: 0.7 }}
          cursor="pointer"
          onClick={shiftRight}
        >
          {">"}
        </Flex>
      </Flex>
      {/* Shift counter */}
      <Flex align="center" justify="center">
        <Text m="2">Shift</Text>
        <Text p="2" bg="pink" border="1px">
          {shiftNumber}
        </Text>
      </Flex>
      {/* Plaintext section */}
      <Flex align="center">
        <Text>Plaintext:</Text>
        <Flex>
          {plaintext.map((letter) => {
            return (
              <Flex
                w="30px"
                h="50px"
                p="3"
                borderRadius="10px"
                bg="yellow"
                fontWeight="bold"
                m="2"
                justify="center"
                align="center"
              >
                {letter}
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Level1;

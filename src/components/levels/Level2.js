import { Flex, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { CgBackspace } from "react-icons/cg";

function Level2() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [shiftLetters, setShiftLetters] = useState(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  );
  const [shiftNumber, setShift] = useState(0);
  const [plaintext, setPlaintext] = useState(["", "", "", ""]);
  const plaintextIndex = useRef(0);

  // shifing Alphabet map to once place left and decreasing Shift counter by 1
  const shiftLeft = () => {
    //if shiftNumber is less than 0, goes to 25 and works its way down
    setShift((shiftNumber - 1 < 0 ? 25 : shiftNumber - 1) % 26);
    const copy = [...shiftLetters];
    const firstLetter = copy.shift();
    copy.push(firstLetter);
    setShiftLetters(copy);
  };
  // shifing Alphabet map to once place right and increasing Shift counter by 1
  const shiftRight = () => {
    setShift((shiftNumber + 1) % 26);
    const copy = [...shiftLetters];
    const lastLetter = copy.pop();
    copy.unshift(lastLetter);
    setShiftLetters(copy);
  };

  const addLetter = (letter) => {
    if (plaintextIndex.current > 3) return;

    const copy = [...plaintext];
    copy[plaintextIndex.current] = letter;
    plaintextIndex.current += 1;
    setPlaintext(copy);

    if (plaintextIndex.current > 3 && copy.join("") === "PLAY") {
      alert("Congrats");
    }
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

  return (
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
      {/*Cipher section */}
      <Flex align="center">
        <Text>Cipher:</Text>
        <Flex>
          <Flex
            w="30px"
            h="50px"
            p="3"
            m="2"
            borderColor="white"
            borderWidth="3px"
            justify="center"
            align="center"
          >
            S
          </Flex>
          <Flex
            w="30px"
            h="50px"
            p="3"
            m="2"
            borderColor="white"
            borderWidth="3px"
            justify="center"
            align="center"
          >
            O
          </Flex>
          <Flex
            w="30px"
            h="50px"
            p="3"
            m="2"
            borderColor="white"
            borderWidth="3px"
            justify="center"
            align="center"
          >
            D
          </Flex>
          <Flex
            w="30px"
            h="50px"
            p="3"
            m="2"
            borderColor="white"
            borderWidth="3px"
            justify="center"
            align="center"
          >
            B
          </Flex>
        </Flex>
      </Flex>
      {/* Alphabet map */}
      <Flex margin="4">
        {letters.map((letter) => {
          return (
            <Flex p="1" border="1px">
              {letter}
            </Flex>
          );
        })}
      </Flex>
      {/* Rotating Alphabet map */}
      <Flex margin="4">
        <Flex
          bg="white"
          p="1"
          marginRight="2"
          border="1px"
          color="black"
          _hover={{ opacity: 0.7 }}
          cursor="pointer"
          onClick={shiftLeft}
        >
          {"<"}
        </Flex>
        {shiftLetters.map((letter) => {
          return (
            <Flex
              bg="white"
              p="1"
              border="1px"
              color="black"
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
          bg="white"
          p="1"
          marginLeft="2"
          border="1px"
          color="black"
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
        <Text p="2" border="1px">
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
                m="2"
                borderColor="white"
                borderWidth="3px"
                justify="center"
                align="center"
              >
                {letter}
              </Flex>
            );
          })}
          {/* Backspace button */}
          <Flex
            w="60px"
            h="50px"
            p="3"
            m="2"
            color="white"
            fontSize="4xl"
            _hover={{ opacity: 0.7 }}
            cursor="pointer"
            justify="center"
            align="center"
            onClick={() => {
              backspace();
            }}
          >
            <CgBackspace />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Level2;

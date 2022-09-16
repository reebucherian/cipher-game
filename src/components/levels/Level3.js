import { Flex, Text, Input, Button, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ClueBtn from "../buttons/ClueBtn";
import InfoBtn from "../buttons/InfoBtn";

function Level3({ goToNextLevel }) {
  const [isLocked, setIsLocked] = useState(false);
  const [plaintext, setPlaintext] = useState("");
  const [levelComplete, setLevelComplete] = useState(false);

  // Text boxes
  const [boxes, setBoxes] = useState({
    col0: ["", "", ""],
    col1: ["", "", ""],
    col2: ["", "", ""],
    col3: ["", "", ""],
  });

  // storing columns and refreshing them when they move
  const [columns, setColumns] = useState([0, 1, 2, 3]);
  console.log(columns);
  // making sure the Text changes as the column changes
  const updateBoxValue = (col, row, value) => {
    const copy = { ...boxes };
    const colCopy = [...copy["col" + col]];
    colCopy[row] = value.toUpperCase();
    copy["col" + col] = colCopy;
    setBoxes(copy);
  };

  // so columns snap to place when moved
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const copy = [...columns];
    const [removed] = copy.splice(result.source.index, 1);
    copy.splice(result.destination.index, 0, removed);

    setColumns(copy);
  };

  const unlockedInputs = (
    <Flex>
      {columns.map((item, i) => (
        <Flex
          w="50px"
          h="250px"
          m="2"
          borderColor="white"
          borderWidth="3px"
          justify="center"
          flexDirection="column"
        >
          <Text
            p="2"
            h="25%"
            width="100%"
            borderBottomWidth="4px"
            borderColor="white"
            textAlign="center"
            fontSize="3xl"
          >
            {columns[i]}
          </Text>
          <Input
            p="2"
            h="25%"
            width="100%"
            autoFocus={i == 0}
            borderBottomWidth="3px"
            borderColor="white"
            textAlign="center"
            fontSize="2xl"
            maxLength="1"
            variant="unstyled"
            textTransform="uppercase"
            defaultValue={boxes["col" + columns[i]][0]}
            onChange={(e) => {
              updateBoxValue(columns[i], 0, e.target.value);
            }}
          ></Input>
          <Input
            p="2"
            h="25%"
            width="100%"
            borderBottomWidth="3px"
            borderColor="white"
            textAlign="center"
            fontSize="2xl"
            maxLength="1"
            textTransform="uppercase"
            defaultValue={boxes["col" + columns[i]][1]}
            onChange={(e) => {
              updateBoxValue(columns[i], 1, e.target.value);
            }}
            variant="unstyled"
          ></Input>
          <Input
            p="2"
            h="25%"
            width="100%"
            borderColor="white"
            textAlign="center"
            fontSize="2xl"
            maxLength="1"
            textTransform="uppercase"
            defaultValue={boxes["col" + columns[i]][2]}
            onChange={(e) => {
              updateBoxValue(columns[i], 2, e.target.value);
            }}
            variant="unstyled"
          ></Input>
        </Flex>
      ))}
    </Flex>
  );

  useEffect(() => {
    if (plaintext == "OPENSESAME") {
      setLevelComplete(true);
    }
  }, [plaintext]);

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
          ES PEENA OSM
        </Flex>
      </Flex>

      {/* Column Key */}

      <Flex align="center">
        <Text>Key: </Text>
        {isLocked ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
              {(provided, snapshot) => (
                <Flex ref={provided.innerRef} {...provided.droppableProps}>
                  {columns.map((item, i) => (
                    <Draggable
                      key={"column" + i}
                      draggableId={"column" + i}
                      index={i}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Flex
                            w="50px"
                            h="250px"
                            m="2"
                            borderColor="white"
                            borderWidth="3px"
                            justify="center"
                            flexDirection="column"
                          >
                            <Text
                              p="2"
                              h="25%"
                              width="100%"
                              borderBottomWidth="4px"
                              borderColor="white"
                              textAlign="center"
                              fontSize="3xl"
                            >
                              {columns[i]}
                            </Text>
                            <Text
                              p="2"
                              h="25%"
                              width="100%"
                              borderBottomWidth="3px"
                              borderColor="white"
                              textAlign="center"
                              fontSize="2xl"
                              maxLength="1"
                              variant="unstyled"
                            >
                              {boxes["col" + columns[i]][0]}
                            </Text>
                            <Text
                              p="2"
                              h="25%"
                              width="100%"
                              borderBottomWidth="3px"
                              borderColor="white"
                              textAlign="center"
                              fontSize="2xl"
                              maxLength="1"
                              variant="unstyled"
                            >
                              {boxes["col" + columns[i]][1]}
                            </Text>
                            <Text
                              p="2"
                              h="25%"
                              width="100%"
                              borderColor="white"
                              textAlign="center"
                              fontSize="2xl"
                              maxLength="1"
                              variant="unstyled"
                            >
                              {boxes["col" + columns[i]][2]}
                            </Text>
                          </Flex>
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </Flex>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          unlockedInputs
        )}
        <Button
          ml="10"
          bg="blue.300"
          onClick={() => {
            setIsLocked(!isLocked);
          }}
        >
          {isLocked ? "Lock" : "unlock"}
        </Button>
      </Flex>

      {/* Plaintext section */}
      <Flex align="center">
        <Text>Plaintext:</Text>
        <Input
          w="250px"
          h="50px"
          p="3"
          m="2"
          borderColor="white"
          borderWidth="3px"
          justify="center"
          textTransform="uppercase"
          align="center"
          value={plaintext}
          onChange={(e) => {
            if (levelComplete) return;
            setPlaintext(e.target.value.toUpperCase());
          }}
        />
      </Flex>
      <ClueBtn>Key is '3102'</ClueBtn>
      <InfoBtn title="Column Cipher">
        <Text fontSize="10px" textAlign="left">
          To encrypt a plaintext message using this method, the plaintext is
          written out in rows for a particular column key, then each column is
          rearranged in increasing order and transpose each column to get the
          cipher text. For example, the plaintext ‘cipher’ for the column key
          201, you would write the letter ‘c’ in column 2, ‘I’ in column 0, ‘p’
          in column 1, then move to the next row to write ‘h’ in column 2 and so
          on. When rearranged in increasing order, column 0 will contain
          [‘i’,’e’], 1 would contain [‘p’,’r’] and 2 would contain [‘c’,’h’].
          Transposing these columns in order will give you ‘ieprch’ as the
          ciphertext.
        </Text>
        <AwesomeSlider className="slider">
          {/* slide 1 */}
          <Flex align="center">
            <Image
              src="./level-assets/colcipher1.png"
              w="80%"
              h="100px"
              marginTop="5"
              border="2px solid white"
              objectFit="contain"
            />
            <Text w="80%" marginTop="4" fontSize="9px" textAlign="left">
              1.{")"} You are given the Cipher here. You have to decrypt it and
              find the Plaintext to go to the next level.
            </Text>
          </Flex>

          {/* slide 2 */}
          <Flex align="center">
            <Image
              src="./level-assets/colcipher2.png"
              w="80%"
              h="100px"
              marginTop="5"
              border="2px solid white"
              objectFit="contain"
            />
            <Text w="80%" marginTop="4" fontSize="9px" textAlign="left">
              2.{")"}The columns are presented empty and in order below the
              Cipher. To input text into the boxes, click on them and type the
              letter using your keyboard.
            </Text>
          </Flex>
          {/* slide 3 */}
          <Flex align="center" p="0">
            <Image
              src="./level-assets/colcipher3.png"
              w="80%"
              h="100px"
              marginTop="5"
              border="2px solid white"
              objectFit="contain"
            />
            <Text w="80%" marginTop="4" fontSize="9px" textAlign="left">
              3.{")"}Input the cipher vertically into each column. Move onto the
              next column when each row for that column has been filled. If
              there are blank spaces in the Cipher, assign an empty box to
              represent the space.
            </Text>
          </Flex>
          {/* slide 4 */}
          <Flex w="80%" align="center">
            <Image
              src="./level-assets/colcipher4.png"
              w="80%"
              h="100px"
              marginTop="5"
              border="2px solid white"
              objectFit="contain"
            />
            <Text w="80%" marginTop="4" fontSize="9px" textAlign="left">
              4.{")"}To drag the columns into the position of Key, click on the
              ‘Unlock’ button and move until the columns are in the order of the
              Key. Read the rows to get the Plaintext.
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
  );
}

export default Level3;

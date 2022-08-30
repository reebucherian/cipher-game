import { Flex, Text, Input, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Level4({ goToNextLevel }) {
  const [isLocked, setIsLocked] = useState(false);
  const [plaintext, setPlaintext] = useState("");
  const [levelComplete, setLevelComplete] = useState(false);

  // Text boxes
  const [boxes, setBoxes] = useState({
    col0: ["", "", ""],
    col1: ["", "", ""],
    col2: ["", "", ""],
    col3: ["", "", ""],
    col4: ["", "", ""],
  });

  // storing columns and refreshing them when they move
  const [columns, setColumns] = useState([0, 1, 2, 3, 4]);
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
    if (plaintext == "LONGCIPHERTEXT") {
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
    >
      {/*Cipher section */}
      <Flex align="center">
        <Text>Cipher:</Text>
        <Flex
          w="300px"
          h="50px"
          p="3"
          m="2"
          borderColor="white"
          borderWidth="3px"
          justify="center"
          align="center"
        >
          NHXGETOPECR LIT
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
          w="300px"
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
        <Button
          visibility={levelComplete ? "visible" : "hidden"}
          bg="blue.300"
          onClick={() => {
            goToNextLevel();
          }}
        >
          Continue
        </Button>
      </Flex>
    </Flex>
  );
}

export default Level4;

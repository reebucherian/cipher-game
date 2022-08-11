import { Flex, Input, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Level3() {
  const [boxes, setBoxes] = useState({
    box1: "",
    box2: "",
    box3: "",
    box4: "",
    box5: "",
    box6: "",
    box7: "",
    box8: "",
    box9: "",
    box10: "",
    box11: "",
    box12: "",
  });
  const items = [
    // Column 0
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
        0
      </Text>
      <Input
        p="2"
        h="25%"
        width="100%"
        borderBottomWidth="3px"
        borderColor="white"
        textAlign="center"
        fontSize="2xl"
        maxLength="1"
        tabIndex={0}
        variant="unstyled"
        defaultValue={boxes.box1}
        onChange={(e) => {
          updateBoxValue("box1", e.target.value);
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
        tabIndex={1}
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
        tabIndex={2}
        variant="unstyled"
      ></Input>
    </Flex>,
    // Column 1
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
        1
      </Text>
      <Input
        p="2"
        h="25%"
        width="100%"
        borderBottomWidth="3px"
        borderColor="white"
        textAlign="center"
        fontSize="2xl"
        maxLength="1"
        tabIndex={3}
        variant="unstyled"
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
        tabIndex={4}
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
        tabIndex={5}
        variant="unstyled"
      ></Input>
    </Flex>,
    // Column 2
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
        2
      </Text>
      <Input
        p="2"
        h="25%"
        width="100%"
        borderBottomWidth="3px"
        borderColor="white"
        textAlign="center"
        fontSize="2xl"
        maxLength="1"
        tabIndex={6}
        variant="unstyled"
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
        tabIndex={7}
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
        tabIndex={8}
        variant="unstyled"
      ></Input>
    </Flex>,
    // Column 3
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
        3
      </Text>
      <Input
        p="2"
        h="25%"
        width="100%"
        borderBottomWidth="3px"
        borderColor="white"
        textAlign="center"
        fontSize="2xl"
        maxLength="1"
        tabIndex={9}
        variant="unstyled"
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
        tabIndex={10}
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
        tabIndex={11}
        variant="unstyled"
      ></Input>
    </Flex>,
  ];

  const [columns, setColumns] = useState([...items]);

  const updateBoxValue = (boxNum, value) => {
    const copy = { ...boxes };
    copy[boxNum] = value;
    console.log(copy);
    setBoxes(copy);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const copy = [...columns];
    const [removed] = copy.splice(result.source.index, 1);
    copy.splice(result.destination.index, 0, removed);
    setColumns(copy);
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
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided, snapshot) => (
              <Flex ref={provided.innerRef} {...provided.droppableProps}>
                {columns.map((item, index) => (
                  <Draggable
                    key={"column" + index}
                    draggableId={"column" + index}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </Flex>
            )}
          </Droppable>
        </DragDropContext>
      </Flex>

      {/* Plaintext section */}
      <Flex align="center">
        <Text>Plaintext:</Text>
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
          OPENSESAME
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Level3;

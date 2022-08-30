import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Level1 from "../levels/Level1";
import Level2 from "../levels/Level2";
import Level3 from "../levels/Level3";
import Level4 from "../levels/Level4";
import Level5 from "../levels/Level5";
import Platformer1 from "../levels/Platformer1";

function Game() {
  const [currentLevel, setCurrentLevel] = useState(11);
  const nextLevel = () => {
    setCurrentLevel(currentLevel + 1);
  };

  let level = <div>Level not found</div>;
  switch (currentLevel) {
    case 1:
      level = <Level1 goToNextLevel={nextLevel} />;
      break;
    case 2:
      level = <Level2 goToNextLevel={nextLevel} />;
      break;
    case 3:
      level = <Level3 goToNextLevel={nextLevel} />;
      break;
    case 4:
      level = <Level4 goToNextLevel={nextLevel} />;
      break;
    case 5:
      level = <Level5 goToNextLevel={nextLevel} />;
      break;
    case 11:
      level = <Platformer1 goToNextLevel={nextLevel} />;
    default:
      break;
  }

  return (
    <Flex
      width="100%"
      height="100vh"
      bg="black"
      justify="center"
      align="center"
    >
      <Flex width="800px" height="500px" bg="black">
        {level}
      </Flex>
    </Flex>
  );
}

export default Game;

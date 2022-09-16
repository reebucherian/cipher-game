import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Level1 from "../levels/Level1";
import Level2 from "../levels/Level2";
import Level3 from "../levels/Level3";
import Level4 from "../levels/Level4";
import Level5 from "../levels/Level5";
import Level6 from "../levels/Level6";
import EndScreen from "../mainMenu/EndScreen";
import Menu from "../mainMenu/Menu";
import Platformer1 from "../platformers/Platformer1";
import Platformer2 from "../platformers/Platformer2";
import Platformer3 from "../platformers/Platformer3";
import Platformer5 from "../platformers/Platformer5";
import Platformer6 from "../platformers/Platformer6";

function Game() {
  const [currentLevel, setCurrentLevel] = useState(-1);
  const nextLevel = (lvl) => {
    if (lvl) {
      setCurrentLevel(window.parseInt(lvl));
      console.log(lvl);
      return;
    }
    window.localStorage.setItem("latestLevel", currentLevel + 1);
    setCurrentLevel(currentLevel + 1);
  };

  let level = <div>Level not found</div>;
  switch (currentLevel) {
    case -1:
      level = <Menu goToNextLevel={nextLevel} />;
      break;
    case 0:
      level = <Platformer1 goToNextLevel={nextLevel} />;
      break;
    case 1:
      level = <Level1 goToNextLevel={nextLevel} />;
      break;
    case 2:
      level = <Platformer2 goToNextLevel={nextLevel} />;
      break;
    case 3:
      level = <Level2 goToNextLevel={nextLevel} />;
      break;
    case 4:
      level = <Platformer3 goToNextLevel={nextLevel} />;
      break;
    case 5:
      level = <Level3 goToNextLevel={nextLevel} />;
      break;
    case 6:
      level = <Platformer2 goToNextLevel={nextLevel} />;
      break;
    case 7:
      level = <Level4 goToNextLevel={nextLevel} />;
      break;
    case 8:
      level = <Platformer5 goToNextLevel={nextLevel} />;
      break;
    case 9:
      level = <Level5 goToNextLevel={nextLevel} />;
      break;
    case 10:
      level = <Platformer6 goToNextLevel={nextLevel} />;
      break;
    case 11:
      level = <Level6 goToNextLevel={nextLevel} />;
      break;
    case 12:
      level = <EndScreen goToNextLevel={nextLevel} />;
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

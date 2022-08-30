import { Flex } from "@chakra-ui/react";
import React from "react";
import Sketch from "react-p5";
import { Platform } from "../utils/gameObjects/Platform";
import { Player } from "../utils/gameObjects/Player";
import p5Types from "p5";

function Platformer1({ goToNextLevel }) {
  let player;
  const platforms = [];

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(790, 490).parent(canvasParentRef);
    p5.noStroke();
    player = new Player(20, 400);
  };

  const draw = (p5) => {
    p5.background(0);

    // platforms
    platforms.push(new Platform(0, 440, 790, 50));
    platforms.push(new Platform(0, 250, 600, 50));
    platforms.push(new Platform(0, 0, 10, 490));
    platforms.push(new Platform(780, 0, 10, 490));
    platforms.push(new Platform(250, 100, 600, 50));

    player.checkPlatforms(platforms);

    platforms.forEach((platform) => {
      platform.draw(p5);
      // platform.checkCollision(player);
    });

    // player
    player.draw(p5);

    if (p5.keyIsPressed && p5.keyCode === 32) {
      player.jump();
    }
  };

  const keyPressed = (p5) => {
    if (p5.keyCode === p5.LEFT_ARROW) {
      player.movingLeft = true;
      player.speedX = 4;
    }
    if (p5.keyCode === p5.RIGHT_ARROW) {
      player.movingRight = true;
      player.speedX = 4;
    }
  };

  const keyReleased = (p5) => {
    if (p5.keyCode === p5.LEFT_ARROW) {
      player.movingLeft = false;
      player.speedX = 0;
    }
    if (p5.keyCode === p5.RIGHT_ARROW) {
      player.movingRight = false;
      player.speedX = 0;
    }
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
      pos="relative"
    >
      <Sketch
        setup={setup}
        draw={draw}
        keyPressed={keyPressed}
        keyReleased={keyReleased}
      />
    </Flex>
  );
}

export default Platformer1;

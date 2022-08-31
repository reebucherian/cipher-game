import { Flex } from "@chakra-ui/react";
import React from "react";
import Sketch from "react-p5";
import { Platform } from "../utils/gameObjects/Platform";
import { Player } from "../utils/gameObjects/Player";
import p5Types from "p5";
import { Computer } from "../utils/gameObjects/computer";
import { Spikes } from "../utils/gameObjects/Spikes";
import { Key } from "../utils/gameObjects/Key";
import { Enemy } from "../utils/gameObjects/Enemy";
import { Laser } from "../utils/gameObjects/Laser";

function Platformer1({ goToNextLevel }) {
  let seconds = 0;
  let keyEndtime = 0;
  let player;
  let computer;
  let key;
  const enemies = [];
  const lasers = [];
  const spikes = [];
  const platforms = [];
  let nextLevel = false;
  let keyTouched = false;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(790, 490).parent(canvasParentRef);
    p5.disableFriendlyErrors = true;
    p5.noStroke();
    p5.imageMode(p5.CENTER);
    player = new Player(20, 400);
    computer = new Computer(p5, 750, 75);
    key = new Key(p5, 100, 100);

    platforms.push(new Platform(0, 440, 790, 50));
    platforms.push(new Platform(0, 250, 600, 50));
    platforms.push(new Platform(0, 0, 10, 490));
    platforms.push(new Platform(780, 0, 10, 490));
    platforms.push(new Platform(250, 100, 600, 50));
    platforms.push(new Platform(0, -40, 790, 50));

    spikes.push(new Spikes(p5, 395, 430));

    enemies.push(new Enemy(p5, 600, 420, 1, 100));

    lasers.push(new Laser(395, 10, 90, 2));
  };

  const draw = (p5) => {
    seconds = Math.floor(p5.millis() / 1000);

    if (nextLevel) {
      return;
    }

    p5.background(0);

    if (computer.checkCollision(p5, player)) {
      nextLevel = true;
      goToNextLevel();
      return;
    }

    computer.draw(p5);

    // platforms

    player.checkPlatforms(platforms);

    platforms.forEach((platform) => {
      platform.draw(p5);
    });

    //spikes

    spikes.forEach((spike) => {
      spike.draw(p5);
      spike.checkCollision(p5, player);
    });

    // key

    if (!keyTouched) {
      key.draw(p5);

      if (key.checkCollision(p5, player)) {
        keyTouched = true;
        keyEndtime = seconds + 3;
      }
    }

    if (keyTouched && seconds < keyEndtime) {
      p5.stroke(255);
      p5.strokeWeight(4);
      p5.fill(0);
      p5.rectMode(p5.CENTER);
      p5.rect(395, 245, 400, 200);
      p5.textSize(40);
      p5.fill(255);
      p5.noStroke();
      p5.textAlign(p5.CENTER);
      p5.text("The key is '4'", 395, 245);
      p5.rectMode(p5.CORNER);
    }

    // enemy

    enemies.forEach((enemy) => {
      enemy.draw(p5);
      enemy.checkCollision(p5, player);
    });

    // laser
    lasers.forEach((laser) => {
      laser.draw(p5, seconds);
      laser.checkCollision(player);
    });

    // player
    player.draw(p5);
  };

  const keyPressed = (p5) => {
    if (p5.keyCode === p5.LEFT_ARROW) {
      player.speedX = -4;
    }
    if (p5.keyCode === p5.RIGHT_ARROW) {
      player.speedX = 4;
    }
    if (p5.keyCode === 32) {
      player.jump();
    }
  };

  const keyReleased = (p5) => {
    if (p5.keyCode === p5.LEFT_ARROW) {
      player.speedX = 0;
    }
    if (p5.keyCode === p5.RIGHT_ARROW) {
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

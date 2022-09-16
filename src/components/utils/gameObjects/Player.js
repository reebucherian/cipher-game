export class Player {
  x = 15;
  y = 15;
  h = 70;
  w = 45;
  top = this.y;
  bottom = this.y + this.h;
  right = this.x + this.w;
  left = this.x;
  centerX = this.x + this.w / 2;
  centerY = this.y + this.h / 2;
  gravity = 0;
  jumpSpeed = -25;
  speedY = 0;
  speedX = 0;
  dy = 0;
  onGroundSpeed = 0;
  touching = [];
  isOnGround = true;
  health = 100;
  direction = "right";

  constructor(p5, startX, startY) {
    this.startX = startX;
    this.startY = startY;
    this.x = startX;
    this.y = startY;
    this.updatePlayerPos();
    this.idleRight = p5.loadImage("./platformer-assets/idleRight.gif");
    this.idleLeft = p5.loadImage("./platformer-assets/idleLeft.gif");
    this.runRight = p5.loadImage("./platformer-assets/runRight.gif");
    this.runLeft = p5.loadImage("./platformer-assets/runLeft.gif");
    this.jumpRight = p5.loadImage("./platformer-assets/jumpRight.gif");
    this.jumpLeft = p5.loadImage("./platformer-assets/jumpLeft.gif");
  }

  draw(p5) {
    // player
    if (this.touching.length === 0) {
      this.gravity = 0.98;
    }

    this.movePlayer();
    this.updatePlayerPos();

    // animations
    let currentImg = this.idleRight;

    if (this.speedX > 0) {
      this.direction = "right";
    } else if (this.speedX < 0) {
      this.direction = "left";
    }

    if (this.speedX != 0) {
      if (this.direction == "right") {
        currentImg = this.runRight;
      } else {
        currentImg = this.runLeft;
      }
    } else {
      if (this.direction == "right") {
        currentImg = this.idleRight;
      } else {
        currentImg = this.idleLeft;
      }
    }

    p5.imageMode(p5.CORNER);
    p5.tint(255);
    p5.image(currentImg, this.x, this.y, this.w, this.h);
    p5.imageMode(p5.CENTER);

    // health bar
    p5.fill(0);
    p5.stroke(255);
    p5.rect(20, 20, 100, 10);
    p5.fill(190, 0, 0);
    p5.noStroke();
    p5.rect(20, 20, this.health, 10);

    if (this.health <= 0) {
      this.health = 100;
      this.x = this.startX;
      this.y = this.startY;
    }
  }

  movePlayer() {
    this.x += this.speedX;

    this.y += this.speedY;
    this.speedY += this.gravity;
  }

  jump() {
    this.gravity = 0.98;
    this.speedY = this.jumpSpeed;
    this.isOnGround = false;
  }

  checkPlatforms(platforms) {
    this.touching = [];
    platforms.forEach((platform) => {
      if (platform.checkCollision(this)) {
        this.touching.push(platform);
      }
    });
  }

  checkCollisionPlatform(player) {
    if (
      player.bottom > this.y &&
      player.left > this.x &&
      player.right < this.w + this.x
    ) {
      player.speedY = 0;
      player.y = this.y - player.h;
    }
  }

  updatePlayerPos() {
    this.top = this.y;
    this.bottom = this.y + this.h;
    this.right = this.x + this.w;
    this.left = this.x;
    this.centerX = this.x + this.w / 2;
    this.centerY = this.y + this.h / 2;
  }
}

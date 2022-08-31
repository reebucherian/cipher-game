export class Enemy {
  constructor(p5, x, y, speed, bounds) {
    this.startX = x;
    this.startY = y;
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.speed = speed;
    this.bounds = bounds;
    this.direction = 1;
    this.enemyImgRight = p5.loadImage("./platformer-assets/enemyRight.gif");
    this.enemyImgLeft = p5.loadImage("./platformer-assets/enemyLeft.gif");
  }

  draw(p5) {
    this.moveEnemy();
    p5.fill(255, 255, 0);
    let currentImg = this.enemyImgLeft;
    if (this.direction == 1) {
      currentImg = this.enemyImgRight;
    } else {
      currentImg = this.enemyImgLeft;
    }
    p5.image(currentImg, this.x, this.y, this.w, this.h);

    console.log(this.direction);
  }

  moveEnemy() {
    if (this.x > this.bounds + this.startX) {
      this.speed *= -1;
      this.direction = -1;
    } else if (this.x < this.startX - this.bounds) {
      this.speed *= -1;
      this.direction = 1;
    }

    this.x += this.speed;
  }

  checkCollision(p5, player) {
    if (p5.dist(player.centerX, player.centerY, this.x, this.y) < 30) {
      player.health -= 2;
    }
  }
}

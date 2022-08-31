export class Computer {
  constructor(p5, x, y) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.compImg = p5.loadImage("./platformer-assets/computer.jpeg");
  }

  draw(p5) {
    p5.tint(255);
    p5.image(this.compImg, this.x, this.y, this.w, this.h);
  }

  checkCollision(p5, player) {
    if (p5.dist(player.centerX, player.centerY, this.x, this.y) < 30) {
      return true;
    }
  }
}

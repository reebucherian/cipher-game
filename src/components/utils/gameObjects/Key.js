export class Key {
  constructor(p5, x, y) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 20;
    this.keyImg = p5.loadImage("./platformer-assets/key.png");
  }

  draw(p5) {
    p5.tint(255, 255, 0);
    p5.image(this.keyImg, this.x, this.y, this.w, this.h);
  }

  checkCollision(p5, player) {
    if (p5.dist(player.centerX, player.centerY, this.x, this.y) < 30) {
      return true;
    }
  }
}

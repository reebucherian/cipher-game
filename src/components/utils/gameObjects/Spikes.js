export class Spikes {
  constructor(p5, x, y) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 20;
    this.spikeImg = p5.loadImage("./platformer-assets/spikes.png");
  }

  draw(p5) {
    p5.tint(200);
    p5.image(this.spikeImg, this.x, this.y, this.w, this.h);
  }

  checkCollision(p5, player) {
    if (p5.dist(player.centerX, player.centerY, this.x, this.y) < 30) {
      player.health -= 1;
    }
  }
}

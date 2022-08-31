export class Laser {
  prevOnTime = -1;

  constructor(x, y, h, delay) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = h;
    this.delay = delay;
    this.laserOn = true;
  }

  draw(p5, seconds) {
    if (seconds > this.prevOnTime && seconds % this.delay === 0) {
      this.laserOn = !this.laserOn;
      this.prevOnTime = seconds;
    }

    p5.fill(0, 0, 250);

    if (this.laserOn) {
      p5.rect(this.x + 20 - 7.5, this.y, 15, this.h);
    }

    p5.fill(180);
    p5.rect(this.x, this.y, this.w, 7);
  }

  checkCollision(player) {
    if (
      this.laserOn &&
      player.centerX >= this.x + 20 - 7.5 &&
      player.centerX <= this.x + 20 + 15 &&
      player.centerY >= this.y &&
      player.centerY <= this.y + this.h
    ) {
      player.health -= 5;
    }
  }
}

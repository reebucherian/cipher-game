export class Platform {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.left = this.x;
    this.right = this.x + this.w;
    this.bottom = this.y + this.h;
    this.top = this.y;
  }

  draw(p5) {
    p5.fill(255);
    p5.rect(this.x, this.y, this.w, this.h);
  }

  checkCollision(player) {
    // top colission
    if (
      player.centerX > this.left && // player is on the right of the left end of the platform
      player.centerX < this.right && // player is on the left side of the right end of the platform
      player.bottom < this.bottom && // if player is above the bototm of the platform
      player.bottom > this.top // player is about to sink in the platform
    ) {
      player.speedY = 0;
      player.gravity = 0;

      player.y = this.y - player.h;
      return true;
    }

    // bottom colission
    if (
      player.centerX > this.left && // player is on the right of the left end of the platform
      player.centerX < this.right && // player is on the left side of the right end of the platform
      player.top > this.top && // if player is below the top of the platform
      player.top < this.bottom // player is about to fly  into the bottom platform
    ) {
      player.speedY = 0;
      player.gravity = 0.98;

      player.y = this.bottom;
      //   alert("heyy stop!");
      return true;
    }

    // left side of the platgorm
    if (
      player.centerY < this.bottom &&
      player.centerY > this.top &&
      player.right < this.right &&
      player.right > this.left
    ) {
      player.speedX = 0;
      player.x = this.x - player.w;
      return true;
    }

    // right side of the platform
    if (
      player.centerY < this.bottom &&
      player.centerY > this.top &&
      player.left > this.left &&
      player.left < this.right
    ) {
      player.speedX = 0;
      player.x = this.right;
      return true;
    }
  }
}

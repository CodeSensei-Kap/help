class Player {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.playerImg = loadImage(".assets/FootballPlayer.png");
    }
    display() {
      if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) {
        this.angle += 1;
      }
  
      if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) {
        this.angle -= 1;
      }
  
  
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.playerImg, 0, -100, this.width, this.height);
      pop();
    }
  }
  
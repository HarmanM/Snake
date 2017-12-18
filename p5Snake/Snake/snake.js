function Snake() {
  this.x = 300;
  this.y = 300;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.update = function() {
    if (this.total === this.tail.length) {

      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }

    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;



  }

  this.eat = function() {
    if (abs(this.x - food.location.x) < 1 && (abs(this.y - food.location.y) < 1)) {
      return true;
    } else {
      return false;
    }
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var position = this.tail[i];
      var d = dist(this.x, this.y, position.x, position.y)

      if (d < 1 || this.y > 580 || this.y < 0 ||
        this.x > 580 || this.x < 0) {
        this.total = 0;
        this.tail = [];
        this.x = 300;
        this.y = 300;
        this.xspeed = 0;
        this.yspeed = 0;
        return true;
      }
    }
    if (this.y > 580 || this.y < 0 ||
      this.x > 580 || this.x < 0) {
      this.total = 0;
      this.tail = [];
      this.x = 300;
      this.y = 300;
      this.xspeed = 0;
      this.yspeed = 0;
      return true;
    }
  }


  this.show = function() {
    fill(153, 255, 0);
    for (var i = 0; i < this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }

    rect(this.x, this.y, scl, scl);

  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }
}

function Food() {
  this.location = createVector(floor(random(rows)), floor(random(cols)));
  this.location.mult(scl);

  this.newLocation = function() {
    this.location = createVector(floor(random(rows)), floor(random(cols)));
    this.location.mult(scl);

  }

  this.show = function() {
    fill(128, 0, 128);
    rect(this.location.x, this.location.y, scl, scl);

  }
}

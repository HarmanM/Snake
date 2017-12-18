var s;
var food;
var scl = 20;
var cols = 30;
var rows = 30;
var score = 0;
var bestScore = 0;


function setup() {
  createCanvas(600, 600);
  s = new Snake();
  food = new Food();
  frameRate(13);

}


function draw() {
  background(51);
  s.death();
  s.update();
  s.show();
  food.show();


  if (s.eat(food)) {
    food.newLocation();
    s.total++;
    score++;
    document.getElementById('score').innerHTML = "Score: " + score;

    if(bestScore < score) {
      bestScore++;
      document.getElementById('bestScore').innerHTML = "Best Score: " + bestScore;
    }
  }

  if (s.death()) {
    score = 0;
    document.getElementById('score').innerHTML = "Score: " + score;


  }

}

function keyPressed() {
  if (keyCode == UP_ARROW && s.yspeed != 1) {
    s.dir(0, -1);

  } else if (keyCode == DOWN_ARROW && s.yspeed != -1) {
    s.dir(0, 1);
  }
  else if (keyCode == LEFT_ARROW && s.xspeed != 1) {
    s.dir(-1, 0);
  }
  else if (keyCode == RIGHT_ARROW  && s.xspeed != -1) {
    s.dir(1, 0);
  }
}

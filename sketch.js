const button = document.getElementById("btn");
let c;

function setup() {
  c = createCanvas(windowWidth, windowHeight);
  background(0);
  noLoop();
  button.addEventListener("click", saveDrawing);
}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = 0; i < random(5000); i++) {
    fill(random(255), random(255), random(255));
    circle(windowWidth / random(windowWidth / 120), windowHeight / random(windowHeight / 120), random(100));
    noStroke();
  }
}

function saveDrawing() {
  console.log("Hii");
  saveCanvas(c, "myCanvas", "png");
}

let webCam;
let x = 0, r = 255, g = 255, b = 255;

function setup() {
  createCanvas(640,480);
  background(255);
  webCam = createCapture(VIDEO);
  webCam.size(width,height);
}

function draw() {
  webCam.loadPixels();
  // top left
  img = webCam.get(0, 0, width/2, height/2);
  img.filter(THRESHOLD)
  image(img, 0, 0)
  
  // top right
  img2 = webCam.get(320, 0,width/2,height/2);
  img2.filter(BLUR)
  image(img2, 320, 0)
  
  // bottom left
  img3 = webCam.get(0, 240, width/2, height/2);
  img3.filter(GRAY)
  image(img3, 0, 240)
  
  // bottom right
  img4 = webCam.get(320, 240, width/2, height/2);
  img4.filter(INVERT)
  image(img4, 320, 240)
  
  // center flower
  translate(320, 240);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(10, 25, 30, 80);
    fill(r, g, b, 127);
    rotate(PI / 5);
  }
}

function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}
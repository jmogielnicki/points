var img;

function setup() {
  createCanvas(700, 700);
  img = loadImage("assets/hawaii.jpg");
  pointSize = 40;
  counter = 1000;
  imageMode(CORNERS);
  noStroke();
  background(255);
  frameRate(100);
}

function draw() {
  // image(img, 0, 0)
  print(pointSize);
  counter=counter-1;
  
  if (counter == 0) {
      pointSize = pointSize-5;
      if (pointSize <6) {
        pointSize = 5;
      };
      counter = 1600-(Math.pow(pointSize,2));
    };

  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x, y);
  fill(pix[0], pix[1], pix[2], 100);
  ellipse(x, y, pointSize, pointSize);
}
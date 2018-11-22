// Initializing the variables
var cnvs;
var img;
var counter = 0;
var picNumber = 1;
var pointSize;
var maxPointSize;
var marginWidth;
var marginHeight;
var pointNum; 
var speedOrig = 1000;
var speed = 1000;
var aSlider;
var totalPicCount = 20;
var transparency;

// Using preload function because it runs before setup, 
// and we want image to lead before setup and draw
function preload() {


}

function setup() {
  cnvs = createCanvas(900, 680);
  cnvs.parent('container');
  imageMode(CORNERS);
  picNumber = floor(random(0,20));
  print(picNumber);
  img = loadImage("assets/images/family/" + String(picNumber) + ".jpg");
  pointSize = 200;
  noStroke();
  background(255);
  frameRate(100);
  maxPointSize = 90;
}

function draw() {
  if (counter < speed) {
    counter += 1;
    print(counter);
    // print(counter);
    // print(pointSize);
    pointSize = int(map(counter, 0, speed, maxPointSize, 2));
    pointNum = int(((width/pointSize)*(height/pointSize)))
    if (pointNum > 90000) {
      pointNum = 90000;
    }

    // print("pointNum:")
    // print(pointNum)

  // Figuring out how much space there is around image for use in placing elipses
    marginWidth = (width-img.width)/2;
    marginHeight = (height-img.height)/2;

    for (var i = 0; i < pointNum/100; i++) {
      var x = floor(random(img.width));
      var y = floor(random(img.height));
      var pix = img.get(x, y);
      print(pix);
      if (pix[0] === 0 && pix[3] === 0) {
        print("YEAH!")
        transparency = 0;
        counter = 0;

      } else {
        transparency = map(pointSize, 0, maxPointSize, 255, 75);
      }
      fill(pix[0], pix[1], pix[2], transparency);
      ellipse(x+marginWidth, y+marginHeight, pointSize, pointSize);
      print (ellipse);
    }
  } else {
    // Trying to stop the "Ispected Target Disconnected" error in chrome when clicking "save."  
    // Trying phantom drawing
    var x = floor(random(img.width));
    var y = floor(random(img.height));
    var pix = img.get(x, y);
    fill(pix[0], pix[1], pix[2], 0.1);
    ellipse(x, y, 1, 1);
    print("still going!");

  }


}

function incrementPic(num) {
    picNumber += num;
    if (picNumber < 1) {
      picNumber = totalPicCount;
    }
    if (picNumber > totalPicCount) {
      picNumber = 1;
    }
    background(255);
    img = loadImage(("assets/images/family/" + String(picNumber) + ".jpg"));
    pointSize = 90;
}

$(function () {
  $('#save').click(function () {
    saveCanvas('point_pic', 'png');
  });
  $('#next').click(function () {
    speed = speedOrig;
    counter = 0;
    incrementPic(1);
    maxPointSize = 90;
  });

  $('#back').click(function () {
    speed = speedOrig;
    counter = 0;
    incrementPic(-1);
    maxPointSize = 90;
  });

  $('#abstract').click(function () {
    counter = 0;
    incrementPic(0);
    speed = 400;
    maxPointSize = 90;
  });

  // $('#aSlider').value(function (value) {
  //   alert("test");
  // //   counter = 0;
  // //   incrementPic(1);
  // });

  // $(".sliderStuff").slider();

})

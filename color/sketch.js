// Classifier Variable
let classifier;
//model
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/N5MqF-Oe_/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

//let color
color1 = '🔴';
color2 = '⚪️';
color3 = '🟡';
color4 = '⚫️';
color5 = '🔵';

// Load the model
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

//set up
function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.size(640, 470);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  classifyVideo();
}

function draw() {
  background(0);
  // Draw video
  image(flippedVideo, 0, 0);

  // Draw label
  
  textSize(200);
  textAlign(CENTER);
  text(label, width / 2, height/2);
}

function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  
  if (results[0].label == 'phone'){
    label=color1;
    console.log ("hello, iPhone");}
    else if 
  (results[0].label == 'teapot'){
     label=color2;
    console.log("hello,teapot")
  }else if 
  (results[0].label == 'light'){
label=color3;
    console.log("hello,night light")
  }else if 
  (results[0].label == 'board'){
label=color4;
    console.log("hello,digital board")
  }else if 
  (results[0].label == 'recorder'){
label=color5;
    console.log("hello,recorder")
  }
  
  console.log(results[0].label);
  classifyVideo();
}
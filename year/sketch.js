// Classifier Variable
let classifier;
//model
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/N5MqF-Oe_/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "waiting...";

//let emoji
let year;


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
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text(label, width / 2, height - 16);
  text(year,width/2,height/2);
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
   year=2021;
    console.log ("hello, iPhone");}
    else if 
  (results[0].label == 'teapot'){
    year=2004;
    console.log("hello,teapot")
  }else if 
  (results[0].label == 'light'){
    year=2018;
    console.log("hello,night light")
  }else if 
  (results[0].label == 'board'){
    year=2013;
    console.log("hello,digital board")
  }else if 
  (results[0].label == 'recorder'){
    year=2011;
    console.log("hello,recorder")
  }
  
  console.log(results[0].label);
  classifyVideo();
}
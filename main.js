img = "";
status1 = "";
resultarr = [];
input = "";

function setup() {
    canvas = createCanvas(380, 300);
    canvas.position(450,230);
    video = createCapture(VIDEO);
    video.size(380,300);
    video.hide();
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input = document.getElementById("Object Text");
}
function preload() {
    img = loadImage('download.jpg');
}
function modelLoaded() {
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(video, gotResult);
}
function draw() {
    image(video, 0, 0, 380, 300);
}
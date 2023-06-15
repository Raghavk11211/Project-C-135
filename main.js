img = "";
status1 = "";
resultarr = [];
input = "";
objects = [];

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
function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function modelLoaded() {
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(video, gotResult);
}
function draw() {
    image(video, 0, 0, 380, 300);
    if(status1 != "") {
        objectDetector.detect(video, gotResult);
        if(objects.length > 0) {
            for (i = 0; i < objects.length; i++) {
               document.getElementById("status").innerHTML = "Status : Objects Detected";
               document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;

               fill("#FF0000");
               percent = floor(objects[i].confidence * 100);
               text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
               noFill();
               stroke("FF0000");
               rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
        }   else {
            document.getElementById("status").innerHTML = "Status : No Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : 0";
        }
    }
}
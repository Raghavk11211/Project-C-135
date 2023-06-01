img = "";
status1 = "";
resultarr = [];

function setup() {
    canvas = createCanvas(380, 300);
    canvas.position(450,230);
    video = createCapture(VIDEO);
    video.size(380,300);
    video.hide();
}
function draw() {
    image(video, 0, 0, 380, 300);
}
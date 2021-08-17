difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#05C3DD');
     document.getElementById("font_size").innerHTML = "Font Size of the text will be = " + difference + "px";
    fill('#0571dd');
    textSize(difference);
    text('Hello', 50, 200);

}

function modelloaded() {
    console.log("poseNet Is Initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].poseNet.leftWrist.x;
        rightWristX = results[0].poseNet.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+ leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}
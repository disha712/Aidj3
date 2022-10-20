var peter_pan="";
var harry_potter="";
var leftWristx=0;
var leftWristy=0;
var rightWristx=0;
var rightWristy=0;
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function modelLoaded(){
    console.log("Model Is Loaded");
}
function gotPoses(results){
if (results.length>0) {
    console.log(results);
    leftWristx=results[0].pose.leftWrist.x;
    leftWristy=results[0].pose.leftWrist.y;
    console.log("Left wrist y= "+leftWristy+"     Left wrist x= "+leftWristx);
    rightWristx=results[0].pose.rightWrist.x;
    rightWristy=results[0].pose.rightWrist.y;
    console.log("Right wrist y= "+rightWristy+"   Right wrist x= "+rightWristx);
}
}
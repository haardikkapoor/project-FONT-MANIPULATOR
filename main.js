noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
    canvas=createCanvas(500, 400);
    canvas.position(1200, 250)
    

    video=createCapture(VIDEO);
    video.size(500,400)
    video.position(100,250)


    model = ml5.poseNet(video, modelLoaded);
    model.on('pose', gotPoses)
}

function modelLoaded()
{
  console.log("fact- who will see these all information will the user????")
}

function draw()
{
  background('#33FFF8');
  document.getElementById('size').innerHTML="SIZE OF THE SQUARE IS :"+difference + "px";
  fill('#ffff00');
  textSize(difference);
  text("HAARDIK",50, 400);
} 

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX+" noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor (leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + "difference =" +difference);

  }
}

function setup()
{
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objcts";
}

function modelLoaded()
{
  console.log("modelLoaded");
  status=true;
  objectDetector.detect(img,gotResult);
}

function gotResult(error, results)
{
  if(error)
  {
    console.log(error);
  }
  console.log(results);
}
img="";
status="";
function preload()
{
  img=loadImage("dog_cat.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420);

    fill("#05ffbc");
    text("dog", 65, 50);
    noFill();
    stroke("#05ffbc");
    rect(60, 40, 250, 350);

     fill("#45erf6");
    text("cat", 310, 85);
    noFill();
    stroke("#45erf6");
    rect(300, 70, 250, 350);
}
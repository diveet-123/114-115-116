nose_x=0;
nose_y=0;

function preload()
{
    must=loadImage('https://i.postimg.cc/3rLnhCtP/image.png')
}

function setup()
{
    canvas=createCanvas(300 , 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300 , 300)
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose",gotResults);
}

function draw()
{
    image(video , 0 , 0 , 300 , 300)
    image(must,nose_x,nose_y,30,30)
}

function modelLoaded()
{
    console.log("poseNet is Initialized");
}

function gotResults(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = ", results[0].pose.nose.x);
        console.log("nose y = ", results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x -12;
        nose_y=results[0].pose.nose.y +5;
    }
}

function take_snapshot()
{
    save('Snapshot.png');
}
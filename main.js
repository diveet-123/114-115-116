function preLoad()
{
}

function setup()
{
    canvas=createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose",gotResults);
}

function draw()
{
    image(video , 0 , 0 , 300 , 300)
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
    }
}

function take_snapshot()
{
    save('taked_snapshot.png')
}
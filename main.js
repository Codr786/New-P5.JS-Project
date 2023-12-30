function preload(){
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(70,200);
    video= createCapture(VIDEO);
    video.hide();

}
function draw(){
    image(video,100,80,300,250);
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);
    stroke(0,0,150);
    fill(0,0,200);
    rect(63,27,375,25);
    rect(63,347,375,25);
    rect(27,63,25,275);
    rect(448,63,25,275);
    stroke(200,190,0);
    fill(0,0,0);
}

function take_snapshot(){
    save('your_pic.png')
}



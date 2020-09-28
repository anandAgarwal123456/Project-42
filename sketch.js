var hr,min,sc;
var scAngle,minAngle,hrAngle;

function setup() {
  createCanvas(800,400);

 
}

function draw() {
  background("black");  

  translate(200,200);
  rotate(-90);

  hr= hour();
  min= minute();
  sc= second();

  scAngle= map(sc,0,60,0,360);
  minAngle= map(min,0,60,0,360);
  hrAngle= map(hr,0,60,0,360);

  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0, 0, 300, 300, 0,scAngle);

  strokeWeight(10);
  noFill();
  stroke(0,255,0);
  arc(0, 0, 280, 280, 0,minAngle);

  strokeWeight(10);
  noFill();
  stroke(0,0,255);
  arc(0, 0, 260, 260, 0,hrAngle);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(6);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(8);
  line(0,0,55,0);
  pop();
  

  drawSprites();
}
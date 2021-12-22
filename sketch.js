
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, bgImg, standImg, playerImg;
var canvas, stand, ground;
var player = 0;
var angle;

function preload() {
  bgImg = loadImage("./assets/bg.jpg");
  standImg = loadImage("./assets/Pillar.png");
}

function setup() {
  createCanvas(1500,700);

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  stand = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, stand);

  player = new Player(160, 300, 150, 155, angle);

}


function draw() 
{
  background(51);
  image(bgImg,0,0,width,height);
  Engine.update(engine);
  
  push();
  translate(ground.position.x, ground.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, width * 2, 1);
  pop();

  push();
  translate(stand.position.x, stand.position.y);
  rotate(stand.angle);
  imageMode(CENTER);
  image(standImg, 25, 90, 160, 250);
  pop();

  player.display();

}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//declare variables
var ground, stand1, stand2;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15;
var block16;
var block17,block18,block19,block20,block21;
var block22,block23,block24;
var block25;
var polygon, polygonImg;
var slingShot;
var gameState = "onSling";

function preload()
{
	//add images
	polygonImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,590,1200,20);

	stand1 = new Ground(600,400,260,16);
	stand2 = new Ground(1000,230,200,16);

	//bottom row
	block1 = new Block(600,372,30,40);
	block2 = new Block(570,372,30,40);
	block3 = new Block(630,372,30,40);
	block4 = new Block(540,372,30,40);
	block5 = new Block(660,372,30,40);
	block6 = new Block(510,372,30,40);
	block7 = new Block(690,372,30,40);

	//third row
	block8 = new Block(600,332,30,40);
	block9 = new Block(570,332,30,40);
	block10 = new Block(630,332,30,40);
	block11 = new Block(540,332,30,40);
	block12 = new Block(660,332,30,40);

	//second row
	block13 = new Block(600,292,30,40);
	block14 = new Block(570,292,30,40);
	block15 = new Block(630,292,30,40);

	//top block
	block16 = new Block(600,252,30,40);

	//bottom row
	block17 = new Block(1000,202,30,40);
	block18 = new Block(970,202,30,40);
	block19 = new Block(1030,202,30,40);
	block20 = new Block(940,202,30,40);
	block21 = new Block(1060,202,30,40);

	//middle row
	block22 = new Block(1000,162,30,40);
	block23 = new Block(970,162,30,40);
	block24 = new Block(1030,162,30,40);

	//top block
	block25 = new Block(1000,122,30,40);

	var options = {
		restitution : 0.5,
		friction : 1,
		density : 1.2
	}
	polygon = Bodies.circle(200,300,25,options);
	World.add(world,polygon);

	slingShot = new SlingShot(this.polygon,{x:200,y:300});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("#7fc3c0");

  Engine.update(engine);

  fill(0);
  textSize(24);
  text("Press Space For Another Chance To Play!",200,50);

  keyPressed();
  
  ground.display();

  stand1.display();
  stand2.display();

  fill("#1e3d59");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("#f5f0e1");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  fill("#ff6e40");
  block13.display();
  block14.display();
  block15.display();

  fill("#ffc13b");
  block16.display();


  fill("#3a6b35");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill("#cbd18f");
  block22.display();
  block23.display();
  block24.display();

  fill("#e3b448");
  block25.display();
	
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,55,55);

  slingShot.display();

  drawSprites();

}

function mouseDragged(){
	if(gameState !== "launched"){
		Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
	}
}

function mouseReleased(){
	slingShot.fly();
	gameState = "launched";
}

function keyPressed(){
	if(keyDown("space")){
		Matter.Body.setPosition(this.polygon,{x:200,y:300});
		slingShot.attach(this.polygon);
		gameState = "onSling";
	}
}

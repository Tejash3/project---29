var dustbinObj;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
  rectMode(CENTER);
	createCanvas(1200, 600);  
  
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,570,1200,20);
  ball=new  Ball (80,450,25,20);
  floor=new Floor(940,407,300,40);
  slingshot = new Slingshot(ball.body,{x:150, y:200});
  box1=new Box (900,370,40,50);
  box2=new Box (900,370,40,50);
  box3=new Box (900,370,40,50);
  box4=new Box (900,370,40,50);
  box5=new Box (1000,370,40,50);
  box6=new Box (1000,370,40,50);
  box7=new Box1 (875,310,40,50);
  box8=new Box1(916,310,40,50);
  box9=new Box1(958,310,40,50);
  box10=new Box1(1000,310,40,50);
  box11=new Box2(916,260,40,50);
  box12=new Box2(960,260,40,50);




	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("gray")
  Engine.update(engine);
  slingshot.display();
  ground.display();
  ball.display();
  floor.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  
  drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY})
}


function mouseReleased(){
  slingshot.fly()
}

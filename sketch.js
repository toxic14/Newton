const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5,block1,chain1;

function setup() {
	createCanvas(600, 500);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	block1 = new Block(300,100,300,30);
	World.add(world,block1.body)

	bob1 = new Bob(250,300);
	bob2 = new Bob(300,300);
	bob3 = new Bob(350,300);
	bob4 = new Bob(400,300);
	bob5 = new Bob(450,300);

	chain1 = new Line(bob1.body,block1.body,-100,0);
	chain2 = new Line(bob2.body,block1.body,-50,0);
	chain3 = new Line(bob3.body,block1.body, 0,0);
	chain4 = new Line(bob4.body,block1.body, 50,0);
	chain5 = new Line(bob5.body,block1.body, 100,0);
  
}

function draw() {
  Engine.update(engine);
  background(225)
  textFont("georgia");
  textSize(20)
  text("Please press Space-Bar to start",160,400);
  
  block1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 
}

function keyPressed(){
    if(keyCode===32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0})
	}
}
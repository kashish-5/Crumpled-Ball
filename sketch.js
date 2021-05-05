
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var boxLeftBody,boxBottomBody,boxRightBody;
var boxPosition;
var boxY;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here,.
	paper=new Paper(100,200,10);
	ground=new Ground(width/2,670,width,20);
	
	


	//Engine.run(engine);
  
}


function draw() {

  Engine.update(engine);

  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
 

 boxPosition=width/2-100
 boxY=610;

 var boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 boxleftSprite.shapeColor=color(255,0,0);

 boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 World.add(world, boxLeftBody);

 var boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 boxBase.shapeColor=color(255,0,0);

 boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 World.add(world, boxBottomBody);

 
 var boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 boxleftSprite.shapeColor=color(255,0,0);

 boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 World.add(world, boxRightBody);
 
drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:3.4,y:-3.4});
	}
}





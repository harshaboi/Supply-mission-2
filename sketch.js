var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1,wall2,wall3;
var wall1body,wall2body,wall3body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	wall1 = createSprite(width/2,groundSprite.x+250,200,20);
	wall1.shapeColor = "red";

	wall2 = createSprite(wall1.x-100,(wall1.y/1.25)+90,20,100);
	wall2.shapeColor = "red";

	wall3 = createSprite(wall1.x+100,(wall1.y/1.25)+90,20,100);
	wall3.shapeColor = "red";

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	rectMode(CENTER);

	wall1body = Bodies.rectangle(width/2, 650, 225, 45 , {isStatic:true} );
	World.add(world, wall1body);

	wall2body = Bodies.rectangle(width/2,height-35,125,45, {isStatic:true});
	World.add(world, wall2body);

	wall3body = Bodies.rectangle(width/2,height-35,125,45, {isStatic:true});
	World.add(world, wall3body);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  wall1body.x= wall1body.position.x 
  wall1body.y= wall1body.position.y 

  wall2body.x= wall2body.position.x 
  wall2body.y= wall2body.position.y

  wall3body.x= wall3body.position.x 
  wall3body.y= wall3body.position.y
  drawSprites();
 

  
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false); }
}




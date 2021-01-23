// Alias or renaming the modules -- Namespacing
//Matter.js is a 2d physics engine library
// It has modules Engine,Body,World,Bodies etc
//Matter.js Documentation :https://brm.io/matter-js/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  // JSON -- Java script object notation 
  //JSON is in key value pairs seperated by comma and enclosed in flower braces
  // JSON is use to change any default attibutes of the bodies.
  var ground_options ={
    isStatic: true
  }

  ground = Bodies.rectangle(400,380,800,20,ground_options);
  World.add(world, ground);
 // console.log(ground);
  
  var ball_options ={
    restitution:1
  }

  ball=Bodies.circle(400,50,15,ball_options);
  World.add(world,ball);
  console.log(ball);
}

function draw() {
  background("lightblue");  

  Engine.update(engine);
 // console.log(ground.position.x);
 // console.log(ground.position.y);
  
  rectMode(CENTER);
  
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15);
    
}
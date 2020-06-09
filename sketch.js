const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bird1,ground1,log1,log2,log3;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
   bird1= new Birds(50,340,"red");
 
    log1=new Log(480,340,"yellow",160,70,10)
    log2=new Log(570,300,"yellow",10,150,10)
    
    ground1= new ground(300,370,600,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    keyPressed();
   
   
    log2.display();
    log1.display();
    
    bird1.display();
    ground1.display();
    
    
   
}
function keyPressed(){
  if (keyCode=== UP_ARROW){
    Matter.Body.applyForce(bird1.body,bird1.body.position,{x:0.73,y:-0.317});
  }
}

const Events = Matter.Events;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var score = 0;
 
var particles = [];
var plinkos = [];
var division = [];

var divisionHeight=300;
var score =0;
var particle = null;
var gameState = "play";
var turn = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 100) {
     division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    
}
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("500",35,550);
  text("500",135,550);
  text("100",235,550);
  text("100",335,550);
  text("200",435,550);
  text("200",535,550);
  text("200",635,550);
  text("200",735,550);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

  for (var k = 0; k < division.length; k++) {
     
    division[k].display();
  }

 
}


function mousePressed(){
  if(gameState!=="end"){
    turn++
    score = score+200
    particles.push(new Particle(mouseX, 10,10));
  }
}

if (gameState==="end"){
  text("GAME OVER",400,400);

}

if (particle!=null){
  particle.display();

if (particle.body.position.y>600){
  if(particle.body.position.x<200){
    score = score + 500;
    
  }
}

if (particle.body.position.y>600){
  if(particle.body.position.x<600 && particle.body.position.x>200){
    score = score + 100;
    
  }
}

if (particle.body.position.y>600){
  if(particle.body.position.x<800 && particle.body.position.x>600){
    score = score + 200;
    
  }
}
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function preload()
{
    bgImage=loadImage("desert.png")
    boy=loadImage("Solider.png")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground(displayWidth/2,displayHeight-10,displayWidth, 20)
    alien1=new Alien(700,500,200,200)
    bullet1=new Bullet(300,300,50);
}

function draw(){
    background(bgImage);
    Engine.update(engine);
    image(boy,100,500,200,200)
    ground.display();
    alien1.display();
    bullet1.display();
    
} 

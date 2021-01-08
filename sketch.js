const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var background , blue , green , grey , orange ; 

function preload(){
    loadImage("images/background.png") ; 
    loadImage("images/blue car.png") ; 
    loadImage("images/green car.png") ; 
    loadImage("images/grey car.png") ; 
    loadImage("images/orange car.png") ; 
}


function setup(){
    var canvas = createCanvas(1200,900) ;
    engine = Engine.create() ; 
    world = engine.world ; 

    track = new track(600,height,1200,20) ;
    platform = new Ground(150, 305, 300, 170);

}

function draw(){
    Engine.update(engine) ; 
}
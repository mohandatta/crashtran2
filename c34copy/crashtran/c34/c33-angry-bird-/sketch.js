const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var crash_so;
var move_so;

var myEngine;
var myWorld;

var boggi1,boggi2,boggi3,boggi4,boggi5,boggi6; 

var chain1, chain2, chain3,chain4,chian5;

function preload() {
    bg=loadImage("images/bg.jpg");
    crash_so=loadSound("sound/train_crossing.mp3");
    move_so=loadSound("sound/train.mp3");

}

function setup(){
    var canvas = createCanvas(1200,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    boggi1 = new Boggie(50,170,50,50);
    boggi2 = new Boggie(150,170,50,50);
    boggi3 = new Boggie(250,170,50,50);
    boggi4 = new Boggie(350,170,50,50);
    boggi5 = new Boggie(450,170,50,50);
    boggi6 = new Boggie(550,170,50,50);

    rock = new Rock(1100,200,100,100); 


    ground = new Ground(600,height,1200,20);

    chain1 = new Chain(boggi1.body,boggi2.body);
    chain2 = new Chain(boggi2.body,boggi3.body);
    chain3 = new Chain(boggi3.body,boggi4.body);
    chain4 = new Chain(boggi4.body,boggi5.body);
    chain5 = new Chain(boggi5.body,boggi6.body);
    

}

function draw(){
    background(bg);
    

        
      
        
    Engine.update(myEngine);
    //strokeWeight(4);
   boggi1.show();
   boggi2.show();
   boggi3.show();
   boggi4.show();
   boggi5.show();
   boggi6.show();

   rock.show();

   chain1.show();
   chain2.show();
   chain3.show();
   chain4.show();
   chain5.show();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW ){
        Matter.Body.applyForce(boggi6.body,{x:boggi6.body.position.x,y:boggi6.body.position.y},{x:0.5,y:0});
        move_so.play();
       }



}



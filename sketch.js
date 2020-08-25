const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1, box2, box3, box4, box5;
var plank1, plank2, plank3, plank4;
var pig1, pig2;
var bird;

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,740,100,100);
    box2 = new Box(1150,740,100,100);
    box3 = new Box(900,610,100,100);
    box4 = new Box(1150,610,100,100);
    box5 = new Box(1025,480,100,100);
    plank1 = new Plank(1025,675,350,30,PI);
    plank2 = new Plank(1025,545,350,30,PI);
    plank3 = new Plank(935,480,150,20,-PI/3);
    plank4 = new Plank(1115,480,150,20,PI/3);
    pig1 = new Pig(1025,740);
    pig2 = new Pig(1025,610);
    bird = new Bird();
    ground = new Ground(width/2,height,width,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    plank1.display();
    plank2.display();
    plank3.display();
    plank4.display();
    pig1.display();
    pig2.display();
    bird.display();
    ground.display();

}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var holder;
var ball;
var stand1,stand2;
var ground;
var block1,block2,block3,block4,block5,block6;
var polygon_img,polygon;
var slingshot;
var score=0;

function preload(){
polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground(width/2,height,width,20);  

  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);



  block1 = new Block(300,275,20,30);
  block2 = new Block(325,275,20,30);
  block3 = new Block(350,275,20,30);
  block4 = new Block(375,275,20,30);
  block5 = new Block(400,275,20,30);
  block6 = new Block(425,275,20,30);
  block7 = new Block(450,275,20,30);

  block8 = new Block(325,250,20,30);
  block9 = new Block(350,250,20,30);
  block10 = new Block(375,250,20,30);
  block11 = new Block(400,250,20,30);
  block12 = new Block(425,250,20,30);

  block13 = new Block(350,225,20,30);
  block14 = new Block(375,225,20,30);
  block15 = new Block(400,225,20,30);

  block16 = new Block(375,200,20,30);

  block17 = new Block(650,175,20,30);
  block18 = new Block(675,175,20,30);
  block19 = new Block(700,175,20,30);
  block20 = new Block(725,175,20,30);
  block21 = new Block(750,175,20,30);

  block22 = new Block(675,150,20,30);
  block23 = new Block(700,150,20,30);
  block24 = new Block(725,150,20,30);

  block25 = new Block(700,125,20,30);


  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot=new Slingshot(this.polygon,{x:100,y:200});


}

function draw() {
  background(0);
  
  ground.display();

  stand1.display();
  stand2.display();
  block1.display();
  block1.score();

  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display(); 
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();

  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();

  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();

  block16.display();
  block16.score();

  block17.display();
  block17.score();
  block18.display();
  block18.score();
  block19.display();
  block19.score();
  block20.display();
  block20.score();
  block21.display();
  block21.score();

  block22.display();
  block22.score();
  block23.display();
  block23.score();
  block24.display();
  block24.score();

  block25.display();
  block25.score();

  fill("yellow")
  textSize(20);
  text("SCORE : "+score,750,40)
  textSize(20);
  text("Press Space To Play Again!",100 ,40);

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon);
    }
}
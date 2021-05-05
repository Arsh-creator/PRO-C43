var bg,bg2,form,system,code,security,bg3;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  bg2= loadImage("aladdin_cave2.jpg")
  bg3= loadImage("treasure.jpg")
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
 
  

  if(score === 3) {
    clear()
    background(bg3)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",10, 200);
  }

  drawSprites()
}

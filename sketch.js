
let fr = 24; //starting FPS



//In order to use the box which is a 3D Primitive, I had to add WEBGL function
function setup() {
  createCanvas(600, 600,WEBGL);
  
  frameRate(fr);
  noCursor();
  normalMaterial();
  
}

function draw() {
  
 
  
  
illuminati(mouseX,mouseY);

function illuminati(x,y){
  

  //For some reason the middle mouse button is what changes the background color and once it changes it doesn't revert back to it's original starting color
  
  if (mouseIsPressed) {
    background(255,100,118); 
    push();
    rotateY(100 * 2);
    rotateY(millis() / 500);
    rotateX(millis() / 500);
    rotateZ(millis() / 1000);
    fill(random(239), random(198), random(200), 200);
   

      } 
  
  //I had difficult figuring out how to randomly change the color of the background when pressed the left mouse button while keeping the rotating cubes
  
  
  else {
     push();
    rotateY(millis() / 500);
    rotateX(millis() / 200);
     rotateZ(millis() / 1000);
    rotateY(100); 
   
    fill(random(255), random(255), random(255), 300);
   
   
  }
  
  push();
  translate(x-width/2, y-width/2);
  rotateX(millis() / 500);
  rotateY(millis() / 1000);
  rotateZ(millis() / 1000);

  
  orbitControl();
  rotateY(2.5); 
  box(50);
  translate(100,125)
  box(75);
  translate(100,175)

  
  
}
}
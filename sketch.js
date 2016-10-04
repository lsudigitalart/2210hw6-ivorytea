var greg;
var ghost;

function preload()
{
  greg = loadImage("images/greg.gif");
  ghost = loadImage ("images/ghost.png");
}

function setup()
{
  createCanvas(600, 600);
  background (255, 64, 64);
  image(greg);
}

function draw()
{
      fill(random(0, 255));
      textSize(14);
      text("potatoes and molasses", mouseX, mouseY);

      if(mouseIsPressed)
      {
        image(ghost, mouseX, mouseY);
      }


}

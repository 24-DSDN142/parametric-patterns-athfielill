//parameters
let seedX = 2
let seedY = 4
let RedTriangleX = 20
let RedTriangleY = 70
let LemonArc = 0
let BackgroundStrokeWeight = 1
let fruit = 1
// let LemonColour = color(150, 227, 109)//green colour
// let CitrusVine = color(88, 192, 72)//green colour
// let VineStrokeColour = color(255)//white colour
// let RindColour = color(42, 156, 33)//colour of the lower semi-circle


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 100;
  pWallpaper.grid_settings.row_offset = 0;
}


function wallpaper_background() {
  background(212, 245, 255); //light blue green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  angleMode(RADIANS)


  // if function controls whether the image displays lemon or watermelon (1 or 2)
  if (fruit == 1) {
    DrawLemonSlice(100, 30);
  } else if (fruit == 2) {
    DrawWatermelon();
  }
}


function DrawLemonSlice(arc1x, arc1y) {
  let LemonColour = color(150, 227, 109)//yellow colour
  let CitrusVine = color(88, 192, 72)//green colour
  let VineStrokeColour = color(255)//white colour
  let RindColour = color(42, 156, 33)//colour of the lower semi-circle

  //vine 1
  fill(CitrusVine); //green vine pattern as background
  stroke(VineStrokeColour); //white
  ellipse(30, 15, 25); //green circle
  ellipse(30, 40, 25); //green circle
  ellipse(30, 65, 25); //green circle
  ellipse(30, 90, 25); //green circle

  //rectangles that create the vine pattern
  stroke(212, 245, 255)
  fill(212, 245, 255)//blue
  rect(30, 2, 15, 24)//blue rectangle covering circle
  rect(14, 27, 15, 24)//blue rectangle covering circle
  rect(30, 53, 15, 24)//blue rectangle covering circle
  rect(14, 78, 15, 24)//blue rectangle covering circle

  //vine 2
  fill(CitrusVine); //green
  stroke(VineStrokeColour); //white
  ellipse(170, 15, 25); //green circle
  ellipse(170, 40, 25); //green circle
  ellipse(170, 65, 25); //green circle
  ellipse(170, 90, 25); //green circle

  //rectangles that create the vine pattern
  stroke(212, 245, 255)
  fill(212, 245, 255)//blue
  rect(170, 2, 15, 24)//blue rectangle covering circle
  rect(154, 27, 15, 24)//blue rectangle covering circle
  rect(170, 53, 15, 24)//blue rectangle covering circle
  rect(154, 78, 15, 24)//blue rectangle covering circle

  //vine 3
  fill(CitrusVine); //green
  stroke(VineStrokeColour); //white
  ellipse(120, 15, 25); //green circle
  ellipse(120, 40, 25); //green circle
  ellipse(120, 65, 25); //green circle
  ellipse(120, 90, 25); //green circle

  //rectangles that create the vine pattern
  stroke(212, 245, 255)
  fill(212, 245, 255)//blue
  rect(120, 2, 15, 24)//blue rectangle covering circle
  rect(104, 27, 15, 24)//blue rectangle covering circle
  rect(120, 53, 15, 24)//blue rectangle covering circle
  rect(104, 78, 15, 24)//blue rectangle covering circle

  //vine 4
  fill(CitrusVine); //green
  stroke(VineStrokeColour); //white
  ellipse(70, 15, 25); //green circle
  ellipse(70, 40, 25); //green circle
  ellipse(70, 65, 25); //green circle
  ellipse(70, 90, 25); //green circle

  //rectangles that create the vine pattern
  stroke(212, 245, 255)
  fill(212, 245, 255)//blue
  rect(70, 2, 15, 24)//blue rectangle covering circle
  rect(54, 27, 15, 24)//blue rectangle covering circle
  rect(70, 53, 15, 24)//blue rectangle covering circle
  rect(54, 78, 15, 24)//blue rectangle covering circle

  //lemon or orange or lime
  strokeWeight(0); //no stroke
  fill(RindColour);//dark yellow
  arc(arc1x, arc1y, 100, 100, LemonArc, PI);//outer semi circle

  stroke(255); //white
  strokeWeight(2); //set strokeweight to 2
  fill(LemonColour);//colour of the lemon flesh
  arc(arc1x, arc1y, 90, 90, LemonArc, PI);//inner semi circle

  line(arc1x, arc1y, arc1x, arc1y + 45); //white line segment
  line(arc1x, arc1y, arc1x - 31, arc1y + 32); //white line segment
  line(arc1x, arc1y, arc1x + 31, arc1y + 31); //white line segment
  line(arc1x - 45, arc1y, arc1x + 45, arc1y); //white line segment

}

function DrawWatermelon() {

  strokeWeight(BackgroundStrokeWeight)
  stroke(131, 230, 225) //light blue
  line(10, 0, 0, 10) //background line
  line(20, 0, 0, 20)//background line
  line(30, 0, 0, 30)//background line
  line(40, 0, 0, 40)//background line
  line(50, 0, 0, 50)//background line
  line(60, 0, 0, 60)//background line
  line(70, 0, 0, 70)//background line
  line(80, 0, 0, 80)//background line
  line(90, 0, 0, 90)//background line
  line(100, 0, 0, 100)//background line
  line(110, 0, 0, 110)//background line
  line(120, 0, 0, 120)//background line
  line(130, 0, 0, 130)//background line
  line(140, 0, 0, 140)//background line
  line(150, 0, 0, 150)//background line
  line(160, 0, 0, 160)//background line
  line(170, 0, 0, 170)//background line
  line(180, 0, 0, 180)//background line
  line(190, 0, 0, 190)//background line
  line(200, 0, 0, 200)//background line
  line(210, 0, 0, 210)//background line
  line(220, 0, 0, 220)//background line
  line(230, 0, 0, 230)//background line
  line(240, 0, 0, 240)//background line
  line(250, 0, 0, 250)//background line
  line(260, 0, 0, 260)//background line
  line(270, 0, 0, 270)//background line
  line(280, 0, 0, 280)//background line
  line(290, 0, 0, 290)//background line
  line(300, 0, 0, 300)//background line


  //watermelon 1
  strokeWeight(1);
  stroke(235, 70, 89)// stroke red
  fill(235, 70, 89)// red
  triangle(RedTriangleX, RedTriangleY + 5, 60, 20, 95, 75); // red triangle

  stroke(34, 143, 63)
  fill(34, 143, 63); //green
  ellipse(RedTriangleX + 37, RedTriangleY + 10, 81, 15) // green rind ellipse

  stroke(255)
  fill(255); //white
  ellipse(RedTriangleX + 37, RedTriangleY + 7, 80, 12) // white rind ellipse

  stroke(235, 70, 89)
  fill(235, 70, 89); //red
  ellipse(RedTriangleX + 38, RedTriangleY + 4, 74, 10) // red rind ellipse

  stroke(5)
  fill(5); //black
  ellipse(RedTriangleX + 40, RedTriangleY - 35, seedX, seedY) // black seed
  ellipse(RedTriangleX + 37, RedTriangleY - 25, seedX, seedY) // black seed
  ellipse(RedTriangleX + 50, RedTriangleY - 20, seedX, seedY) // black seed
  ellipse(RedTriangleX + 32, RedTriangleY - 10, seedX, seedY) // black seed
  ellipse(RedTriangleX + 15, RedTriangleY - 3, seedX, seedY) // black seed
  ellipse(RedTriangleX + 59, RedTriangleY, seedX, seedY) // black seed
  ellipse(RedTriangleX + 40, RedTriangleY + 5, seedX, seedY) // black seed


  // watermelon 2
  stroke(235, 70, 89)//red
  fill(235, 70, 89)// red
  triangle(RedTriangleX + 170, RedTriangleY - 50, 110, 20, 150, 75); // red triangle 2

  stroke(34, 143, 63)//green
  fill(34, 143, 63); //green
  ellipse(RedTriangleX + 130, RedTriangleY - 50, 81, 19) // green rind ellipse

  stroke(255)//white
  fill(255); //white
  ellipse(RedTriangleX + 130, RedTriangleY - 47, 78, 16) // white rind ellipse

  stroke(235, 70, 89)//red
  fill(235, 70, 89); //red
  ellipse(RedTriangleX + 130, RedTriangleY - 45, 73, 13) // red rind ellipse

  stroke(5)//black
  fill(5); //black
  ellipse(RedTriangleX + 140, RedTriangleY - 39, seedX, seedY) // black seed
  ellipse(RedTriangleX + 107, RedTriangleY - 42, seedX, seedY) // black seed
  ellipse(RedTriangleX + 140, RedTriangleY - 20, seedX, seedY) // black seed
  ellipse(RedTriangleX + 122, RedTriangleY - 37, seedX, seedY) // black seed
  ellipse(RedTriangleX + 120, RedTriangleY - 19, seedX, seedY) // black seed
  ellipse(RedTriangleX + 159, RedTriangleY - 42, seedX, seedY) // black seed
  ellipse(RedTriangleX + 130, RedTriangleY - 3, seedX, seedY) // black seed
}
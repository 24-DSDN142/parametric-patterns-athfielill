let seedX = 3
let seedY = 6
let RedTriangleX = 20
let RedTriangleY = 70
let LemonArc = 150
//let LemonColour = color(255, 255, 40)


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

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
  var fruit = 2
  if (fruit == 1) {
    DrawLemonSlice(100, 30);
  } else if (fruit == 2) {
    DrawWatermelon();
  }


}



function DrawLemonSlice(arc1x, arc1y) {
  let LemonColour = color(255, 140, 0)//orange colour

  fill(93, 186, 95); //green
  stroke(255); //white
  ellipse(20, 15, 25); //green circle
  ellipse(20, 40, 25); //green circle
  ellipse(20, 65, 25); //green circle
  ellipse(20, 90, 25); //green circle

  stroke(212, 245, 255)
  fill(212, 245, 255)//blue
  rect(20, 2, 15, 24)//blue rectanhgle covering top circle
  rect(4, 27, 15, 24)
  rect(20, 53, 15, 24)
  rect(4, 78, 15, 24)


  //
  strokeWeight(0); //no stroke
  fill(255, 173, 20);//dark yellow
  arc(arc1x, arc1y, 100, 100, LemonArc, PI);//outer semi circle

  stroke(255); // white
  strokeWeight(2); // set strokeweight to 2
  fill(LemonColour);//lighter yellow
  arc(arc1x, arc1y, 90, 90, LemonArc, PI);//inner semi circle

  line(arc1x, arc1y, arc1x, arc1y + 45); //white line segment
  line(arc1x, arc1y, arc1x - 31, arc1y + 32); //white line segment
  line(arc1x, arc1y, arc1x + 31, arc1y + 31); //white line segment
  line(arc1x - 45, arc1y, arc1x + 45, arc1y); //white line segment

}



function DrawWatermelon() {

  //watermelon 1
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
  stroke(235, 70, 89)
  fill(235, 70, 89)// red
  triangle(RedTriangleX + 170, RedTriangleY - 50, 110, 20, 150, 75); // red triangle 2

  stroke(34, 143, 63)
  fill(34, 143, 63); //green
  ellipse(RedTriangleX + 130, RedTriangleY - 50, 81, 15) // green rind ellipse

  stroke(255)
  fill(255); //white
  ellipse(RedTriangleX + 130, RedTriangleY - 47, 78, 12) // white rind ellipse

  stroke(235, 70, 89)
  fill(235, 70, 89); //red
  ellipse(RedTriangleX + 130, RedTriangleY - 45, 73, 10) // red rind ellipse

  stroke(5)
  fill(5); //black
  ellipse(RedTriangleX + 140, RedTriangleY - 39, seedX, seedY) // black seed
  ellipse(RedTriangleX + 107, RedTriangleY - 42, seedX, seedY) // black seed
  ellipse(RedTriangleX + 140, RedTriangleY - 20, seedX, seedY) // black seed
  ellipse(RedTriangleX + 122, RedTriangleY - 37, seedX, seedY) // black seed
  ellipse(RedTriangleX + 120, RedTriangleY - 19, seedX, seedY) // black seed
  ellipse(RedTriangleX + 159, RedTriangleY - 42, seedX, seedY) // black seed
  ellipse(RedTriangleX + 130, RedTriangleY - 3, seedX, seedY) // black seed



}
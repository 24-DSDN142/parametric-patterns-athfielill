//your parameter variables go here!
// let rect_width = 20;
// let rect_height = 20;


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
  var fruit = 1
  if (fruit == 1) {
    DrawLemonSlice(100, 20);
  } else if (fruit == 2) {
    DrawWatermelon();
  } else if (fruit == 3) {
    DrawFullLemon(10, 10);
  }


}





function DrawFullLemon(arc1x, arc1y) {


  strokeWeight(0);
  fill(255, 173, 20);//dark yellow
  arc(arc1x, arc1y, 100, 200, 20, PI);//outer semi circle

  stroke(255, 255, 255);
  strokeWeight(2);
  fill(255, 227, 89);//lighter yellow
  ellipse(arc1x, arc1y, 90, 80);

  line(arc1x, arc1y, arc1x, arc1y + 45);

  line(arc1x, arc1y, arc1x - 31, arc1y + 32);
  line(arc1x, arc1y, arc1x + 31, arc1y + 31);
  line(arc1x - 45, arc1y, arc1x + 45, arc1y);

}

function DrawLemonSlice(arc1x, arc1y) {



  strokeWeight(0);
  fill(255, 173, 20);//dark yellow
  arc(arc1x, arc1y, 100, 100, 0, PI);//outer semi circle

  stroke(255, 255, 255);
  strokeWeight(2);
  fill(255, 227, 89);//lighter yellow
  arc(arc1x, arc1y, 90, 90, 0, PI);//inner semi circle

  line(arc1x, arc1y, arc1x, arc1y + 45);

  line(arc1x, arc1y, arc1x - 31, arc1y + 32);
  line(arc1x, arc1y, arc1x + 31, arc1y + 31);
  line(arc1x - 45, arc1y, arc1x + 45, arc1y);

}


function DrawWatermelon() {

  let seedX = 3
  let seedY = 4

  //watermelon 1

  stroke(235, 70, 89)// stroke red
  fill(235, 70, 89)// red
  triangle(20, 75, 60, 20, 95, 75); // red triangle


  stroke(34, 143, 63)
  fill(34, 143, 63); //green
  ellipse(57, 80, 81, 15) // green rind ellipse


  stroke(255)
  fill(255); //white
  ellipse(57, 77, 80, 12) // white rind ellipse


  stroke(235, 70, 89)
  fill(235, 70, 89); //red
  ellipse(58, 74, 74, 10) // red rind ellipse

  stroke(5)
  fill(5); //black
  ellipse(60, 35, seedX, seedY) // black seed
  ellipse(47, 45, seedX, seedY) // black seed
  ellipse(70, 50, seedX, seedY) // black seed
  ellipse(52, 60, seedX, seedY) // black seed
  ellipse(35, 67, seedX, seedY) // black seed
  ellipse(79, 70, seedX, seedY) // black seed
  ellipse(60, 75, seedX, seedY) // black seed

  // watermelon 2

  stroke(235, 70, 89)
  fill(235, 70, 89)// red
  triangle(190, 20, 110, 20, 150, 75); // red triangle 2


  stroke(34, 143, 63)
  fill(34, 143, 63); //green
  ellipse(150, 20, 81, 15) // green rind ellipse


  stroke(255)
  fill(255); //white
  ellipse(150, 23, 78, 12) // white rind ellipse


  stroke(235, 70, 89)
  fill(235, 70, 89); //red
  ellipse(150, 25, 73, 10) // red rind ellipse

  stroke(5)
  fill(5); //black
  ellipse(160, 31, seedX, seedY) // black seed
  ellipse(127, 28, seedX, seedY) // black seed
  ellipse(160, 50, seedX, seedY) // black seed
  ellipse(142, 33, seedX, seedY) // black seed
  ellipse(140, 51, seedX, seedY) // black seed
  ellipse(179, 28, seedX, seedY) // black seed
  ellipse(150, 67, seedX, seedY) // black seed



}
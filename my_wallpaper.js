//your parameter variables go here!
let rect_width = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset = 0;
}

function wallpaper_background() {
  background(212, 245, 255); //light blue green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  angleMode(RADIANS)


  DrawLemonSlice(200 / 2, 200 / 2);




  // let circleX = 100;
  // let circleY = 100;
  // stroke(245, 228, 103);
  // fill(245, 228, 103);
  // ellipse(circleX, CircleY, 89, 89); // outer circle

  // stroke(255);//white rind of lemon
  // strokeWeight(4);
  // fill(245, 240, 103);//yellow
  // ellipse(circleX, CircleY, 75, 75); // small circle


  // strokeWeight(2);
  // stroke(255);//white
  // line(circleX - 38, CircleY, circleX + 37, CircleY);//horizontal white line
  // line(circleX, CircleY - 38, circleX, CircleY + 27);//vertical line
  // line(circleX - 25, CircleY - 25, circleX + 27, CircleY + 27);//diagonal line
  // line(circleX + 27, CircleY - 25, circleX - 25, CircleY + 27);//diagonal line




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

//your parameter variables go here!
let rect_width = 20;
let rect_height = 20;


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


  // DrawLemonSlice(200 / 2, 200 / 2);



  // let arc1x = 100
  // let arc1y = 100

  // strokeWeight(0);
  // fill(255, 173, 20);//dark yellow
  // arc(arc1x, arc1y, 100, 200, 20, PI);//outer semi circle

  // stroke(255, 255, 255);
  // strokeWeight(2);
  // fill(255, 227, 89);//lighter yellow
  // ellipse(100, 110, 90, 80);

  // line(arc1x, arc1y, arc1x, arc1y + 45);

  // line(arc1x, arc1y, arc1x - 31, arc1y + 32);
  // line(arc1x, arc1y, arc1x + 31, arc1y + 31);
  // line(arc1x - 45, arc1y, arc1x + 45, arc1y);


  fill(235, 70, 89)// red
  triangle(20, 75, 60, 20, 90, 75); // red triangle
  triangle(180, 20, 110, 20, 145, 75); // red triangle 2

  line()



}

// function DrawLemonSlice(arc1x, arc1y) {



//   strokeWeight(0);
//   fill(255, 173, 20);//dark yellow
//   arc(arc1x, arc1y, 100, 100, 0, PI);//outer semi circle

//   stroke(255, 255, 255);
//   strokeWeight(2);
//   fill(255, 227, 89);//lighter yellow
//   arc(arc1x, arc1y, 90, 90, 0, PI);//inner semi circle

//   line(arc1x, arc1y, arc1x, arc1y + 45);

//   line(arc1x, arc1y, arc1x - 31, arc1y + 32);
//   line(arc1x, arc1y, arc1x + 31, arc1y + 31);
//   line(arc1x - 45, arc1y, arc1x + 45, arc1y);

// }

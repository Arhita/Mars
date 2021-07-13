canvas = document.getElementById("my Canvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;

background_img = "mars.jpg";
rover_img = "rover.png";

rover_y = 10;
rover_x = 10;

function add(){
    background_image=new Image();
    background_image.onload=upload_img();
    background_image.src=background_img;

    rover_image=new Image();
    rover_image.onload=upload_img_r();
    rover_image.src=rover_img;
}

function upload_img(){
    ctx.drawImage(background_image, 0,0, canvas.width,canvas.height);
}

function upload_img_r(){
    ctx.drawImage(rover_image, rover_x,rover_y, rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
      up();
      console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
      }

      if(keyPressed == '37'){
        left();
        console.log("left");
      }

      if(keyPressed == '39'){
        right();
        console.log("right");
      }
}
var image=null;
var imageRed = null;
var imageRainbow = null;
var imageGreyscale = null;
var imageRedHue = null;
var imageTryMe = null;
var imgCanvas;
var imgnewCanvas;

function upload()
{
  var fileInput = document.getElementById("finput");
  image = new SimpleImage(fileInput);
  imageRed = new SimpleImage(fileInput);
  imageRedHue = new SimpleImage(fileInput);
  imageRainbow = new SimpleImage(fileInput);
  imageGreyscale = new SimpleImage(fileInput);
  imageTryMe = new SimpleImage(fileInput);
  imgCanvas = document.getElementById("can");
  image.drawTo(imgCanvas);
  console.log("uploaded||")
}
 
function RedFilter()
 {
   for(var pixel of imageRed.values()){
     pixel.setRed(255);
   }
 imgnewCanvas = document.getElementById("newcan");
 imageRed.drawTo(imgnewCanvas);
}

function RedHue()
 {
   for(var pixel of imageRedHue.values()){
     var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
     if (avg < 128) {
      pixel.setRed(avg * 2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(avg * 2);
      pixel.setBlue(avg * 2);
    }
   }
 imgnewCanvas = document.getElementById("newcan");
 imageRedHue.drawTo(imgnewCanvas);
}

function RainbowFilter()
{
  var w = imageRainbow.getWidth();
  for(var pixel of imageRainbow.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(pixel.getX()<=w/7){
      if (avg < 128) {
        pixel.setRed(avg * 2);
        pixel.setGreen(0);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(avg * 2 - 255);
        pixel.setBlue(avg * 2 - 255);
      }
    }
    else if(pixel.getX()>w/7 && pixel.getX()<=(0+2*w/7)){
      if (avg < 128) {
        pixel.setRed(avg * 2);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(avg * 1.2 - 51);
        pixel.setBlue(avg * 2 - 255);
      }
    }
    else if(pixel.getX()>(0+2*w/7) && pixel.getX()<=(0+3*w/7)){
      if (avg < 128) {
        pixel.setRed(avg * 2);
        pixel.setGreen(avg * 2);
        pixel.setBlue(0);
      } else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(avg * 2 - 255);
      }
    }
    else if(pixel.getX()>(0+3*w/7) && pixel.getX()<=(0+4*w/7)){
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2 * avg);
        pixel.setBlue(0);
      } else {
        pixel.setRed(2 * avg -255);
        pixel.setGreen(255);
        pixel.setBlue(avg * 2 - 255);
      }
    }
    else if(pixel.getX()>(0+4*w/7) && pixel.getX()<=(0+5*w/7)){
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);
      } else {
        pixel.setRed(2 * avg - 255);
        pixel.setGreen(avg * 2 - 255);
        pixel.setBlue(255);
      }
    }
    else if(pixel.getX()>(0+5*w/7) && pixel.getX()<=(0+6*w/7)){
      if (avg < 128) {
        pixel.setRed(avg * 0.8);
        pixel.setGreen(0);
        pixel.setBlue(2 * avg);
      } else {
        pixel.setRed(1.2 * avg - 51);
        pixel.setGreen(avg * 2 - 255);
        pixel.setBlue(255);
      }
    }
    else{
      if (avg < 128) {
        pixel.setRed(avg * 1.6);
        pixel.setGreen(0);
        pixel.setBlue(1.6 * avg);
      } else {
        pixel.setRed(0.4 * avg + 153);
        pixel.setGreen(avg * 2 - 255);
        pixel.setBlue(avg * 0.4 + 153);
      }
    }
  }
  imgnewCanvas = document.getElementById("newcan");
  imageRainbow.drawTo(imgnewCanvas);
}

function GreyscaleFilter() 
{
  for (var pixel of imageGreyscale.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  imgnewCanvas = document.getElementById("newcan");
  imageGreyscale.drawTo(imgnewCanvas);
}

function Border(pixel)
{
  var pixelBorder = pixel.setRed(0);
  pixelBorder = pixel.setGreen(0);
  pixelBorder = pixel.setBlue(0);
  return(pixelBorder);
}

function TryMe()
{
  var w = imageTryMe.getWidth();
  var h = imageTryMe.getHeight();
  var t = w*0.05
  var x = (w-4*t)/3;
  var y = (h-3*t)/2;
  for (var pixel of imageTryMe.values()) {
    if (pixel.getY() < t || pixel.getY() >= h-t) 
    {
    var pixelBorder = pixel.setRed(0);
    pixelBorder = pixel.setGreen(0);
    pixelBorder = pixel.setBlue(0);
    
    }
    if (pixel.getX() < t || pixel.getX() >= w-t ) 
    {
    var pixelBorder = pixel.setRed(0);
    pixelBorder = pixel.setGreen(0);
    pixelBorder = pixel.setBlue(0);
    
    }
    if (pixel.getX() > x && pixel.getX() < x+t ) 
    {
    var pixelBorder = pixel.setRed(0);
    pixelBorder = pixel.setGreen(0);
    pixelBorder = pixel.setBlue(0);
      }
    if (pixel.getX() > 2*x+t && pixel.getX() < 2*x+2*t ) 
    {
    var pixelBorder = pixel.setRed(0);
    pixelBorder = pixel.setGreen(0);
    pixelBorder = pixel.setBlue(0);
    }
    if (pixel.getY() > y && pixel.getY() < y+t) 
    {
    var pixelBorder = pixel.setRed(0);
    pixelBorder = pixel.setGreen(0);
    pixelBorder = pixel.setBlue(0);
    }
  }
  imgnewCanvas = document.getElementById("newcan");
  imageTryMe.drawTo(imgnewCanvas);

}

function Reset()
{
  imgnewCanvas = document.getElementById("newcan");
  var ctx = imgnewCanvas.getContext('2d');
  ctx.clearRect(0, 0,  imgnewCanvas.width, imgnewCanvas.height);
}
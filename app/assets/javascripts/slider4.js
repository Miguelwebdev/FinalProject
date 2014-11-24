var y = 0;
var o = 0;
var v = 0;
var r = 0;
var s = 0;
var z = 0;

var path16 = new Array();
// LIST OF IMAGES
path16[0] = "/images/orleans1.jpg";
path16[1] = "/images/orleans2.jpg";
path16[2] = "/images/orleans3.jpg";

var path17 = new Array();

// LIST OF IMAGES3
path17[0] = "/images/hamlet1.jpg";
path17[1] = "/images/hamlet2.jpg";
path17[2] = "/images/hamlet3.jpg";


var path18 = new Array();

// LIST OF IMAGES5 LOS ANGELES
path18[0] = "/images/philadelpia1.jpg";
path18[1] = "/images/philadelpia2.jpg";
path18[2] = "/images/philadelpia3.jpg";

var path19 = new Array();

// LIST OF IMAGES TEIGH
path19[0] = "/images/esex1.jpg";
path19[1] = "/images/esex2.jpg";
path19[2] = "/images/esex3.jpg";

var path20 = new Array();

// LIST OF IMAGES PLASENCIA
path20[0] = "/images/mountain1.jpg";
path20[1] = "/images/mountain2.jpg";
path20[2] = "/images/mountain3.jpg";

var path21 = new Array();

// LIST OF IMAGES PLASENCIA
path21[0] = "/images/misuri1.jpg";
path21[1] = "/images/misuri2.jpg";
path21[2] = "/images/misuri3.jpg";

function swapImage16()
{
   document.slide16.src = path16[y];
   if(y < path16.length - 1) 
    y++; 

   else 
      y = 0;
      setTimeout("swapImage16()",3000);
}

function swapImage17()
{
   document.slide17.src = path17[o];
   if(o < path17.length - 1)
      o++;
   else 
      o = 0;
      setTimeout("swapImage17()",3000);
}

function swapImage18()
{
   document.slide18.src = path18[v];
   if(v < path18.length - 1)
         v++;
   else 
         v = 0;
         setTimeout("swapImage18()",3000);
}

function swapImage19()
{
   document.slide19.src = path19[r];
   if(r < path19.length - 1)
         r++;
   else 
         r = 0;
         setTimeout("swapImage19()",3000);
}

function swapImage20()
{
   document.slide20.src = path20[s];
   if(s < path20.length - 1)
         s++;
   else 
         s = 0;
         setTimeout("swapImage20()",3000);
}

function swapImage21()
{
   document.slide21.src = path21[z];
   if(z < path21.length - 1)
         z++;
   else 
         z = 0;
         setTimeout("swapImage21()",3000);
}

window.onload= function(){
  swapImage16();
  swapImage17();
  swapImage18();
  swapImage19();
  swapImage20();
  swapImage21();
}
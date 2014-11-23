var y = 0;
var o = 0;
var v = 0;
var r = 0;
var s = 0;
var z = 0;

var path10 = new Array();
// LIST OF IMAGES
path10[0] = "/images/gary1.jpg";
path10[1] = "/images/gary2.jpg";
path10[2] = "/images/gary3.jpg";

var path11 = new Array();

// LIST OF IMAGES3
path11[0] = "/images/liverpool1.jpg";
path11[1] = "/images/liverpool2.jpg";
path11[2] = "/images/liverpool3.jpg";


var path12 = new Array();

// LIST OF IMAGES5 LOS ANGELES
path12[0] = "/images/dublin1.jpg";
path12[1] = "/images/dublin2.jpg";
path12[2] = "/images/dublin3.jpg";

var path13 = new Array();

// LIST OF IMAGES TEIGH
path13[0] = "/images/stafford1.jpg";
path13[1] = "/images/stafford2.jpg";
path13[2] = "/images/stafford3.jpg";

var path14 = new Array();

// LIST OF IMAGES PLASENCIA
path14[0] = "/images/minne1.jpg";
path14[1] = "/images/minne2.jpg";
path14[2] = "/images/minne3.jpg";

var path15 = new Array();

// LIST OF IMAGES PLASENCIA
path15[0] = "/images/limerick1.jpg";
path15[1] = "/images/limerick2.jpg";
path15[2] = "/images/limerick3.jpg";

function swapImage10()
{
   document.slide10.src = path10[y];
   if(y < path10.length - 1) 
   	y++; 

   else 
   		y = 0;
   		setTimeout("swapImage10()",3000);
}

function swapImage11()
{
   document.slide11.src = path11[o];
   if(o < path11.length - 1)
   		o++;
   else 
   		o = 0;
   		setTimeout("swapImage11()",3000);
}

function swapImage12()
{
   document.slide12.src = path12[v];
   if(v < path12.length - 1)
         v++;
   else 
         v = 0;
         setTimeout("swapImage12()",3000);
}

function swapImage13()
{
   document.slide13.src = path13[r];
   if(r < path13.length - 1)
         r++;
   else 
         r = 0;
         setTimeout("swapImage13()",3000);
}

function swapImage14()
{
   document.slide14.src = path14[s];
   if(s < path14.length - 1)
         s++;
   else 
         s = 0;
         setTimeout("swapImage14()",3000);
}

function swapImage15()
{
   document.slide15.src = path15[z];
   if(z < path15.length - 1)
         z++;
   else 
         z = 0;
         setTimeout("swapImage15()",3000);
}

window.onload= function(){
	swapImage10();
	swapImage11();
	swapImage12();
	swapImage13();
	swapImage14();
   swapImage15();
}
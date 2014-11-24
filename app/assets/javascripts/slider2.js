var y = 0;
var o = 0;
var v = 0;
var r = 0;
var s = 0;

var path5 = new Array();
// LIST OF IMAGES
path5[0] = "/images/seattle.png";
path5[1] = "/images/seattle2.jpg";
path5[2] = "/images/seattle3.jpg";

var path6 = new Array();

// LIST OF IMAGES3
path6[0] = "/images/londres1.jpg";
path6[1] = "/images/londres2.jpg";
path6[2] = "/images/londres3.jpg";


var path7 = new Array();

// LIST OF IMAGES5 LOS ANGELES
path7[0] = "/images/losAngeles1.jpg";
path7[1] = "/images/losAngeles2.jpg";
path7[2] = "/images/losAngeles3.jpg";

var path8 = new Array();

// LIST OF IMAGES TEIGH
path8[0] = "/images/teig1.jpg";
path8[1] = "/images/teig2.jpg";
path8[2] = "/images/teig3.jpg";

var path9 = new Array();

// LIST OF IMAGES PLASENCIA
path9[0] = "/images/plasencia1.jpg";
path9[1] = "/images/plasencia2.jpg";
path9[2] = "/images/plasencia3.jpg";

function swapImage5()
{
   document.slide5.src = path5[y];
   if(y < path5.length - 1) 
   	y++; 

   else 
   		y = 0;
   		setTimeout("swapImage5()",3000);
}

function swapImage6()
{
   document.slide6.src = path6[o];
   if(o < path6.length - 1)
   		o++;
   else 
   		o = 0;
   		setTimeout("swapImage6()",3000);
}

function swapImage7()
{
   document.slide7.src = path7[v];
   if(v < path7.length - 1)
         v++;
   else 
         v = 0;
         setTimeout("swapImage7()",3000);
}

function swapImage8()
{
   document.slide8.src = path8[r];
   if(r < path8.length - 1)
         r++;
   else 
         r = 0;
         setTimeout("swapImage8()",3000);
}

function swapImage9()
{
   document.slide9.src = path9[s];
   if(s < path9.length - 1)
         s++;
   else 
         s = 0;
         setTimeout("swapImage9()",3000);
}

window.onload= function(){
	swapImage5();
	swapImage6();
	swapImage7();
	swapImage8();
	swapImage9();
}
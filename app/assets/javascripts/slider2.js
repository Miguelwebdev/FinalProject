var q = 0;
var i = 0;
var z = 0;
var r = 0;
var s = 0;

// LIST OF IMAGES
path[0] = "/images/seattle.png";
path[1] = "/images/seattle2.jpg";
path[2] = "/images/seattle3.jpg";

var path3 = new Array();

// LIST OF IMAGES3
path3[0] = "/images/londres1.jpg";
path3[1] = "/images/londres2.jpg";
path3[2] = "/images/londres3.jpg";


var path5 = new Array();

// LIST OF IMAGES5 LOS ANGELES
path5[0] = "/images/losAngeles1.jpg";
path5[1] = "/images/losAngeles2.jpg";
path5[2] = "/images/losAngeles3.jpg";

var path6 = new Array();

// LIST OF IMAGES TEIGH
path6[0] = "/images/teig1.jpg";
path6[1] = "/images/teig2.jpg";
path6[2] = "/images/teig3.jpg";

var path7 = new Array();

// LIST OF IMAGES PLASENCIA
path7[0] = "/images/plasencia1.jpg";
path7[1] = "/images/plasencia2.jpg";
path7[2] = "/images/plasencia3.jpg";

function swapImage()
{
   document.slide.src = path[i];
   if(i < path.length - 1) 
   	i++; 

   else 
   		i = 0;
   		setTimeout("swapImage()",3000);
}

function swapImage3()
{
   document.slide3.src = path3[z];
   if(z < path3.length - 1)
   		z++;
   else 
   		z = 0;
   		setTimeout("swapImage3()",3000);
}

function swapImage5()
{
   document.slide5.src = path5[q];
   if(q < path5.length - 1)
         q++;
   else 
         q = 0;
         setTimeout("swapImage5()",3000);
}

function swapImage6()
{
   document.slide6.src = path6[r];
   if(r < path6.length - 1)
         r++;
   else 
         r = 0;
         setTimeout("swapImage6()",3000);
}

function swapImage7()
{
   document.slide7.src = path7[s];
   if(s < path7.length - 1)
         s++;
   else 
         s = 0;
         setTimeout("swapImage7()",3000);
}

window.onload= function(){
	swapImage5();
	swapImage();
	swapImage3();
	swapImage6();
	swapImage7();
}
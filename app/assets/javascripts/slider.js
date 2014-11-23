var i = 0;
var j = 0;
var z = 0;
var k = 0;
var q = 0;

var path = new Array();

// LIST OF IMAGES
path[0] = "/images/seattle.png";
path[1] = "/images/seattle2.jpg";
path[2] = "/images/seattle3.jpg";

var path2 = new Array();

// LIST OF IMAGES2
path2[0] = "/images/sanDiego1.jpg";
path2[1] = "/images/sanDiego2.jpg";
path2[2] = "/images/sanDiego3.jpg";

var path3 = new Array();

// LIST OF IMAGES3
path3[0] = "/images/londres1.jpg";
path3[1] = "/images/londres2.jpg";
path3[2] = "/images/londres3.jpg";

var path4 = new Array();

// LIST OF IMAGES4
path4[0] = "/images/merewether_1.jpg";
path4[1] = "/images/merewether_2.jpg";
path4[2] = "/images/merewether_3.jpg";


function swapImage()
{
   document.slide.src = path[i];
   if(i < path.length - 1) 
   	i++; 

   else 
   		i = 0;
   		setTimeout("swapImage()",3000);
}

function swapImage2()
{
   document.slide2.src = path2[j];
   if(j < path2.length - 1)
   		j++;
   else 
   		j = 0;
   		setTimeout("swapImage2()",3000);
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

function swapImage4()
{
   document.slide4.src = path4[k];
   if(k < path4.length - 1)
   		k++;
   else 
   		k = 0;
   		setTimeout("swapImage4()",3000);
}



window.onload= function(){
	swapImage();
	swapImage2();
	swapImage3();
	swapImage4();
   
}

// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var images=new Array('/images/rockConcert.jpg','./images/rockConcert2.jpg','./images/rockConcert3.jpg', './images/rockConcert3.jpg');
var nextimage=0;

doSlideshow();

function doSlideshow()
{
    if($('.slideshowimage').length!=0)
    {
        $('.slideshowimage').fadeOut(3500,function(){slideshowFadeIn();$(this).remove()});
    }
    else
    {
        slideshowFadeIn();
    }
}
function slideshowFadeIn()
{
    $('.slideshow').prepend($('<img class="slideshowimage" src="'+images[nextimage++]+'" style="display:none">').fadeIn(3500,function(){setTimeout(doSlideshow,5000);}));
    if(nextimage>=images.length)
        nextimage=0;
}
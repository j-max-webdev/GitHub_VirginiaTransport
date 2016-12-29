
window.onscroll = function() {navFixed()};
function navFixed(){
	if (document.body.scrollTop > 116){
		$("nav").addClass("navFixed");
	}
	if (document.body.scrollTop < 116){
		$("nav").removeClass("navFixed");
	}
};



$("nav a").on("click", function(){
	var href = $(this).attr('href');
	$('html, body').animate({scrollTop:$(href).position().top-50}, 'fast');
});


var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); // Change image every 2 seconds
   }
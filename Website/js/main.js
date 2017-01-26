
window.onscroll = function() {navFixed()};
function navFixed(){
	if (document.body.scrollTop > 400){
		$("nav").addClass("navFixed");
        $("#header-right").width("100%");
	}
	if (document.body.scrollTop < 400){
		$("nav").removeClass("navFixed");
        $("#header-right").width("45%");
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
    setTimeout(carousel, 8000); 
   }
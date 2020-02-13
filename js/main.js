document.addEventListener('click', function (event) {
	let iconNav = document.querySelector('#icon-nav')
	let nav = document.querySelector('.nav')
	if(event.target == iconNav) {
		nav.classList.add('open-nav')
	}
	if(event.target != iconNav) {
		nav.classList.remove('open-nav')
	}
})
var windowWidth = window.innerWidth
if(windowWidth < 1220) {
	$('#screendShots-slider').slick({
		autoplay: true,
		appendArrows: $('.screen-shots .wrapper'),
		prevArrow: '<span id="prev-screenshots-slick" class="prev arrow"></span>',
		nextArrow: '<span id="next-screenshots-slick" class="next arrow"></span>'
	});
} else {
$(document).ready(function() {
    let c = $("#screendShots-slider").waterwheelCarousel({
    	opacityMultiplier: 1,
    	keyboardNav: true,
    	sizeMultiplier: 0.9,
    	keyboardNav: true
    });
    $('#prev-screenshots').bind('click', function(){
    	c.prev()
    	return false
    });
    $('#next-screenshots').bind('click', function(){
    	c.next()
    	return false
    })
});	
}

$('.video').parent().click(function () {

if($(this).children(".video").get(0).paused){       
	$(this).children(".video").get(0).play();   
	$(this).children(".playpause").fadeOut();
} else {      
 	$(this).children(".video").get(0).pause();
  	$(this).children(".playpause").fadeIn();
}
});

var slidesShow = 3
if(windowWidth < 1270) {
	slidesShow = 2
}
if(windowWidth < 980) {
	slidesShow = 1
}
$('.reviews').slick({
	autoplay: true,
	appendArrows: $('.reviews'),
	prevArrow: '<span id="prev-reviews-slick" class="prev arrow"></span>',
	nextArrow: '<span id="next-reviews-slick" class="next arrow"></span>',	
	infinite: true,
	slidesToShow: slidesShow,
	slidesToScroll: slidesShow
});

function scrollTo(from, to) {
let a = document.getElementById(to);
let b = document.getElementById(from);
return function(event){
	if(b.contains(event.target)){
	a.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
	}
	}
}

document.addEventListener('click', scrollTo('btnToFeatures', 'features'),false)
document.addEventListener('click', scrollTo('btnToPricing', 'pricing'),false)
document.addEventListener('click', scrollTo('btnToDownload', 'download-block'),false)
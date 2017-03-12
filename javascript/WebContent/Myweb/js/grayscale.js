/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

//네비게이션과 맵 div 조절함수
function mapnavi(){
	var conwidth = $('#map-content').width();
	if(conwidth > 750){
		var naviwidth1 = $('#navi1').width();
		var naviwidth2 = $('#navi2').width();
		$('#map2').css({'width':conwidth-naviwidth1-naviwidth2-50,'height':550});
	}else{
		$('#map2').css({'width':"100%",'height':300});
	}
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	    
	    mapnavi();
		
		$(window).resize(function(){
			mapnavi();
		});
		
		$('.carousel').carousel({
			interval: 6000
		})
		
	});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});



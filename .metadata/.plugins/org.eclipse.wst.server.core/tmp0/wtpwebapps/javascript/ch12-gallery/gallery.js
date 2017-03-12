/**
 * 
 */
$(document).ready(function(){
	$('#nav a').mouseover(function(event){
		event.preventDefault();
		$('#nav a').removeClass('active');
		$(this).addClass('active');
		var img_url = $(this).attr('href');
		$('#window img').attr('src', img_url);
	});
});
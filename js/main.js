$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});



	$(".toolbar ul li .hover-text").fadeOut(0);
/*
	$(".toolbar ul li").hover(function(){
			$(this).find(".hover-text").fadeIn(200);
		}, function(){

			$(".toolbar ul li .hover-text").fadeOut(200);
			if($(this).hasClass("selected"))
				$(this).find(".hover-text").fadeIn(200);

	})
*/
	$(".toolbar ul li").mouseover(function(){
		$(this).find(".hover-text").fadeIn(200);
	})
	$(".toolbar ul li").mouseout(function(e){
		e.stopPropagation();
		
		if($(this).hasClass("selected"))
			$(this).find(".hover-text").css("display","block");
		else
			$(this).find(".hover-text").fadeOut(200);

	})

	$(".toolbar ul li").mousedown(function(){

		if(!$(this).hasClass("selected")){
			
			// remove
			$(".toolbar ul li.selected").find(".hover-text").fadeOut(200);
			$(".toolbar ul li").removeClass("selected");

			//add
			$(this).addClass("selected")
			$(this).find(".hover-text").css("display","block");
		}
			

			
	})


	$(".toolbar ul li.education").click(function(){
		$(".block").fadeOut(200);
		$(".block.education").fadeIn(200);
	})

	$(".toolbar ul li.self").click(function(){
		$(".block").fadeOut(200);
		$(".block.self").fadeIn(200);
	})

	$(".toolbar ul li.intern").click(function(){
		$(".block").fadeOut(200);
		$(".block.intern").fadeIn(200);
	})

	$(".toolbar ul li.master").click(function(){
		$(".block").fadeOut(200);
		$(".block.master").fadeIn(200);
	})

	$(".toolbar ul li.bachelor").click(function(){
		$(".block").fadeOut(200);
		$(".block.bachelor").fadeIn(200);
	})

	$(".toolbar ul li.publication").click(function(){
		$(".block").fadeOut(200);
		$(".block.publication").fadeIn(200);
	})

	$(".toolbar ul li.awards").click(function(){
		$(".block").fadeOut(200);
		$(".block.awards").fadeIn(200);
	})

	$(".toolbar ul li.skills").click(function(){
		$(".block").fadeOut(200);
		$(".block.skills").fadeIn(200);
	})



});
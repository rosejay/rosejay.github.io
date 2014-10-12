$(document).ready(function() {

	$('.about').fadeOut(0);
	$('#worksBtn').fadeOut(0);


	$('#aboutBtn').click(function(){
		$('#aboutBtn').fadeOut(0);
		$('.about').fadeIn(0);
		$('#worksBtn').fadeIn(0);
		$('.works').fadeOut(0);
	})

	$('#worksBtn').click(function(){
		$('#aboutBtn').fadeIn(0);
		$('.about').fadeOut(0);
		$('#worksBtn').fadeOut(0);
		$('.works').fadeIn(0);
	})



	$(window).scroll(function() {
	    clearTimeout($.data(this, 'scrollTimer'));
	    $('#nav').fadeOut(100);
	    $.data(this, 'scrollTimer', setTimeout(function() {
	        // do something
	        $('#nav').fadeIn(100);
	    }, 250));
	});



	/*
	$(document).on('scrollstart',function(){
		$('#nav').fadeOut(100);
		$('body').append('<p>start</p>');
		//alert('You have started scrolling');
	});

	$(document).on('scrollstop',function(){
  		$('#nav').fadeIn(100);
  		$('body').append('<p>stop</p>');
  		//alert('ou have stopped scrolling');
	});*/
	/*
	$(document).bind('tap',function(){
	 	$('#nav').fadeOut(0);
	});*/
	/*
	$('body').bind({
	    'touchmove': function(e) { 
	        $('#nav').fadeIn(100);
	    }
	});*/


/*
	$('.toolbar ul li').hover(function(){
			$(this).find('.hover-text').fadeIn(200);
		}, function(){

			$('.toolbar ul li .hover-text').fadeOut(200);
			if($(this).hasClass('selected'))
				$(this).find('.hover-text').fadeIn(200);

	})
*/
/*
	$('.toolbar ul li').mouseover(function(){
		$(this).find('.hover-text').fadeIn(200);
	})
	$('.toolbar ul li').mouseout(function(e){
		e.stopPropagation();
		
		if($(this).hasClass('selected'))
			$(this).find('.hover-text').css('display','block');
		else
			$(this).find('.hover-text').fadeOut(200);

	})

	$('.toolbar ul li').mousedown(function(){

		if(!$(this).hasClass('selected')){
			
			// remove
			$('.toolbar ul li.selected').find('.hover-text').fadeOut(200);
			$('.toolbar ul li').removeClass('selected');

			//add
			$(this).addClass('selected')
			$(this).find('.hover-text').css('display','block');
		}
			

			
	})


	$('.toolbar ul li.education').click(function(){
		$('.block').fadeOut(200);
		$('.block.education').fadeIn(200);
	})

	$('.toolbar ul li.self').click(function(){
		$('.block').fadeOut(200);
		$('.block.self').fadeIn(200);
	})

	$('.toolbar ul li.intern').click(function(){
		$('.block').fadeOut(200);
		$('.block.intern').fadeIn(200);
	})

	$('.toolbar ul li.master').click(function(){
		$('.block').fadeOut(200);
		$('.block.master').fadeIn(200);
	})

	$('.toolbar ul li.bachelor').click(function(){
		$('.block').fadeOut(200);
		$('.block.bachelor').fadeIn(200);
	})

	$('.toolbar ul li.publication').click(function(){
		$('.block').fadeOut(200);
		$('.block.publication').fadeIn(200);
	})

	$('.toolbar ul li.awards').click(function(){
		$('.block').fadeOut(200);
		$('.block.awards').fadeIn(200);
	})

	$('.toolbar ul li.skills').click(function(){
		$('.block').fadeOut(200);
		$('.block.skills').fadeIn(200);
	})

*/

});
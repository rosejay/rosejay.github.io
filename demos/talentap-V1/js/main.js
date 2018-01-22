// iphone screen shot shifts
/*
var $img = $(".iphone img"), i = 0, speed = 200;
var $box = $(".screenshot-inner");

window.setInterval(function() {
	
	if(i % 5!=4){
		$box.animate({
	    	left: -(++i % 5 * 267),
		}, 200 );
	}
	else{
		
		$box.animate({
	    	left: -(5 * 267),
		}, 200, function(){
			++i;
			$box.css("left",0);
		})
	}

}, 3000);

*/
/*
var $box = $(".screenshot-inner");
var imageNum = 5;
var currentImage = 1;
$(".screenshot-box").click(function(){

	currentImage++;
	
	$(".shift-box ul li").removeClass("shift-selected");

	if(currentImage == imageNum){

		$box.animate({
	    	left: -(imageNum * 267),
		}, 200, function(){
			currentImage = 0;
			$box.css("left",0);
		})
	}
	else{
		$box.animate({
	    	left: -(currentImage % imageNum * 267),
		}, 200 );
	}

	var index = currentImage % imageNum + 1;
	$(".shift-box ul li:nth-child("+index+")").addClass("shift-selected");


})

*/


var winwidth=window.innerWidth;
var winheight=window.innerHeight;

//alert(winwidth, winheight)
// text shifts
var textArray = new Array("experience\n", 
					  "treat\n", 
					  "surprise\n",
					  "chef\nbirthday", 
					  "DJ\nparty", 
					  "singer\nwedding", 
					  "clown\nkids",
					  "pianist\nrestaurant", 
					  "dancer\nhen party",
					  "band\ncolleagues", 
					  "comedian\npub", 
					  "treat\n", 
					  "surprise\n", 
					  "experience\n");

// colors
var color = new Array("#ea4c89", "#c800ff", "#00afff");
var color2 = new Array("#ffa2c6", "#eca9ff", "#96deff");

// speed
var typingSpeed = 80;
var loopSpeed = 2000;

// parameters
var isFirst = true;
var j = 0;
var data;
var index = 0;
var cursor=$("<span id='cursor'></span>");
var paragraph = 0;
var currentP;
var colorIndex;

var yellow = "#ffd737";
var green = "#4cd963";
var T, textPlay;

function newParagraph() {
	if(paragraph){
		$(".part2").text("");
		currentP = $(".part2");
	}
	else{
		$(".part1").text("");
		currentP = $(".part1");
	}
    currentP.append(cursor);
}

function test(){
	//console.log("test", index, data.length)
	
    if(index >= data.length){
        window.clearInterval(T);
    }
    else{
    	if (data[index] === '\n'){
	    	paragraph++;

	    	if(j == textArray.length - 3 || j == textArray.length - 2 || j<=2){
	    		window.clearInterval(T);
	    	}
	    	else if( j == textArray.length-1){
	    		stopPlay();
	    	}
	    	else
	        	newParagraph();
	    }
	    
		if(data[index]){
	    	_span = '<span>' + data[index] + '</span>';
		    $('#cursor').before(_span);
			index++;
	    }
    }
	
	    
}

function textInterval(){

		

	j++;
	if(j>=textArray.length){
		stopPlay();
	}
	else{
		data = textArray[j];
		index = 0;
		paragraph = 0;
		newParagraph();
		T = window.setInterval("test()",typingSpeed);

		//console.log("textInterval",j)
		$(".part1").css("transition", "all 2s ease-out").css("-webkit-transition", "all 2s ease-out");
		
		if(j == 3 && isFirst)
			$(".part1").css("transition", "all 0s ease-out").css("-webkit-transition", "all 0s ease-out");
		else
			$(".part1").css("transition", "all 2s ease-out").css("-webkit-transition", "all 2s ease-out");

		//console.log(j)
		if(j >= textArray.length - 3 || j<=2 || j == 0 ){

			if( j == textArray.length - 3 || j == textArray.length - 1 || j == 0 || j == 2)
				$(".part1").css("color", yellow)
			else if( j == textArray.length - 2 || j == 1)
				$(".part1").css("color", green)

			//console.log(j)
			$(".part2").text("guests").css("color", color2[j % color.length])
		}
		else{
			$(".part1").css("color", "#fff")
			$(".part2").css("color", "#fff")
		}

		// book an experience
		if(j == textArray.length-1 || j == 0)
			$(".text").text("Book an");
		else
			$(".text").text("Book a");




		// set color
		colorIndex = j % color.length;

		if(j == textArray.length-2){
			colorIndex = 1;
			$(".part2").text("guests").css("color", color2[colorIndex])
		}
		else if(j == textArray.length-1){
			colorIndex = 0;
			$(".part2").text("guests").css("color", color2[colorIndex])

		}
		
		$(".slogan-box").css("background", color[colorIndex]);
		//$(".arrow.bottom").css("border-top", "10px solid " + color[colorIndex]);
		$(".text").css("color", color2[colorIndex]);
		$(".text2").css("color", color2[colorIndex]);


	}
		
	//console.log(document.body.scrollTop)	
		


	
}
function stopPlay(){

	isFirst = false;
	window.clearInterval(T);
	window.clearInterval(textPlay);
	window.clearInterval();
	$(".replay").fadeIn(200);
	//$(".tri").fadeIn(200);
	$(".part1").css("transition", "all 0s ease-out").css("-webkit-transition", "all 0s ease-out");
}

function reset(){
	$(".replay").fadeOut(200);
	//$(".tri").fadeOut(200);
	$(".text").text("Book a");

	$(".text").css("color", color2[0]);
	$(".text2").css("color", color2[0]);
	

	if(j == 0){
		$(".part1").css("color", yellow);
		$(".part2").css("color", color2[0]);
		$(".part2").text("guests").css("color", color2[0]);
		$(".text").text("Book an");
	}
	else{
		$(".part1").css("color", "#fff");
		$(".part2").css("color", "#fff");
	}

	$(".slogan-box").css("background", color[0]);
	//$(".arrow.bottom").css("border-top", "10px solid " + color[0]);

}

function play(){

	

	if(isFirst)
		j = 0;
	else
		j = 3;

	reset();

	data = textArray[j];
	index = 0;
	paragraph = 0;
	newParagraph();

	
	T=window.setInterval(test,typingSpeed);
	textPlay = window.setInterval(textInterval, loopSpeed);

}

// replay btn
$(".replay").click(play);


play();











////////// user subscription
$(".btn-submit").click(function(){
	if(validateEmail($(".email").val())){
		// submit
		var email = $("#useremail").val();
		$.ajax({
			type: "POST",
			url: "subscribe.php",
			data: { email: email }
		}).done(function( msg ) {
			if(msg){
				// success
				$(".email").val("");
				$(".inputmessage").text("Thanks for joining our start-up journey").fadeIn(200);
				window.setTimeout(function() {
					$(".inputmessage").fadeOut(200);
				}, 2000);
			}
			else{
				// fail
				$(".inputmessage").text("Please try again").fadeIn(200);
			}
		});

	}
	else{
		// not a valid email address.
		$(".inputmessage").text("Not a valid Email address").fadeIn(200);
	}
})
$(".email").keydown(function( event ) {
	if ( event.which == 13 ) {
		event.preventDefault();
		$(".btn-submit").click();
	}
});	

// check if it's a valid email address
function validateEmail(str){
	var atpos=str.indexOf("@");
	var dotpos=str.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=str.length){
		return false;
	}
	return true;
}
function validateURL(url)
{
     return url.match(/^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/);
}


////////// talent form
var isTalentForm = false;
// key operation on form
$(".contact-email").keydown(function( event ) {
	if ( event.which == 13 ) {
		event.preventDefault();
		$(".contact-email").click();
	}
});	
$("#twitter").keydown(function( event ) {
	if ( event.which == 13 ) {
		event.preventDefault();
		$(".contact-email").click();
	}
});	
$("#facebook").keydown(function( event ) {
	if ( event.which == 13 ) {
		event.preventDefault();
		$(".contact-email").click();
	}
});	
$("#homepage").keydown(function( event ) {
	if ( event.which == 13 ) {
		event.preventDefault();
		$(".contact-email").click();
	}
});	
$("#achievement").keydown(function( event ) {
	if ( event.which == 13 ) {
		event.preventDefault();
		$(".contact-email").click();
	}
});	

// talent form
$(".contact-email").click(function(){

	if(isTalentForm){
		// submit
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var city = $("#city").val();
		var country = $("#country").val();
		var category = $("#category").val();
		var achievement = $("#achievement").val();
		var homepage = $("#homepage").val();
		var facebook = $("#facebook").val();
		var twitter = $("#twitter").val();

		if(firstname && lastname && email && phone && city && country && category && achievement){

			if(validateEmail(email)){

				// submit
				$.ajax({
					type: "POST",
					url: "signup.php",
					data: { firstname: firstname, 
							lastname: lastname,
							email: email,
							phone: phone,
							city: city,
							country: country,
							category: category,
							achievement: achievement,
							homepage: homepage,
							facebook: facebook,
							twitter: twitter}
				}).done(function( msg ) {
					if(msg){
						// success
						$(".talent-form").fadeOut(200);
						$(".contact-email").fadeOut(200);
						$(".talentSuccess").fadeIn(200);
					}
					else{
						// fail
						$(".talentError").text("Please try again").fadeIn(200);
					}
				});
			}
			else{
				$("#email").addClass("error")
				$(".talentError").text("Not a valid Email address").fadeIn(200);
			}
				
		}
		else{

			if(!firstname)
				$("#firstname").addClass("error")
			if(!lastname)
				$("#lastname").addClass("error")
			if(!email)
				$("#email").addClass("error")
			if(!phone)
				$("#phone").addClass("error")
			if(!city)
				$("#city").addClass("error")
			if(!country)
				$("#country").addClass("error")
			if(!category)
				$(".current-option").addClass("error")
			if(!achievement)
				$("#achievement").addClass("error")

			$(".talentError").text("Please complete the form").fadeIn(200);
		}
	}
	else{
		isTalentForm = true;
		$(".talent-form").slideDown( "slow", function() { });
		$(this).attr("title", "submit")
		//window.scrollTo(0,3000);
	}
})

// select
$('.J_select_current_option').each(function(){
	$(this).click(function(){
		var $this = $(this), select_drop = $this.siblings('.J_select_drop'), show_input = $this.find('.J_input_show');
		if(!$this.siblings('.J_select_drop:visible').length){
			select_drop.slideDown(function(){
				$this.addClass('selecting');
				show_input.focus();
				clearDrop(show_input);
			})
		}else{
			select_drop.slideUp(function(){
				$this.removeClass('selecting');	
			})
		}
	})
});
$('.J_select_drop li').each(function(){
	$(this).bind('mousedown', function(){
		var $this = $(this),
		show_input = $this.parents('.J_select_drop').siblings('.J_select_current_option').find('.J_input_show'),
		post_input = show_input.siblings('.J_input_post'),
		clickItem=$this.find('a');
		
		show_input.val(clickItem.text());
		post_input.val(clickItem.attr('val'));
		var opt = show_input.parents('.J_select_current_option');
		opt.siblings('.J_select_drop').slideUp(function(){
			opt.removeClass('selecting');
		});
		return false;
	})
});

// hide select
function clearDrop(show_input){
	show_input.blur(function(){
		var opt = show_input.parents('.J_select_current_option');
		opt.siblings('.J_select_drop').slideUp(function(){
			opt.removeClass('selecting');
		})
	});
}





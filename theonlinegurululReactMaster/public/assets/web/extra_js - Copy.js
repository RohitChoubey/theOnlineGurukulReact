	if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
      var base_url = "http://localhost/narender/theonlinegurukul";
    }else{
      var base_url = window.location.origin;
    }

$(".play-4").yu2fvl({ vid: "RHq8MtQmEJU?rel=0", ratio: 16/9 });
$(".play-3").yu2fvl({ vid: "ZXALWwlprSc?rel=0", ratio: 16/9 });

$(document).ready(function () {
	$('.button_collapse_nonmedical').on('click', function(){
		$('.wrap_search, .button_collapse_nonmedical').toggleClass('active');
		return false;
	});
	$(".sub_close").on("click", function(e){
		$('.wrap_search, .button_collapse_nonmedical').removeClass('active');
	});
	$(".body-wrapper").on("click", function(e){
		$('.wrap_search, .button_collapse_nonmedical').removeClass('active');
	});
	 $('.button_collapse_medical').on('click', function(){
	   $('.wrap_search_medical, .button_collapse_medical').toggleClass('active');
	   return false;
	});
	$('.button_collapse_commerce').on('click', function(){
		$('.wrap_search_commerce, .button_collapse_commerce').toggleClass('active');
		return false;
	});
	$('.button_collapse_arts').on('click', function(){
		$('.wrap_search_arts, .button_collapse_arts').toggleClass('active');
		return false;
	});
});


$(document).ready(function () {
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true   // 100% fit in a container
    });
});



  $(document).ready(function () {
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 1) {
        //console.log('a');
        $(".header-wrapper").addClass("bb-fixed-header");
		 $(".header-wrapper").removeClass("main-navigation");
    } else {
        //console.log('a');
        $(".header-wrapper").addClass("main-navigation");
		$(".header-wrapper").removeClass("bb-fixed-header");
    }
});
});


$(function () {
    $(".simple-tab").tabs({
        type: "click",
        speed: 300,
        animation: "slide"
    });
})


$(document).ready(function() {
    $('#Carousel1').carousel({
        interval: 6000
    })
});



$(document).ready(function() {
	/*    
		$('#example-getting-started1').multiselect();
		$('#8th-primary').multiselect();
		$('#8th-secondary').multiselect();
		$('#9th-primary').multiselect();
		$('#9th-secondary').multiselect();
		$('#10th-primary').multiselect();
		$('#10th-secondary').multiselect();
		$('#11th-primary').multiselect();
		$('#11th-secondary').multiselect();
		$('#12th-primary').multiselect();
		$('#12th-secondary').multiselect();
		$('#days-available').multiselect();
		$('#available-timings').multiselect();
		$('#example-getting-started1-timing').multiselect();
		$('#example-getting-started-weekdays').multiselect();
		$(".btn-default").mouseout(function(){
		$(".btn-default").css("background-color", "#fff");
		$(".btn-default").css("border-color", "#dcdfe3");
	});
	*/
	$('#count').change(function()
	{
		if (this.value == 'phds')
		{
			$('#select-popup1').modal('show');
		}else{
			$('#select-popup').modal('show');
		}
	});

	$("#selectgp").change(function(){
		$(this).find("option:selected").each(function(){
			var optionValue = $(this).attr("value");
			if(optionValue){
				$(".boxes").not("." + optionValue).hide();
				$("." + optionValue).show();
			} else{
				$(".boxes").hide();
			}
		});
	}).change();

	$("#choose_loc").click(function(){
		$('#select-popup-location').modal('show');
	});

	var current_fs, next_fs, previous_fs;
	var left, opacity, scale;
	var animating;
	$(".steps").validate({
		errorClass: 'invalid',
		errorElement: 'span',
		errorPlacement: function(error, element) {
			error.insertAfter(element.next('span').children());
		},
		highlight: function(element) {
			$(element).next('span').show();
		},
		unhighlight: function(element) {
			$(element).next('span').hide();
		}
	});
	$(".next").click(function() {
		$(".steps").validate({
			errorClass: 'invalid',
			errorElement: 'span',
			errorPlacement: function(error, element) {
				error.insertAfter(element.next('span').children());
			},
			highlight: function(element) {
				$(element).next('span').show();
			},
			unhighlight: function(element) {
				$(element).next('span').hide();
			}
		});
		if ((!$('.steps').valid())) {
			return true;
		}
		if (animating) return false;
		animating = true;
		current_fs = $(this).parent();
		next_fs = $(this).parent().next();
		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
		next_fs.show();
		current_fs.animate({
			opacity: 0
		}, {
			step: function(now, mx) {
				scale = 1 - (1 - now) * 0.2;
				left = (now * 50) + "%";
				opacity = 1 - now;
				current_fs.css({
					'transform': 'scale(' + scale + ')'
				});
				next_fs.css({
					'left': left,
					'opacity': opacity
				});
			},
			duration: 800,
			complete: function() {
				current_fs.hide();
				animating = false;
			},
			easing: 'easeInOutExpo'
		});
	});
	$(".submit").click(function() {
		$(".steps").validate({
			errorClass: 'invalid',
			errorElement: 'span',
			errorPlacement: function(error, element) {
				error.insertAfter(element.next('span').children());
			},
			highlight: function(element) {
				$(element).next('span').show();
			},
			unhighlight: function(element) {
				$(element).next('span').hide();
			}
		});
		if ((!$('.steps').valid())) {
			return false;
		}
		if (animating) return false;
		animating = true;
		current_fs = $(this).parent();
		next_fs = $(this).parent().next();
		$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
		next_fs.show();
		current_fs.animate({
			opacity: 0
		}, {
			step: function(now, mx) {
				scale = 1 - (1 - now) * 0.2;
				left = (now * 50) + "%";
				opacity = 1 - now;
				current_fs.css({
					'transform': 'scale(' + scale + ')'
				});
				next_fs.css({
					'left': left,
					'opacity': opacity
				});
			},
			duration: 800,
			complete: function() {
				current_fs.hide();
				animating = false;
			},
			easing: 'easeInOutExpo'
		});
	});
	$(".previous").click(function() {
		if (animating) return false;
		animating = true;
		current_fs = $(this).parent();
		previous_fs = $(this).parent().prev();
		$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
		previous_fs.show();
		current_fs.animate({
			opacity: 0
		}, {
			step: function(now, mx) {
				scale = 0.8 + (1 - now) * 0.2;
				left = ((1 - now) * 50) + "%";
				opacity = 1 - now;
				current_fs.css({
					'left': left
				});
				previous_fs.css({
					'transform': 'scale(' + scale + ')',
					'opacity': opacity
				});
			},
			duration: 800,
			complete: function() {
				current_fs.hide();
				animating = false;
			},
			easing: 'easeInOutExpo'
		});
	});

});





// baseURL variable

$(document).ready(function(){

	// City change
	$('#sel_city').change(function(){
		var city = $(this).val();

		// AJAX request
		$.ajax({
			url: base_url+'/Web/getCityDepartment',
			method: 'post',
			data: {city: city},
			dataType: 'json',
			success: function(response){

				// Remove options
				$('#sel_user').find('option').not(':first').remove();
				$('#sel_depart').find('option').not(':first').remove();

				// Add options
				$.each(response,function(index,data){
					$('#sel_depart').append('<option value="'+data['id']+'">'+data['depart_name']+'</option>');
				});
			}
		});
	});

	// Department change
	$('#sel_depart').change(function(){
		var department = $(this).val();

		// AJAX request
		$.ajax({
			url: base_url+'/Web/getDepartmentUsers',
			method: 'post',
			data: {department: department},
			dataType: 'json',
			success: function(response){

				// Remove options
				$('#sel_user').find('option').not(':first').remove();

				// Add options
				$.each(response,function(index,data){
					$('#sel_user').append('<option value="'+data['id']+'">'+data['name']+'</option>');
				});
			}
		});
	});

});



$(document).ready(function(){
	$("#screenshot_speed").on("change", function(){
	  // Name of file and placeholder
	  var file = this.files[0].name;
	  var dflt = $(this).attr("placeholder");
	  if($(this).val()!=""){
		$(this).next().text(file);
	  } else {
		$(this).next().text(dflt);
	  }
	});

	$("#upload_profile_pic").on("change", function(){
	  // Name of file and placeholder
	  var file = this.files[0].name;
	  var dflt = $(this).attr("placeholder");
	  if($(this).val()!=""){
		$(this).next().text(file);
	  } else {
		$(this).next().text(dflt);
	  }
	});


	$("#upload_resume").on("change", function(){
	  // Name of file and placeholder
	  var file = this.files[0].name;
	  var dflt = $(this).attr("placeholder");
	  if($(this).val()!=""){
		$(this).next().text(file);
	  } else {
		$(this).next().text(dflt);
	  }
	});
});


$(function () {
	$("#first_form").click(function () {
		var password = $("#password").val();
		var confirmPassword = $("#confirm_password").val();
		if (password != confirmPassword) {
			alert("Passwords do not match.");
			return false;
		}
		return true;
	});
});




      /*!
      function loadCSS(href){
        var ss = window.document.createElement('link'),
            ref = window.document.getElementsByTagName('head')[0];

        ss.rel = 'stylesheet';
        ss.href = href;

        // temporarily, set media to something non-matching to ensure it'll
        // fetch without blocking render
        ss.media = 'only x';

        ref.parentNode.insertBefore(ss, ref);

        setTimeout( function(){
          // set media back to `all` so that the stylesheet applies once it loads
          ss.media = 'all';
        },0);
      }
      loadCSS('styles.css');
	  */



yes_js_login = function() {
    return false;
}





  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-130185472-1');



$(window).load(function(){
	window.setTimeout(function(){
		$('#myModalHorizontal').modal('show');
	},240000);
	$('.close-sign').click(function(){
		$('#myModalHorizontal').modal('hide');
	});
});


        // baseURL variable



/*
function parseJSAtOnload() {
	//var links = ["<?php echo implode('","', $b);?>"] ,
	//var links   = ["ass","aaaaa"],
	headElement = document.getElementsByTagName("head")[0],
	linkElement, i;
	for (i = 0; i < links.length; i++) {
	linkElement = document.createElement("script");
	linkElement.src = links[i];
	headElement.appendChild(linkElement);
	}
}
if (window.addEventListener)
window.addEventListener("load", parseJSAtOnload, false);
else if (window.attachEvent)
window.attachEvent("onload", parseJSAtOnload);
else window.onload = parseJSAtOnload;
*/



function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



var latlng;
if (navigator.geolocation) {

	navigator.geolocation.getCurrentPosition(function (position) {
	latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

new google.maps.Geocoder().geocode({"latLng" : latlng}, function(results, status) {
	if (status == google.maps.GeocoderStatus.OK) {
		 if (results[0]) {
			 var add= results[0].formatted_address ;
			 var value=add.split(",");
			 var count=value.length;
			 var country=value[count-1];
			 var state=value[count-2];
			 var city=value[count-3];
			 //alert("city name is: " + city);
				var expire = new Date();
				// expire.setTime(expire.getTime() + (15 * 60 * 1000)); 
				// time()+86400
				expire.setTime(expire.getTime() + (86400));
				$.cookie("city",city.trim(),{expires: expire});
				$('.city_get_1_2').empty();
				$('.city_get_1_2').append(city.trim());
		 } else {
			 //alert("address not found");
			 var expire = new Date();
			 expire.setTime(expire.getTime() + (86400));
			 $.cookie("city", "notfound",{expires: expire});
		 }
	 }
	 else {
		 //alert("Geocoder failed due to: " + status);
		 var expire = new Date();
		 expire.setTime(expire.getTime() + (86400));
		 $.cookie("city", "failure",{expires: expire});
	 }
});
});
}




<style>
.subcribe_chat{
	    padding: 6px 0px!important;
}
      .modal .modal-dialog {
        width: 400px;
      }
	  .select_board{
		  padding:0px;
	  }
	   .select_boards{
   color: #337ab7;
    font-size: 21px;
    margin: 0;
    padding: 8px;
	  }
	  .incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
 }
 .received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg { width: 57%;}
.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 60%;
}

 .sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0; color:#fff;
  padding: 5px 10px 5px 12px;
  width:100%;
}
</style>

<div class="footer-wrapper">
  <div class="footer-top-area">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="footer-about-info-area footer-top-content">
            <div class="footer-widget-heading">
              <h3>About Us</h3>
            </div>
            <div class="footer-widget-content">
              <p><span style="color:#007aff">theOnline</span><span style="color:#f47629">Gurukul</span> is a global marketplace for learning and teaching online where students are mastering new skills and achieving their goals by learning from an expert instructors.</p>

              <!-- <ul class="footer-social-menu list-inline">
                <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i></a></li>
                <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i></a></li>
                <li><a href="javascript:void(0)"><i class="fa fa-instagram"></i></a></li>
                <li><a href="javascript:void(0)"><i class="fa fa-linkedin-square"></i></a></li>
                <li><a href="javascript:void(0)"><i class="fa fa-skype"></i></a></li>
              </ul> -->
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="footer-tags-widget">
            <div class="footer-widget-heading">
              <h3>Quick Links</h3>
            </div>
            <div class="footer-widget-content">
              <ul class="footer-widget-menu">
                <li> <a href="<?=site_url("home");?>">Home</a> </li>
                <li> <a href="<?=site_url("how-it-works");?>">How it works</a></li>
                <li> <a href="<?=site_url("courses");?>">Courses</a></li>
                <li> <a href="<?=site_url("faq");?>">Faq's</a> </li>
                <li> <a href="<?=site_url("contact-us");?>">Contact Us</a> </li>
				<li> <a href="<?=site_url("our-teachers");?>">Our Teachers</a> </li>
                <li><a href="" onclick="yes_js_login(); return false;" ><span style=""class="count233 label "><?php echo $this->hits;?></span> </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="footer-contact">
            <div class="footer-widget-heading">
              <h3>Contact Us</h3>
            </div>
            <div class="footer-widget-content">
              <ul class="footer-conatct-menu">
               <li> <a href="mailto:info@theonlinegurukul.com" style="font-size: 16px;" ><i class="fa fa-envelope"></i><span>Email :</span> info@theonlinegurukul.com</a> </li>
               <li> <a href="tel:+919899416555"><i class="fa fa-phone"></i> <span>Phone : </span> +91-9899416555,9899406555</a> </li>
               <li> <a target="blank" href="https://maps.google.com/?q=116 Phase IV, Udyog Vihar, Sector 18 Gurugram, Haryana 122008"><i class="fa fa-map-o"></i><span>Address :</span> plot no : 116, First Floor,Near Atlas Chowk,
               Udyog Vihar, Phase – 4, 122015, Gurugram, Haryana, India</a> </li>
             </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="copyright-wrapper">
        <div class="container">
              <div class="col-md-6">
              <p>&copy; Copyright <span id="year"></span> theOnlineGurukul | All Rights Reserved.</p>
              </div>
                <div class="col-md-6">
                      <ul class="footer-social-menu list-inline list-line_footer">
                      <li><a href="https://www.facebook.com/theOnlineGurukul"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fa fa-instagram"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fa fa-linkedin-square"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="fa fa-skype"></i></a></li>
                      </ul>
                </div>
        </div>
  </div>

<!--call back button-->

 <!--<div class="callback_new mainDemo-21" style="position: fixed; top:44%;">
			<div class="callback_new_wrap">
			</div>
	  		<button class="md-trigger" style="border:none;">
			<img class="callback-img" src="<?php //echo base_url('assets/web/images/new-images/online-quizs.png');?>" alt="Get a callback"></button>
		</div>-->
<!--call back button-->
<div class="callback_new"  style="position: fixed;" data-toggle="modal" data-target="#myModalHorizontal">
			<div class="callback_new_wrap">
			</div>
	  		<button class="md-trigger" data-modal="modal-11" style="border:none;"><img  class="callback-img" src="<?php echo base_url('assets/web/images/login-here.png');?>" alt="Get a callback"></button>

		</div>
<!-- end call back button-->
<!--call back button form-->
   <div class="modal fade animated rotateIn" id="myModalHorizontal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-smll modal-callback" role="document">
            <div class="modal-content border-content">


             <div class="modal-body body-callback">
             <div class="wrap demo-1">
<button type="button" class="close close-icon close-sign close-pop-nin" data-dismiss="modal" aria-label="Close" style="display:none;">
                        <span aria-hidden="true" class="fadeandscale_close fand-clase"><img src="<?php echo base_url('assets/web/images/close-pop.png');?>" alt="close-pop.png"></span>
                    </button>

         <div class="headder-main w3layouts">
			<div class="sap_tabs">
			<div id="horizontalTab" style="display: block; width: 100%; margin: 0px;">
				<ul class="resp-tabs-list w3">
					<li class="resp-tab-item" aria-controls="tab_item-0" role="tab"><img src="<?php echo base_url('assets/web/images/check-teachers.png');?>" alt="check-img" class="check-sign"><span>Student Login</span></li>
					<li class="resp-tab-item" id="create" aria-controls="tab_item-1" role="tab"><img src="<?php echo base_url('assets/web/images/check-teachers.png');?>" alt="check-img" class="check-sign"><span>Teacher Login</span></li>
					<div class="clearfix"></div>
				</ul>
	<div class="resp-tabs-container w3-agile">
		<div class="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
			<div class="loginx agileits">
			              <?=form_open('student/signin')?>
								<label class="email-box-pops">Email</label>
								<?php //echo form_error('email','<p class="text-danger">','</p>'); ?>
									<?=form_input('email',set_value('email'),array('class'=>'email-slider','placeholder'=>'Student Email Address'));?>

								<label class="email-box-pops">Password</label>
								<?php //echo form_error('password','<p class="text-danger">','</p>'); ?>
									<?=form_password('password','',array('class'=>'email-slider','placeholder'=>'Password','maxlength'=>'15'));?>

								 <ul>
									<li>
										<input type="checkbox" id="brand2" value="">
										<label for="brand2" style="margin-top:17px;"><span></span>Remember me</label>
									</li>

								</ul>
								<a href="<?=site_url('student/password/forget');?>" style="float:right;margin-top:12px; ">Forgot password?</a>
								<div class="row">
									  <div class="text-center Login-ins">
										<button type="submit" id="submit-slider1" name="submit" class="btn btn-primary btn btn-default  send-btns logins-btn btn-block login-f">Login</button>
									  </div>
							   </div>
			             	<?php echo form_close();?>

                                      <!--<div class="reg agileits w3layouts w3-login-popup">
                                      <h3>Not a member?</h3>
                                      </div>-->
                                      <div class="reg agileits w3layouts">
                                       <span style="color: #000;font-size: 14px;font-weight: bold;">Not a member?</span>
                                      <a class="popup-with-zoom-anim hvr-underline-from-left w3-login-popups" href="<?=site_url('student/signup');?>">
                                      <span>Register Here</a>
                                      </div>
								<div class="clear"></div>
			</div>
	 </div>
					<div class="tab-1 resp-tab-content" aria-labelledby="tab_item-1">
						<div class="loginx agileits">
								<?=form_open('teacher/signin')?>
									<label class="email-box-pops">Email</label>

									<?php //echo form_error('email','<p class="text-danger">','</p>'); ?>
									<?=form_input('email',set_value('email'),array('class'=>'email-slider','placeholder'=>'Teacher Email Address'));?>
									<label class="email-box-pops">Password</label>
									<?php //echo form_error('password','<p class="text-danger">','</p>'); ?>
									<?=form_password('password','',array('class'=>'email-slider ','placeholder'=>'Password','maxlength'=>'15'));?>
									<ul>
										<li>
											<input type="checkbox" id="brand3" value="">
											<label for="brand3" style="margin-top:17px;"><span></span>Remember me</label>
										</li>

									</ul>
									<a href="<?=site_url('teacher/password/forget');?>" style="float:right; margin-top:12px;">Forgot password?</a>
									<div class="row">
										  <div class="text-center Login-ins">

											<?=form_submit('Login','Login','class="btn btn-primary btn btn-default  send-btns logins-btn btn-block login-f"')?>
										  </div>
										</div>

			 					  <?php echo form_close();?>



                                    <!--<div class="reg agileits w3layouts w3-login-popup">
                                    <h3>Not a member?</h3>
                                    </div>-->
                                    <div class="reg agileits w3layouts">
                                     <span style="color: #000;font-size: 14px;font-weight: bold;">Not a member?</span>
                                    <a class="popup-with-zoom-anim hvr-underline-from-left w3-login-popups" href="<?=site_url('teacher/signup');?>">
                                    <span>Register Here</a>
                                    </div>
										<div class="clear"></div>

					    </div>

				 </div>
	</div>
	   </div>
		</div>
	   </div>
        </div>
        <div class="cta demo-1">

            <span class="icon"></span>
        <p> <span style="display: table-caption;">Welcome to <span style="color:#007aff">theOnline</span><span style="color:#f47629">Gurukul</span> </span></p>
             <button type="button" class="close close-icon close-sign" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" class="fadeandscale_close fand-clase"><img src="<?php echo base_url('assets/web/images/close-pop.png');?>" alt="close-pop.png"></span>
            </button>
        </div>
            </div>
        </div>
    </div>
</div>

<!--online quiz-->

<div class="couponCode" data-sm-init="true">
    <div class="row">
      <div class="col-md-3 col-sm-12 col-xs-12">
        <div class="exit-popup-sprite exit-popup-sprite1"></div>
      </div>
      <div class="col-md-9 col-sm-12 col-xs-12" style="margin-top: 5px;">
        <h2 class="h1-responsive text-uppercase">Instruction</h2>

         <div class="row">

          <div class="col-md-10 col-sm-12 col-xs-12 text-uppercase p-l-0_ins_quiz">
            <img src="https://marketplace.canva.com/MAB_Od_qEcQ/1/thumbnail_large/canva-arrow-icon-direction-button-pointer-sign-MAB_Od_qEcQ.png"
			style="margin-top: 5px; width: 14px;">
            <p>Click the 'Submit Test' button given in the bottom of this page to Submit your answers.</p>
          </div>
        </div>
        <div class="row">

          <div class="col-md-10 col-sm-12 col-xs-12 text-uppercase p-l-0_ins_quiz">
            <img src="https://marketplace.canva.com/MAB_Od_qEcQ/1/thumbnail_large/canva-arrow-icon-direction-button-pointer-sign-MAB_Od_qEcQ.png"
			style="margin-top: 5px; width: 14px;">
            <p>Test will be submitted after time is Expired.</p>
          </div>
        </div>
         <div class="row">

          <div class="col-md-10 col-sm-12 col-xs-12 text-uppercase p-l-0_ins_quiz">
            <img src="https://marketplace.canva.com/MAB_Od_qEcQ/1/thumbnail_large/canva-arrow-icon-direction-button-pointer-sign-MAB_Od_qEcQ.png"
			style="margin-top: 5px; width: 14px;">
            <p>Do not refresh the Page.</p>
          </div>
        </div>
        </div>


      </div>


	<div class="row">
	 <div class="col-md-12 col-sm-12 col-xs-12 btn_quizs">
<div class="sm-couponCode btn_quiz" data-sm-couponCode-text="Start Test"></div>
   </div>
    </div>
</div>
<!--select the class popup-->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header select_board">
            <button type="button" class="close close-icon close-sign close-pop-nin" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="fadeandscale_close fand-clase"><img src="<?php echo base_url('assets/web/images/close-pop.png');?>" alt="close-pop.png"></span>
                    </button>

            <h3 class="select_boards">Select Board & Class</h3>
          </div>
      <div class="modal-body">
        <form method="post" action='' name="login_form">
                         <div class="form-group margin-form">
                <div class="form-group margin-form">
							<select id='sel_boards' class="form-control input-sm  SlectBox" name="country">
                             <option selected="selected">Select Board </option>
							<option>CBSE</option>
							<option>ICSE</option>
							<option value="mercedes">STATE BOARD</option>				
							 </select>    
                </div>
                <div class="form-group margin-form">
              <!--      <input type="text" class="form-control input-sm" id="state" name="state" placeholder="State"> -->
                   <select id='sel_grades' class="form-control input-sm  SlectBox" name="state"  placeholder="this is placeholder">
                        <option selected="selected">select Grade</option>
						<option>8th Grade</option>
						<option>9th Grade</option>
						<option>10th Grade</option>
						<option>11th Grade</option>
						<option>12th Grade</option>
                    </select>
              
                </div>
            </div>
              </p>
            
      </div>
      <div class="modal-footer">
        <input type="button" class="btn btn-primary" value="submit" id="select_board_class" onclick="select_board1();"></button>
      </div>
	  </form>
    </div>
  </div>
</div>

<!-- end select the class popup-->
<!-- JQUERY SCRIPTS -->

<script src="<?=base_url('assets/web/plugins/jquery/jquery-1.11.1.min.js');?>"></script>
<!-- <script src="<?php //echo base_url('assets/web/js-new/online-quiz.js');?>"></script> -->
<!--<script src="https://theonlinegurukul.com/assets/web/tab.js"></script>-->
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js'></script>
<script src='https://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.js'></script>
<script type="text/javascript" src="<?=base_url('assets/web/js/modernizr.custom.04022.js');?>"></script>
<!--<script src="<?=base_url('assets/web/js/particles.min.js');?>"></script> -->
<script type="text/javascript" src="<?=base_url('assets/web/js/jQuery.easyTabs.js');?>"></script>
<!--<script src="<?=base_url('assets/web/js/particles_2.js');?>"></script>-->
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.2/particles.min.js"></script>-->
<script type="text/javascript" src="<?=base_url('assets/web/js/calendar.js');?>"></script>
<script src="<?=base_url('assets/web/js/parallax.js');?>"></script>
<script src="<?=base_url('assets/web/js/jquery.dd.js');?>"></script>
<script src="<?=base_url('assets/web/js/calendar.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/bootstrap/js/bootstrap.min.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/flexslider/jquery.flexslider.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/rs-plugin/js/jquery.themepunch.tools.min.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/selectbox/jquery.selectbox-0.1.3.min.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/pop-up/jquery.magnific-popup.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/animation/waypoints.min.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/count-up/jquery.counterup.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/animation/wow.min.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/animation/moment.min.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/calender/fullcalendar.min.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/owl-carousel/owl.carousel.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/timer/jquery.syotimer.js');?>"></script>
<script src="<?=base_url('assets/web/plugins/smoothscroll/SmoothScroll.js');?>"></script>
<script src="<?=base_url('assets/web/js/custom.js');?>"></script>
<script src="<?=base_url('assets/web/js/easyResponsiveTabs.js');?>" type="text/javascript"></script>
<!--<script src="<?=base_url('assets/web/js/owl.carousel-mob.min.js');?>"></script>-->
<script src="https://js.pusher.com/4.0/pusher.min.js"></script>
<script>

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



</script>
<script>
$(function() {
  /* var INDEX = 0;
  $("#chat-submit").click(function(e) {
    e.preventDefault();
    var msg = $("#chat-input").val();
    if(msg.trim() == ''){
      return false;
    }
    generate_message(msg, 'self');
    var buttons = [
        {
          name: 'Existing User',
          value: 'existing'
        },
        {
          name: 'New User',
          value: 'new'
        }
      ];
    setTimeout(function() {
      generate_message(msg, 'user');
    }, 1000)

  }) */

  /* function generate_message(msg, type) {
    INDEX++;
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);
    if(type == 'self'){
     $("#chat-input").val('');
    }
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
  } */

  /* function generate_button_message(msg, buttons){
   Buttons should be object array
    [
      {
        name: 'Existing User',
        value: 'existing'
      },
      {
        name: 'New User',
        value: 'new'
      }
    ]
   
    INDEX++;
    var btn_obj = buttons.map(function(button) {
       return  "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\""+button.value+"\">"+button.name+"<\/a><\/li>";
    }).join('');
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg user\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "          <div class=\"cm-msg-button\">";
    str += "            <ul>";
    str += btn_obj;
    str += "            <\/ul>";
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
    $("#chat-input").attr("disabled", true);
  } */

  $(document).delegate(".chat-btn", "click", function() {
    var value = $(this).attr("chat-value");
    var name = $(this).html();
    $("#chat-input").attr("disabled", false);
    generate_message(name, 'self');
  })

  $("#chat-circle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })

  $(".chat-box-toggle").click(function() {
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  });
  $(document).ready(function(){
	$('.chat-box-toggle').click(function(){
     $("#cm-msg-1,#cm-msg-2").hide().fadeOut();
	});
});
$(document).ready(function(){
	 var ses_id = ("<?php echo $this->session->userdata('chatter_id');?>")?("<?php echo $this->session->userdata('chatter_id');?>"):"";
	if(ses_id==""){
		$('.chat-logs,.chat-input,.chat-box-overlay').css("display","none")
	}else{
		$('.chat-input,.chat-logs,chat-box-overlay').css("display","block");
		$('#subcribe_forms').css("display","none");
	}

	$('.subcribe_chat').click(function(){
		  var userval = $('#useremailer').val();
		  if(userval==""){
			$('.chat-input,.chat-logs,chat-box-overlay').css("display","none");
		  }else{
			 $('.chat-input,.chat-logs,chat-box-overlay').css("display","block");
			 $('#subcribe_forms').css("display","none"); 
		  }
		  //$('span#sess_name').text(userval);
	});
});


</script>
  <script>
  $(function(){
	  $('#userchatregister').on('click',function(){
		  var userval = $('#useremailer').val();
		  alert(userval);
		  $('span#sess_name').text(userval);
		 
	  });
  });
  </script>
<script type="text/javascript">
$(document).ready(function()
    {
        // Stop user to press enter in textbox
        $("input:text").keypress(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
                return false;
            }
        });
});
	// Enable pusher logging - don't include this in production
	$(window).on('load',function(){
		     var ses_id = ("<?php echo $this->session->userdata('chatter_id');?>")?("<?php echo $this->session->userdata('chatter_id');?>"):"";
	        $.ajax({
	          url: "<?php echo site_url('Chat/fetch_message_on_reload'); ?>",
	          type: 'POST',
	          data:{
	          userid    : ses_id,
	           },
	          success:function(response)
	          { 
			    //$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
				//alert(response);
				var height = 0;
			$('.chat-logs div').each(function(i, value){
				height += parseInt($(this).height());
			});
			height += '';
			$(".chat-logs").animate({ scrollTop: height });

				$('#appendchat').append(response);
					//$('#chat-input').val("");	
				
	          }    
          	});
	});
	$(document).ready(function(){
		Pusher.log = function(message) {
			if (window.console && window.console.log) {
				window.console.log(message);
			}
		};

		var pusher = new Pusher('191dbef1780135573650');
		var channel = pusher.subscribe('chatglobal');

		channel.bind('my_event', function(data) {
			
			sendmessage(data);
		});
		channel.bind('appendponline', function(data) {
			appendponline(data);
		});
		function appendponline(data){
	
			html = '';
			html += '<div id="cm-msg" class="chat-msg user">';
			html += ' <span class="msg-avatar">';
			html += ' <img src="<?=base_url('assets/web/char-icons/icon2.png');?>">';
			html += ' </span>';
			html += '<div class="cm-msg-text">';
			html += '<div class="header_sec">';
			html += ' <strong class="primary-font">'+data.username+'</strong>';
			html += '</div>';
			html += '</div>';
			html += '</div>';
			//$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
			var height = 0;
			$('.chat-logs div').each(function(i, value){
				height += parseInt($(this).height());
			});
			height += '';
			$(".chat-logs").animate({ scrollTop: height });
			$('#appendponline').append(html);
				//$('#chat-input').val("");

		}
		function sendmessage(data){
			//var ses_id = <?php //echo $this->session->userdata('chatter_id');?>;
			var height = 0;
				$('.chat-logs div').each(function(i, value){
					height += parseInt($(this).height());
				});
				height += '';
				
			var ses_id = ("<?php echo $this->session->userdata('chatter_id');?>")?("<?php echo $this->session->userdata('chatter_id');?>"):"";
			//alert(ses_id);
			//alert(data.id);
			if(data.id == ses_id){
				html = '';
				html += '<div id="cm-msg" class="chat-msg user">'; 
				html += ' <span class="msg-avatar">'; 
				html += '<img src="<?=base_url('assets/web/char-icons/icon2.png');?>">'; 
				html += '</span>'; 
				html += '<div class="chat-body1 clearfix">'; 
				html += '<p class="cm-msg-text">'+data.message+'</p>'; 
				html += '<div class="chat_time">'+data.date+'</div>'; 
				html += '</div>'; 
				html += '</div>';
				//$(".chat-logs").animate({ scrollTop: $(document).height() },  document.body.scrollTop);
				//$(".chat-logs").animate({ scrollTop: $(document).height() },  document.body.scrollTop);
				$(".chat-logs").animate({ scrollTop: height });
				$('#appendchat').append(html);
				$('#chat-input').val("");
				
			}else{
				html = '';
				html += '<div id="cm-msg" class="chat-msg user">';
				html += ' <span class="msg-avatar">'; 
				html += '<img src="<?=base_url('assets/web/char-icons/f125_11-512.png');?>" class="chat_img_right">'; 
				html += '</span>'; 
				html += '<div class="chat-body1 chat_right clearfix">'; 
				html += '<p class="cm-msg-text cm-msg-text-me">'+data.message+'</p>'; 
				html += '<div class="chat_time">'+data.date+'</div>'; 
				html += '</div>'; 
				html +=  '</div>';
				 //$(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);
				 $(".chat-logs").animate({ scrollTop: height });
				$('#appendchat').append(html);
				$('#chat-input').val("");
			}
		}

		$('#sendchat').click(function(){
	        message = $('#chat-input').val();
	        $.ajax({
	          url: "<?php echo site_url('Chat/chatsend'); ?>",
	          type: 'POST',
	          data:{
	          message : message, 
	           },
	          success:function()
	          { 
	          }    
          	});
		});
		$('#updateuser').click(function(){
	        email    = $('#email').val();
	        password = $('#password').val();
	        username = $('#username').val();
	        $.ajax({
	          url: "<?php echo site_url('Chat/update_user'); ?>",
	          type: 'POST',
	          data:{
	          email    : email, 
	          password : password, 
	          username : username, 
	           },
	          success:function()
	          { 
	          	location.reload();
	          }    
          	});
		});
		$('#userchatregister').click(function(){
			var emailer = $('#useremailer').val();
			if(emailer==""){	
				 alert("username cant be blank");
			}
	        else{
				$('span#sess_name').text(emailer);
			//alert(emailer);
				$.ajax({
				  url: "<?php echo site_url('Chat/chatregister'); ?>",
				  type: 'POST',
				  data:{
				  emailer:emailer, 
				   },
				  success:function(response)
				  { 
				  //alert(response);
				  //console.log(response);
				  }    
				});
			}
		});
	});
	
</script>

		<script type="text/javascript">
			
			function DropDown(el) {
				this.dd = el;
				this.placeholder = this.dd.children('span');
				this.opts = this.dd.find('ul.dropdown > li');
				this.val = '';
				this.index = -1;
				this.initEvents();
			}
			DropDown.prototype = {
				initEvents : function() {
					var obj = this;

					obj.dd.on('click', function(event){
						$(this).toggleClass('active');
						return false;
					});

					obj.opts.on('click',function(){
						var opt = $(this);
						obj.val = opt.text();
						obj.index = opt.index();
						obj.placeholder.text(obj.val);
					});
				},
				getValue : function() {
					return this.val;
				},
				getIndex : function() {
					return this.index;
				}
			}

			$(function() {

				var dd = new DropDown( $('#dd') );

				$(document).click(function() {
					// all dropdowns
					$('.wrapper-dropdown-3').removeClass('active');
				});

			});

		</script>
<script>
		( function( $ ) {
$( document ).ready(function() {
	//$('#cssmenu ul li ul:first').css('display','block');
    //$('#cssmenu ul li .mycustomchild').css('display','block'),	
	$('#cssmenu ul li ul').first().css('display','block');	
$('#cssmenu > ul > li > a').click(function() {
  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
});
	
	
	
	/*var subjname1 = [];
    $('.my_cus_drop1 li a').each(function(){
        subjname1.push($(this).text());
    });

   //alert(subjname1);
   $.each(subjname1, function (index,value){
            //alert(value); 
  
    

	$('.my_cus_drop1 li a').click(function(){
		$(this).each(function(){
			var subjname = $(this).text();
			//alert(subjname);
			//if(value == subjname)
			//$('ul#nav_faq li.nav_faq1 a').trigger('click');	
		 if ($.inArray(subjname,value)!='0') 
           	$('li#science a').trigger('click');
		   
		});
	});
   });*/
var subjname1=new Array();
subjname1 = $('#my_cus_drop li a').text();
//alert(subjname1);
	$('#my_cus_drop li a').click(function(){
		$(this).each(function(){
			var subjname = $(this).text();
			//alert(subjname);
			if(subjname == 'Science')
			$('li#science a').trigger('click');
		   else if( subjname == 'Hindi')
			 $('li#hindi a').trigger('click');  
		 else if( subjname == 'English')
			  $('li#english a').trigger('click');  
		  else
			   $('li#maths a').trigger('click');
		});
	});
  	
	
   // $('.form-group.form_html input[type="checkbox"]').click(function(){
         // if($(this).is(":checked")){
			  // alert("hii");
			  // $('#course_9').css("display", "block");
			 // $('#course_8').hide();
			
		  // }
			 // else if($(this).not(":checked")){
			 // $('#course_8').css("display", "block");
			  // $('#course_9').css("display", "none");
			// }
		
	// });
	
	
/* 	$('.form-group input[type="radio"]').click(function(){
		alert("hii");
         
		
	}); */

	/* $("#page_reload").click(function(){
		 $.ajax({
			  url: "<?php echo base_url('home.php'); ?>",
             type: "POST",
			//url: '<?=site_url("http://localhost:81/theonlinegurukul-update/home");?>',
			success:function(response){
				alert(response);
			}
		}); 
		
	}); */

	
	
});
})( jQuery );
   
		</script>

		<script>
              function select_board1(){
					var sel_board = document.getElementById('sel_boards').value;
					var sel_grade = document.getElementById('sel_grades').value;
					//alert(sel_board + " " + sel_grade);
	          }
		</script>

<script type="text/javascript">
$(document).ready(function () {
    $('#horizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true   // 100% fit in a container
    });
});

</script>
<script>
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
</script>
<script>
$(function () {
    $(".simple-tab").tabs({
        type: "click",
        speed: 300,
        animation: "slide"
    });
})
</script>
<script>
 $(document).ready(function() {
    $('#Carousel1').carousel({
        interval: 50000
    })
 });
</script>
<!-- <script type="text/javascript" src="<?=base_url('assets/web/js/bootstrap-multiselect.js');?>"></script>-->
<script type="text/javascript">
    $(document).ready(function() {
    /*    $('#example-getting-started1').multiselect();
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

</script>

	<script type="text/javascript">
        $(document).ready(function () {
            window.asd = $('.SlectBox').SumoSelect({ csvDispCount: 3, selectAll:true, captionFormatAllSelected: "Yeah, OK, so everything." });
			  window.asd = $('.SlectBox1a').SumoSelect({ csvDispCount: 3, selectAll:true, captionFormatAllSelected: "Yeah, OK, so everything." });
			   });
	</script>

	  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

  <script>
  $( function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "1960:2018"
    });
  } );
  </script>


          <script type='text/javascript'>
            // baseURL variable
            var baseURL= "<?php echo base_url();?>";

            $(document).ready(function(){

                // City change
                $('#sel_city').change(function(){
                    var city = $(this).val();

                    // AJAX request
                    $.ajax({
                        url:'<?=base_url()?>Web/getCityDepartment',
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
                        url:'<?=base_url()?>Web/getDepartmentUsers',
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
        </script>

<script>
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
</script>
<script type="text/javascript">
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
    $(document).ready(function(){
        $("#testimonial-slider").owlCarousel({
            items:2,
            itemsDesktop:[1000,2],
            itemsDesktopSmall:[979,2],
            itemsTablet:[768,1],
            pagination:false,
            navigation:true,
            navigationText:["",""],
            autoPlay:true
        });
    });
</script>
<script src="<?=base_url('assets/web/js/jquery.sumoselect.js');?>"></script>
<script src="<?=base_url('assets/web/player/js/strings.js');?>"></script>
<script src="<?=base_url('assets/web/player/js/px-video.js');?>"></script>
<!--<link href="<?=base_url('assets/web/options/optionswitch.css');?>" rel="stylesheet">
<script src="<?=base_url('assets/web/options/optionswitcher.js');?>"></script>-->


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-130185472-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-130185472-1');
</script>
<script>
$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});
</script>
</body>

</html>

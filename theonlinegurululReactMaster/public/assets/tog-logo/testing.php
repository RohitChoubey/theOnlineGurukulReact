<?php defined('BASEPATH')or exit('No Direct Access is Allowed');?>
<link rel="stylesheet" href="<?=base_url('assets/web/css_drop/style.css');?>">
<style>

.tab_course .nav-tabs{ border: none; }
.tab_course .nav-tabs li a{
box-shadow: 6px 0px 13px #ddd;
    text-align: center;
    width: 183px;
    padding: 9px 0px;
    margin-right: 10px;
    font-size: 14px;
    color: #114c83;
    text-transform: uppercase;
    /* border: 2px solid #e5e7e9; */
    border-radius: 0;
    overflow: hidden;
    z-index: 1;
    position: relative;
}
.tab_course .nav-tabs li a:hover,
.tab_course .nav-tabs li a:focus,
.tab_course .nav-tabs li.active a{
  background: transparent;
      border: 2px solid #ff850d;
    color: #fff;
}
.tab_course .nav-tabs li a:before{
    content: "";
    width: 500%;
    height: 0;
    background: #114c83;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    z-index: -1;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transition: all 0.3s ease-in-out 0s;
}
.tab_course .nav-tabs li a:hover:before,
.tab_course .nav-tabs li.active a:before{
  height: 250%;
    opacity: 1;
}
.tab_course .tab-content{
    padding: 6px 0px;
    margin-top: 10px;
    font-size: 15px;
    color: #fff;
    line-height: 27px;
    letter-spacing: 1px;
    <!--background: #3a506b;-->
    position: relative;
}
.tab_course .tab-content:before{
  
    border-top: 30px solid #fff;
    border-bottom: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    top: 0;
    left: 0;
}
.tab_course .tab-content:after{
    content: "";
    border-bottom: 30px solid #fff;
    border-top: 30px solid transparent;
    border-left: 30px solid transparent;
    position: absolute;
    bottom: 0;
    right: 0;
}
@media only screen and (max-width: 479px){
    .tab_course .nav-tabs li{
        width: 100%;
        text-align: center;
        margin-bottom: 15px;
    }
    .tab_course .nav-tabs li:last-child{ margin-bottom: 0; }
    .tab_course .nav-tabs li a:hover:before,
    .tab_course .nav-tabs li.active a:before{ height: 400%; }
}
.tab_course .nav-tabs li.active:after {
  content: ""!important;
    position: absolute!important;
    
    left: 37%!important;
    border: 13px solid transparent!important;
    border-top-color: #ff850d!important;
}


.tab-content .tab-pane {
    border: none;
    padding: 0px;
    background: none;
    line-height: 0px;
}
.sc_course{
	display:inline;
	width:20px;
}
 .widget-content {
    padding: 30px 0 30px 30px;
}
.single-blog-post {
    position: relative;
    z-index: 1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    margin-bottom: 5px;
}
.single-blog-post.post-style-2 {
    margin-bottom: 5px;
}
.single-blog-post .post-thumbnail {
    position: relative;
    z-index: 1;
}
.single-blog-post.post-style-2 .post-thumbnail {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 97px;
    flex: 0 0 97px;
    min-width: 97px;
    margin-right: 15px;
}
.single-blog-post.post-style-2.widget-post .post-thumbnail {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 70px;
    flex: 0 0 70px;
    min-width: 70px;
    margin-right: 15px;
}
.single-blog-post .post-thumbnail img {
    width: 100%;
}
.single-blog-post.post-style-2 .post-content {
    padding: 5px 30px 5px 5px;
}
.single-blog-post.post-style-2 .post-content .headline h5 {
    font-size: 14px;
    margin-bottom: 0!important;
}
.rat_color{
	margin-top: -6px;
    font-size: 11px;
    color: #007aff;
    line-height: 18px;
}
.rat_colors{color:#222; line-height: 18px;}

.r_notes {
    color: #929292;
    font-size: 0.8125em;
}	
.content_about_sub_course {
    height: 95px;
    display: flex;
    padding: 5px;
	position: relative;
    overflow: hidden;
    
}
.icon_left_home_sub_course {
    float: left;
    /* width: 35px; */
    /* height: 35px; */
    /* line-height: 50px; */
    border: none;
    border-radius: 50%;
    text-align: center;
}
.right_detail_sub_course {
    margin-top: -5px;
    float: left;
    width: calc(100% - 50px);
    margin-left: 10px;
}
.editCourseClass {
   font-weight: 500;
    float: right;
    text-align: right;
    margin: 11px 5px 0px 0px;
    color: #000;
    font-size: 16px;
    padding-right: 15px;
    position: relative;
}

.customEditIcn {
  font-size: 20px;
    /* font-size: 0.75em; */
    padding-left: 10px;
    color: #007aff;
    cursor: pointer;
}
.tabs_course_list{
	    box-shadow: 8px 7px 18px #ddd;
    /* padding: 11px 35px; */
    position: relative;
    padding-bottom: 0;
    <!--border: 2px solid #dce4ea;-->
}
.courseDbHdr_edits {
    position: relative;
   
  
    /* padding-bottom: 0; */
}
.courseDbHdr_edits h5 {
    font-size: 1.3em;
    color: #000;
    font-weight: 400;
    margin: 8px 0px 8px 32px;
    display: inline-block;
    vertical-align: top;
}
.tab_course .nav-tabs {
   height: 60px;
    padding: 0px 34px;
    border: none;
}
.courses_left{
	padding: 12px 12px;
    box-shadow: 0 7px 10px #ddd;
    background-color: #fafafa;
    background-image: -moz-linear-gradient(top, #f6f6f6, #ffffff);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#f6f6f6), to(#ffffff));
    background-image: -webkit-linear-gradient(top, #f6f6f6, #ffffff);
    background-image: -o-linear-gradient(top, #f6f6f6, #ffffff);
    background-image: linear-gradient(to bottom, #f6f6f6, #ffffff);
   
}	



.form-group.form_html {
  display: block;
  margin-bottom: 15px;
}

.form-group.form_html input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.form-group.form_html label {
 font-weight: 500;
    position: relative;
    cursor: pointer;
    color: #114c83;
}

.form-group.form_html label:before {
     content: '';
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid #222222;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 7px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 5px;
}

.form-group.form_html input:checked + label:after {
  content: '';
    display: block;
    position: absolute;
    top: 0px;
    left: 6px;
    width: 6px;
    height: 14px;
    border: solid #0079bf;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}



input[type="radio"] + .label-text:before{
	content: "\f10c";
	font-family: "FontAwesome";
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	-webkit-font-smoothing:antialiased;
	width: 1em;
	display: inline-block;
	margin-right: 5px;
}

input[type="radio"]:checked + .label-text:before{
	content: "\f192";
	color: #8e44ad;
	animation: effect 250ms ease-in;
}

input[type="radio"]:disabled + .label-text{
	color: #aaa;
}

input[type="radio"]:disabled + .label-text:before{
	content: "\f111";
	color: #ccc;
}
 input[type="radio"]{
	position: absolute;
	right: 9000px;
}

@keyframes effect{
	0%{transform: scale(0);}
	25%{transform: scale(1.3);}
	75%{transform: scale(1.4);}
	100%{transform: scale(1);}
}
#course_9{
	display:none;
}
.section_details{
	position:relative;
}
.shape-wrapper {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
 .shape-center, .shape-left, .shape-right, .shape-top {
    position: absolute;
    max-width: 560px;
}
.shape-right {
    right: 0;
    left: 51vw;
    top: 90px;
}
.shape-background {
    background-color: #f9fbfd;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 120px;
    z-index: -1;
}
.shape-background.shape-right {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 0;
    left: 180%;
}
@media (min-width: 768px)
{
.shape-background.shape-right {
    left: 120%;
}
}
@media (min-width: 992px)
{
.shape-background.shape-right {
    left: 88%;
}
}
.bg-4 {
    background-color: #028fff!important;
}
.top {
    top: 0;
}
.op-1 {
    opacity: .1;
}
.top {
    top: 0!important;
}
.shape-left {
    left: 0;
    top: 200px;
}
.shape-background.shape-left {
    -webkit-transform: rotate(-43deg);
    transform: rotate(-43deg);
    left: -400px;
    max-width: 750px;
    top: -182px;
}
.board_grade_text h1{
	color:#ff6600;
}
.board_grade_text p{
	font-weight:500px;
}
.extending-core .shape-background.shape-left {
    left: -320px;
    -webkit-box-shadow: 0 0 60px 0 rgba(100,111,121,.05);
    box-shadow: 0 0 60px 0 rgba(100,111,121,.05);
    max-width: 100%;
}
.shape-main {
    bottom: 0;
    opacity: 1;
   <!-- width: 170%;
    height: 150%;-->
    background-color: #9f55ff;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: translate(20%,0) rotate(-30deg);
    transform: translate(20%,0) rotate(-30deg);
    position: absolute;
}
@media (min-width: 768px)
{
.header-v8 .shape-main {
    width: 140%;
}
}
@media (min-width: 992px)
{
.header-v8 .shape-main {
    bottom: -40px;
    width: 120%;
}
}
@media (min-width: 1200px)
{
.header-v8 .shape-main {
    width: 110%;
}
}
.main_right{
background-color: #007aff30;
    -webkit-transform: translate(19%,10px) rotate(-30deg);
    transform: translate(30%,-316px) rotate(17deg);
}
.shape-main.shadow {
   background-color: #0060b124;
    -webkit-transform: translate(19%,10px) rotate(-30deg);
    transform: translate(15%,-296px) rotate(-25deg);
}

</style>

<!--<button type="button" id="page_reload" value="pages"> page_reload</button>-->
<section class="section_details">
<div class="shape-wrapper">
<div class="shape shape-background main_right"></div>
<div class="shape shape-background shape-main shadow"></div>
<div class="shape shape-background shape-right"></div>
<div class="shape shape-background top shape-left bg-4 op-1"></div>
</div>
<div class="courses_section">
				<div class="container">
					<div class="row">
						     <div class="col-xs-12 col-sm-9 col-lg-9 courses_right" id="course_8">
							     <div class="courses_right_inner padding-border-right">
                                    <div class="row">
									<div class="board_grade_text">
										<h1>CBSE Class 8 Science</h1>
										<p>We have put the combined expertise of skilled professionals and the best of technology to create effective CBSE Class 12 Science study material. Our aim is to create comprehensive study material for CBSE Class 12 Science students, while catering to their learning objectives. Subjects like CBSE Class 12 Science, including Physics, Chemistry, Biology, Maths, English and Economics have been simplified so that students fare well in their Board exams. Extensive practice questions and assessment based on Class 12 Science curriculum further assures the same.</p>
								   </div>
								   </div>
								   </div>
            <div class="tab_course" role="tabpanel">
                <!-- Nav tabs -->
				<div class="tabs_course_list">
				   <div class="courseDbHdr_edits" style="">
					<h5>Courses</h5>
					<div class="editCourseClass"><span id="dashCurrGrade">CBSE VIII</span><i class="fa fa-edit customEditIcn" data-toggle="modal" data-target="#exampleModal"></i>
					</div>
	            </div>
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active" id = 'maths'><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">Mathematics</a></li>
                    <li role="presentation" id = 'science'><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">Science</a></li>
                    <li role="presentation" id = 'english'><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">English</a></li>
					<li role="presentation" id ='hindi'><a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab">Hindi</a></li>
					
                </ul>
				</div>
				
                <!-- Tab panes -->
				  <div class="row" style="margin-right:0px;margin-left:0px;">
                <div class="tab-content tabs">
				  <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                               <div class="row">
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Rational Numbers</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Linear Equations in One Variable</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                            <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Linear Equations in One Variable</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                   </div>
								      <div class="row" style="margin-top:12px;">
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Understanding Quadrilaterals	</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Practical Geometry</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                            <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Data Handling</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                   </div>
								   </div>
                    <div role="tabpanel" class="tab-pane fade" id="Section2">
                        
                               <div class="row">
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Crop Production and Management</h5>
                                                           <p class="rat_color" style="line-height: 18px;">TTopics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Microorganisms : Friend and Foe</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                            <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Synthetic Fibres and Plastics</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                   </div>
								      <div class="row" style="margin-top:12px;">
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Materials : Metals and Non-Metals</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Coal and Petroleum</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                            <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Combustion and Flame</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                   </div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="Section3">
                            <div class="row">
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">The Best Christmas Present in the World</h5>
                                                           <p class="rat_color" style="line-height: 18px;">TTopics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">The Tsunami</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                            <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Glimpses of the Past</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                   </div>
								      <div class="row" style="margin-top:12px;">
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Bepin Choudhury's Lapse of Memory	</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">The Summit Within</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                            <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">This is Jody's Fawn	</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                   </div>
                    </div>
					 <div role="tabpanel" class="tab-pane fade" id="Section4">
                             <div class="row">
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">ध्वनि</h5>
                                                           <p class="rat_color" style="line-height: 18px;">TTopics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">लाख की चूड़ियाँ</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                            <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">बस की यात्रा</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                   </div>
								      <div class="row" style="margin-top:12px;">
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">दीवानों की हस्ती</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">चिट्ठियों की अनूठी दुनिया	</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                            <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">भगवान के डाकिए	</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                   </div>
                    </div>
                </div>
            </div>
   </div>   
</div>
 <div class="col-xs-12 col-sm-9 col-lg-9 courses_right" id="course_9">
							     <div class="courses_right_inner padding-border-right">
                                    <div class="row">
									<div class="board_grade_text">
										<h1>CBSE Class 9 Science</h1>
										<p>We have put the combined expertise of skilled professionals and the best of technology to create effective CBSE Class 12 Science study material. Our aim is to create comprehensive study material for CBSE Class 12 Science students, while catering to their learning objectives. Subjects like CBSE Class 12 Science, including Physics, Chemistry, Biology, Maths, English and Economics have been simplified so that students fare well in their Board exams. Extensive practice questions and assessment based on Class 12 Science curriculum further assures the same.</p>
								   </div>
								   </div>
								   </div>
            <div class="tab_course" role="tabpanel">
                <!-- Nav tabs -->
				<div class="tabs_course_list">
				   <div class="courseDbHdr_edits" style="">
					<h5>Courses</h5>
					<div class="editCourseClass"><span id="dashCurrGrade">CBSE VIII</span><i class="fa fa-edit customEditIcn" data-toggle="modal" data-target="#exampleModal"></i>
					</div>
	            </div>
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active" id = 'maths'><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">Mathematics</a></li>
                    <li role="presentation" id = 'science'><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">Science</a></li>
                    <li role="presentation" id = 'english'><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">English</a></li>
					<li role="presentation" id ='hindi'><a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab">Hindi</a></li>
					
                </ul>
				</div>
				
                <!-- Tab panes -->
				  <div class="row" style="margin-right:0px;margin-left:0px;">
                <div class="tab-content tabs">
				  <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                               <div class="row">
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Rational Numbers</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Linear Equations in One Variable</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                            <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Linear Equations in One Variable</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                   </div>
								      <div class="row" style="margin-top:12px;">
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Understanding Quadrilaterals	</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                           <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Practical Geometry</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                            <div class="col-md-4 mt-30">
        									<div class="clean_top feature-box_sub">
        										<div class="content_about_sub_course">
        											<div class="icon_left_home_sub_course" style="border:none;">
        											<img src="https://colorlib.com/preview/theme/world/img/blog-img/b11.jpg" alt="Mathematics" class="img-responsive img-thumbnail">
        											</div>
        											<div class="right_detail_sub_course">
        												<h5 class="rat_colors">Data Handling</h5>
                                                           <p class="rat_color" style="line-height: 18px;">Topics, Revision Notes and 2 Tests</p>
        											</div>
													
        										</div>
        									</div>
                                           </div>
                                   </div>
								   </div>
                    <div role="tabpanel" class="tab-pane fade" id="Section2">
                        <h3>Section 21</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna aliquam, ornare eros vel, malesuada lorem. Nullam faucibus lorem at eros consectetur lobortis. Maecenas nec nibh congue, placerat sem id, rutrum velit. Phasellus porta enim at facilisis condimentum. Maecenas pharetra dolor vel elit tempor pellentesque sed sed eros. Aenean vitae mauris tincidunt, imperdiet orci semper, rhoncus ligula. Vivamus scelerisque.</p>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="Section3">
                        <h3>Section 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna aliquam, ornare eros vel, malesuada lorem. Nullam faucibus lorem at eros consectetur lobortis. Maecenas nec nibh congue, placerat sem id, rutrum velit. Phasellus porta enim at facilisis condimentum. Maecenas pharetra dolor vel elit tempor pellentesque sed sed eros. Aenean vitae mauris tincidunt, imperdiet orci semper, rhoncus ligula. Vivamus scelerisque.</p>
                    </div>
					 <div role="tabpanel" class="tab-pane fade" id="Section4">
                        <h3>Section 4</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec urna aliquam, ornare eros vel, malesuada lorem. Nullam faucibus lorem at eros consectetur lobortis. Maecenas nec nibh congue, placerat sem id, rutrum velit. Phasellus porta enim at facilisis condimentum. Maecenas pharetra dolor vel elit tempor pellentesque sed sed eros. Aenean vitae mauris tincidunt, imperdiet orci semper, rhoncus ligula. Vivamus scelerisque.</p>
                    </div>
                </div>
            </div>
   </div>   
</div>
						<div class="col-xs-12 col-sm-3 col-lg-3 courses_left hidden-xs">
							<div class="courses_left_inner">
								<h3>Courses</h3>
								<ul>
									<section class="main">
										<div class="wrapper-demo">
											<div id="dd" class="wrapper-dropdown-3" tabindex="1">
												<span>Mathematics</span>
												<ul class="dropdown" id = "my_cus_drop">
													<li><a href="#"><i class="icon-envelope icon-large"></i>Mathematics</a></li>
													<li><a href="#"><i class="icon-truck icon-large"></i>Science</a></li>
													<li><a href="#"><i class="icon-plane icon-large"></i>Social Science</a></li>
													<li><a href="#"><i class="icon-plane icon-large"></i>Hindi</a></li>
													<li><a href="#"><i class="icon-plane icon-large"></i>English</a></li>
												</ul>
											</div>
										​</div>
			                        </section>							
									<div id='cssmenu'>
									<ul>
									<li class='has-sub active'><a href='#'><span>Assignments</span></a>
									  <ul class="mycustomchild">
											<li class=""><form class="">
											<div class="form-group form_html">
											<input type="checkbox" id="html">
											<label for="html">Class Test</label>
											</div>
											<div class="form-group form_html">
											<input type="checkbox" id="css">
											<label for="css">Unit Test</label>
											</div>
											<div class="form-group form_html">
											<input type="checkbox" id="javascript">
											<label for="javascript">Chapter Test</label>
											</div>
											</form></li>
									  </ul>
									</li>
									<li class='has-sub'><a href='#'><span>Chapters</span></a>
									  <ul>
										 <li>
										 <form>
											<div class="form-check radio_checks">
												<label class="">
													<input type="radio" name="radio" checked> <span class="label-text radio_chapters">Option 01</span>
												</label>
											</div>
											<div class="form-check radio_checks">
												<label style="margin-top:10px;">
													<input type="radio" name="radio"> <span class="label-text">Option 02</span>
												</label>
											</div>
										 </form>
									</li>
									</ul>
									</li>
									<li class='has-sub'><a href='#'><span>TextBook Solutions</span></a>
									  <ul>
										 <li>
										 <form>
											<div class="form-check">
												<label>
													<input type="radio" name="radio" checked> <span class="label-text">Option 01</span>
												</label>
											</div>
											<div class="form-check">
												<label style="margin-top:10px;">
													<input type="radio" name="radio"> <span class="label-text">Option 02</span>
												</label>
											</div>
										 </form>
									</li>
									</ul>
									</li>
										<li class='has-sub'><a href='#'><span>Tests</span></a>
									  <ul>
										 <li>
										 <form>
											<div class="form-check">
												<label>
													<input type="radio" name="rd" checked value="Science"> <span class="label-text">Science</span>
												</label>
											</div>
											<div class="form-check">
												<label style="margin-top:10px;">
													<input type="radio" name="rd" value="others"> <span class="label-text">Others</span>
												</label>
											
											</div>
										 </form>
										 	
									</li>
									</ul>
									</li>
										<li class='has-sub'><a href='#'><span>Syallbus</span></a>
									  <ul>
										 <li>
										 <form>
											<div class="form-check">
												<label>
													<input type="radio" name="radio"> <span class="label-text">Option 01</span>
												</label>
											</div>
											<div class="form-check">
												<label style="margin-top:10px;">
													<input type="radio" name="radio"> <span class="label-text">Option 02</span>
												</label>
											</div>
										 </form>
									</li>
									</ul>
									</li>
									</div>
								</ul>
								
							</div><!--end courses_left_inner-->
						</div><!--end courses_left-->
					</div>	
				</div>	
</div>								
</section>			
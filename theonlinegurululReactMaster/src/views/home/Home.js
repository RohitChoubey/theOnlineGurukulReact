import React from 'react';
import '../../css/sliderBoxStyle.css';
import '../../css/web/home_style.css';
// import PropTypes from 'prop-types';
import BenefitsCards from '../../components/home/BenefitsCards';
import { Link } from 'react-router-dom';

  const styles = {
    BenBgColor:  {
      backgroundColor: "#d8d8d8",
      padding: '12px 0px 42px',
    }
  }
 
const benefitsData = [
  {
    benIcon: "fa fa-commenting-o",
    benName: "REAL TIME INTERACTION",
    benContent: "Offer interactive Video session for knowledge transfer, meeting, webinar and training.",
  },
  {
    benIcon: "fa fa-bar-chart",
    benName: "Polling Result",
    benContent: "The instant polling system provided for feedback mechanism and better understanding.",
  },
  {
    benIcon: "fa fa-desktop",
    benName: "Learning Methodology",
    benContent: "theOnlineGurukul provides Traditional Method Of Learning With the help of Modern Technology.",
  },
  {
    benIcon: "fa fa-desktop",
    benName: "Ease of Learning",
    benContent: "Hassle free life for parents, No Travel, No Safety Concern, Eco Friendly & better time utilization for students.",
  },
  {
    benIcon: "fa fa-desktop",
    benName: "Cost Effective Learning",
    benContent: "Multiple Students in a class makes it feel like a regular tuition class with the added advantage of sitting at their home & having a very cost effective class.",
  },
  {
    benIcon: "fa fa-share-square-o",
    benName: "Media Sharing",
    benContent: "Real time media sharing in various format enhance the power of teaching and learning.",
  },
  {
    benIcon: "fa fa-bell-o",
    benName: "Notification",
    benContent: "Priority notifications of meeting and session always keeps you on the board.",
  },
  {
    benIcon: "fa fa-microphone",
    benName: "Recorded Session",
    benContent: "Recorded sessions can be used for later review and references.",
  },
  {
    benIcon: "fa fa-book",
    benName: "Updated Content",
    benContent: "Best and Latest study material available for teaching. Digital and 3D content for better understanding of concept.",
  },
];
    function Home() {
      
      return (
          <>  
             <div className="index-banner-container">
                <div className="bg-fullscrren-index">
                  <div className="override-overlayer">
                    <div className="index-banner-text">
                      <h1>What is <span style={{color: "#007aff"}}>theonline</span><span style={{color: "#f47629"}}>gurukul</span></h1>
                      <h2 className="heading2-top-hm" >Traditional Method Of Learning With the help of Modern Technology.</h2>
                    </div>
                      <div className="pencil-coure-ctn">
                        <div className="row" style={{margin:"0"}}>
                          <div className="col-sm-4 col-md-4 col-lg-2 change-left-side-fbtg">
                            <div className="left-side">
                              <div className="ls-button">
                                <Link to="/our-teachers"> <button type="button" name="button" className="btn btn-find-Teacher" > Find A Tutor </button></Link><br />
                                <Link to="/signup"> <button type="button" name="button" className="btn btn-become-tutor" > Become A Tutor</button> </Link><br />
                                <Link to="/testimonial"> <button type="button" name="button" className="btn btn-testimonials" > Testimonials </button> </Link><br />
                                <Link to="/gallery">
                                    <button type="button" name="button" className="btn btn-gallery text-white" > Gallery </button>
                                </Link>
                                    <br />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-8 col-md-8 col-lg-6">
                            <div className="row">
                              <div className="col-6 col-md-6">
                                <Link to="/courses-fees">
                                  <div className="corse-cdn-ct corse-cdn-ct1">
                                    Online Tuition Grade 1-12
                                    <br />
                                    <span>CBSE/</span>
                                    <span>ICSE/</span>
                                    <span>IB/ </span>
                                    <span>IGCSE</span>
                                  </div>
                                  <div className="corse-cdn-ct corse-cdn-ct2">
                                    Online Tuition <pre>Grade 1-12</pre>
                                    <span>CBSE/</span>
                                    <span>ICSE/</span>
                                    <span>IB</span>
                                  </div>
                                </Link>
                              </div>
                              <div className="col-6 col-md-6">
                                <Link to="/coding">
                                <div className="corse-cdn-ct">
                                  Coding / Programming <br />
                                  <span>Php/</span>
                                  <span>  Java/   </span>
                                  <span>  Python  </span>
                                </div>
                                </Link>
                              </div>
                              <div className="col-6 col-md-6">
                                <div className="corse-cdn-ct">
                                  <Link style={{pointerEvents: "none"}} to="/">Languages</Link><br />
                                  <span>  English/   </span>
                                  <span>  French/ </span>
                                  <span> Spanish/ </span>
                                  <span> German </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-6">
                                <div className="corse-cdn-ct">
                                  <Link style={{pointerEvents: "none"}} to="/">Professional Courses</Link><br />
                                  <span>  Data Science/  </span>
                                  <span>  IOT   </span>
                                </div>
                              </div>
                              <div className="col-6 col-md-6">
                                <div className="corse-cdn-ct">
                                  <Link style={{pointerEvents: "none"}} to="/">JEE & NEET</Link><br />
                                  <span>  1 /   </span>
                                  <span>  2 / </span>
                                  <span> 4 Year Foundation Course</span>
                                </div>
                              </div>
                              <div className="col-6 col-md-6">
                                <Link to="/crash-course">
                                  <div className="corse-cdn-ct  corse-cdn-ct1" >
                                  Crash Course (Term-2)<br />
                                  <span> CBSE Grade 10 & 12  </span>
                                  </div>
                                  <div className="corse-cdn-ct  corse-cdn-ct2" >
                                  Crash Course <pre>(Term-2)</pre>
                                  <span> CBSE Grade 10 & 12  </span>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 col-md-2 change-left-side-fbtg2">
                            <div className="left-side">
                              <div className="ls-button">
                                <div className="row">
                                  <div className="col-6 col-sm-12">
                                    <Link to="our-teachers"> <button type="button" name="button" className="btn btn-find-Teacher" > Find A Tutor </button></Link><br />
                                  </div>
                                  <div className="col-6 col-sm-12">
                                    <Link to="register-type"> <button type="button" name="button" className="btn btn-become-tutor" > Become A Tutor</button> </Link><br />
                                  </div>
                                  <div className="col-6 col-sm-12">
                                    <Link to="testimonial"> <button type="button" name="button" className="btn btn-testimonials" > Testimonials </button> </Link><br />
                                  </div>
                                  <div className="col-6 col-sm-12">
                                    <Link to="gallery">
                                      <button type="button" name="button" className="btn btn-gallery text-white" > Gallery </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="right-side-home-video">
                              <iframe width="343" height="264" title="tog_video"
                              src="https://www.youtube.com/embed/tqzYjmL4quc"></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="lv-class-container">
                  <div className="lv-center-text">
                    <h2>LIVE INTERACTIVE CLASSES</h2>
                  </div>
                  <div className="lv-img text-center">
                    <img src="assets/web/images/new-images/interactive-class.png" alt="interactive-classes" loading="lazy" />
                  </div>
                </div>

                <section className="pt-4 circle-1 Our_Clients_say_container">
                  <div className="success-story-ctn">
                    <h3 className="text-center pt-1 pb-3" >What Our Student Say..</h3>
                    <div className="container success-story-video">
                      <div className="owl-slider">
                        <div id="success-carousel" className="owl-carousel row">
                          <div className="item col-md-4 col-lg-4 col-sm-6">
                            <iframe title="studentReview1" src="https://www.youtube.com/embed/QRWtzaPG-OM"></iframe>
                          </div>
                          <div className="item col-md-4 col-lg-4 col-sm-6">
                            <iframe title="studentReview1" src="https://www.youtube.com/embed/ls6H_sRevfo"></iframe>
                          </div>
                          <div className="item col-md-4 col-lg-4 col-sm-6">
                            <iframe title="studentReview1" src="https://www.youtube.com/embed/PcRKkXrB250"></iframe>
                          </div>
                        </div>
                        </div>
                    </div>
                    <br />
                  </div>
                <div className="ourworks-box container pb-4 ">
                    <h3 className="mt-2" >What Our Parents Say..</h3>
                </div>

                <div className="container pb-5 position-relative">
                    <div id="demo" className="carousel slide position-relative" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className=""></li>
                            <li data-target="#demo" data-slide-to="1" className="active"></li>
                            <li data-target="#demo" data-slide-to="2" className=""></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item active carousel-item-left">
                                <div className="d-flex">
                                    <div className="col-lg-4 col-sm-12 col-12 d-flex flex-column">
                                        <Link to="#" className="introduce pb-3">
                                            <div className="flex-column-1">
                                                <p className="pr-2 pl-3 pt-2">Very nice experience and all the doubts are cleared very easily. The notes provided are very helpful which takes a lot of load off you and the amount of numericals.
                                                  This is the best place to be if you have problems in physics. Very interactive teacher and a jolly nature man😊</p>
                                            </div>
                                            <div className="flex-column-2 d-flex">
                                                <div className="pic p1"></div>
                                                <div className="information flex-column pl-3 pt-2">
                                                    <p>Sudha Vashist</p>
                                                    <p className="text-gray">Student</p>
                                                </div>
                                            </div>
                                            <span></span>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 col-12 d-flex flex-column">
                                        <Link to="#" className="introduce pb-3">
                                            <div className="flex-column-1">
                                                <p className="pr-2 pl-3 pt-2">It's good coaching centre for 12th standard students. Teachers are also very good, they are always ready to solve our problems.</p>
                                            </div>
                                            <div className="flex-column-2 d-flex">
                                                <div className="pic p2"></div>
                                                <div className="information flex-column pl-3 pt-2">
                                                    <p>Priyanka jena</p>
                                                    <p className="text-gray">Student</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 col-12 d-flex flex-column">
                                        <Link to="#" className="introduce pb-3">
                                            <div className="flex-column-1">
                                                <p className="pr-2 pl-3 pt-2">The Accounts teacher (Siddharth Sir) was very knowledgeable and had an excellent way of coaching. He helped building a good base for my son because of which my son has got 90% marks in 11th. All Thanks to Gurukul and teachers for providing good coaching to students.</p>
                                            </div>
                                            <div className="flex-column-2 d-flex">
                                                <div className="pic p3"></div>
                                                <div className="information flex-column pl-3 pt-2">
                                                    <p>Dhiraj Sharma</p>
                                                    <p className="text-gray">Parents</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-next carousel-item-left">
                                <div className="d-flex">
                                  <div className="col-lg-4 col-sm-12 col-12 d-flex flex-column">
                                      <Link to="#" className="introduce pb-3">
                                          <div className="flex-column-1">
                                              <p className="pr-2 pl-3 pt-2">TheOnlineGurukul has very good faculty. They provide very good quality education. My son is studying in Paris under IGSCE board and is taking classes from this institute. We are very satisfied.</p>
                                          </div>
                                          <div className="flex-column-2 d-flex">
                                              <div className="pic p4"></div>
                                              <div className="information flex-column pl-3 pt-2">
                                                  <p>Manish Mehta</p>
                                                  <p className="text-gray">Parents</p>
                                              </div>
                                          </div>
                                          <span></span>
                                      </Link>
                                  </div>
                                  <div className="col-lg-4 col-sm-12 col-12 d-flex flex-column">
                                      <Link to="#" className="introduce pb-3">
                                          <div className="flex-column-1">
                                              <p className="pr-2 pl-3 pt-2">This is the best  place for online teaching. The teachers here are very nice and professional...I am very happy to send my kids to this platform. The communication is excellent and the students can learn the concepts clearly...I would recommend all of you to take a demo class.</p>
                                          </div>
                                          <div className="flex-column-2 d-flex">
                                              <div className="pic p5"></div>
                                              <div className="information flex-column pl-3 pt-2">
                                                  <p>Manjusha Mittal</p>
                                                  <p className="text-gray">Parents</p>
                                              </div>
                                          </div>
                                      </Link>
                                  </div>
                                  <div className="col-lg-4 col-sm-12 col-12 d-flex flex-column">
                                      <Link to="#" className="introduce pb-3">
                                          <div className="flex-column-1">
                                              <p className="pr-2 pl-3 pt-2">The teachers are very good. They have their own unique teaching methods which not only make the lessons  interesting but also enjoyable.</p>
                                          </div>
                                          <div className="flex-column-2 d-flex">
                                              <div className="pic p6"></div>
                                              <div className="information flex-column pl-3 pt-2">
                                                  <p>Sanya khajuria</p>
                                                  <p className="text-gray">Parents</p>
                                              </div>
                                          </div>
                                      </Link>
                                  </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex">
                                  <div className="col-lg-4 col-sm-12 col-12 d-flex flex-column">
                                      <Link to="#" className="introduce pb-3">
                                          <div className="flex-column-1">
                                              <p className="pr-2 pl-3 pt-2">The online Gurukul is a nice Platform for Online Home Tuition. The website is very much User friendly and easily accessible for every aged people. The most special thing I find in this platform is it has the realtime support feature.</p>
                                          </div>
                                          <div className="flex-column-2 d-flex">
                                              <div className="pic p7"></div>
                                              <div className="information flex-column pl-3 pt-2">
                                                  <p>Dilip Kumar</p>
                                                  <p className="text-gray">Parents</p>
                                              </div>
                                          </div>
                                          <span></span>
                                      </Link>
                                  </div>
                                  <div className="col-lg-4 col-sm-12 col-12 d-flex flex-column">
                                      <Link to="#" className="introduce pb-3">
                                          <div className="flex-column-1">
                                              <p className="pr-2 pl-3 pt-2">Great Experience with Online Gurukul ,My Nephew joined This last month,I can see the Growth in his studies....I will Suggest People atleast allow their kids to to join Online Gurukul As the Teachers are Experienced in Panel and way of Teaching is Great....Keep it up Online Gurukul Team</p>
                                          </div>
                                          <div className="flex-column-2 d-flex">
                                              <div className="pic p8"></div>
                                              <div className="information flex-column pl-3 pt-2">
                                                  <p>Rahul kumar</p>
                                                  <p className="text-gray">Parents</p>
                                              </div>
                                          </div>
                                      </Link>
                                  </div>
                                  <div className="col-lg-4 col-sm-12 col-12 d-flex flex-column">
                                      <Link to="#" className="introduce pb-3">
                                          <div className="flex-column-1">
                                              <p className="pr-2 pl-3 pt-2">A user friendly platform, Online Home Tuition has been introduced to enhance one's proficiency. It can be easily accessed by anyone. Anyone can take its help to enhance one's capabilities. It's very useful for those who need online tuitions.</p>
                                          </div>
                                          <div className="flex-column-2 d-flex">
                                              <div className="pic p9"></div>
                                              <div className="information flex-column pl-3 pt-2">
                                                  <p>Pankaj Singh</p>
                                                  <p className="text-gray">Parents</p>
                                              </div>
                                          </div>
                                      </Link>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <Link className="carousel-control-prev" to="#demo" data-slide="prev" style={{opacity: "1", left: "-2%"}}>
                            <i className="fa fa-chevron-left" style={{color: "#5969f6", fontSize: "30px"}}></i>
                        </Link>
                        <Link className="carousel-control-next" to="#demo" data-slide="next" style={{opacity: "1", transform: "rotate(-180deg)", right: "-2%"}}>
                            <i className="fa fa-chevron-left" style={{color: "#5969f6", fontSize: "30px"}}></i>
                        </Link>
                    </div>
                </div>
                <div className="container">
                  <div className="count-tog-list-container text-center">
                    <div className="row">
                      <div className="col-sm-6 col-md-3">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <div className="digit-counter"><span className="tog-counter" data-count="1423200">1423200</span> <span>+</span> </div>
                        <p>Hours of Online Classes</p>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <i className="fa fa-users" aria-hidden="true"></i>
                        <div className="digit-counter"><span className="tog-counter" data-count="5000">5000</span> <span>+</span> </div>
                        <p>Register Students</p>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <div className="digit-counter"><span className="tog-counter" data-count="185">185</span> <span>+</span> </div>
                        <p>Cities Worldwide</p>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                        <div className="digit-counter"><span>4.9/5</span></div>
                        <p>Avg Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
              </section>
              <div  className="what_que_ans_list">
                <div  className="what-is-grl">
                  <div  className="what-is-grl-head text-center">
                    <h2> BENEFITS OF ONLINE TUITION CLASSES </h2>
                  </div>
                  <div  className="wh-is-content-section">
                      <div  className="container">
                        <div  className="row">
                          <div  className="col-lg-12 col-md-12">
                            <div  className="wh-contactPoint">
                              <p>
                                <span style={{color:"#007aff"}}>theOnline</span><span style={{color:"#f47629"}}>Gurukul</span>
                                is a global platform for learning and teaching online where students are mastering new skills and achieving their goals by learning with the help of best experienced tutors/Instructors.
                              </p>
                              <p>Don't have to step out for your day to day coaching classes, simply log in to <span style={{color:"#007aff"}}>theOnline</span><span style={{color:"#f47629"}}>Gurukul</span> and enjoy the hassle free daily coaching of any subject with one of the best faculty at very affordable prices.</p>
                              <p>Experience better interaction and smooth communication with the online gurukul tutors. Unlike classrooms, a student won’t feel shy to ask questions and will be more comfortable chatting with the online tutor.</p>
                              <p>One of the striking benefits of online tuition is that the students get instant feedback from the tutor. In this way, they correct their mistakes on time, so that they can have better understanding of the problem.</p>
                              <p>Sending a child out for a late evening tuition can make parents worry about their safety as they are not mature enough to deal with the hardships of life. In this scenario, online tuition comes as a saviour as it lets a child study inthe comfort of the home at any time.</p>
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                      <div  className="yoga_container">
                        <div  className="container">
                          <div  className="wh-yoga-ct text-center">
                            <br />
                            <h4>Healthy Mind Stays in Healthy Body</h4>
                            <br />
                          </div>
                          <div  className="row">
                            <div  className="col-lg-6 col-md-6">

                              <div  className="wh-yoga-para">
                                <p><span style={{color:"#007aff"}}>theOnline</span><span style={{color:"#f47629"}}>Gurukul</span> provide Yoga classes that helps you to take care your health.<br />
                                Yoga is integrative approach brings deep harmony and unshakable balance to body and mind in order to awaken our latent capacity for a higher consciousness that is the true purpose of human evolution. The many methods of yoga spans a vast range from physical postures to breathing practices and meditation, all based upon a philosophy of consciousness and natural way of life.</p>
                              </div>
                            </div>
                            <div  className="col-lg-6 col-md-6">
                              <div  className="wh-yoga-solid-cd">
                                <div  className="wh-yogaregister_btn">
                                  <Link to="/register-type">
                                    <button type="button" name="button">
                                      <i  className="fa fa-hand-o-right" aria-hidden="true"></i> Register For Free Online Yoga Session
                                    </button>
                                  </Link>
                                </div>
                                <div  className="yoga-slideshow-container">
                                  <div  className="yoga1-img">
                                    <img src="assets/web/images/yoga/yoga7.webp" alt="yoga1" loading="lazy" />
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
              <div className="benBgColor" style={styles.BenBgColor}>
                <div className="container">
                  <div className="row">
                    <BenefitsCards benefitsData={benefitsData} />
                  </div>
                </div>
              </div>
              <div className="stdBoxContainer">
                <div  className="interested-container">
                  <div  className="container">
                    <div  className="interested-cus-style">
                      <div  className="row" style={{alignItems:"center"}}>
                        <div  className="col-lg-2 col-md-2">
                          <div  className="int-cu-img">
                            <img src="assets/web/images/webp-img/parent_meet.webp" alt="interested-st-teac" loading="lazy" />
                          </div>
                        </div>
                        <div  className="col-lg-10 col-md-10">
                          <div  className="int-cu-para">
                            <p>Interested in getting 1-on-1 classes with a personal Teacher?</p>
                            <p>For Students Studying in CBSE, ICSE, IGCSE, IB & State Boards.</p>
                          </div>
                        </div>
                      </div>
                      <Link to="/demo-Request">
                        <div  className="inst-book-btn">
                          <button type="button" name="button"><span>Book a free trial class</span> </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>




              <div  className="order-system-container">
                <div  className="container">
                  <div  className="eos-style">
                      <div  className="eos-headline text-center">
                        <h4>Easy Ordering System</h4>
                      </div>
                      <div  className="eos-core-access">
                        <div  className="row">
                          <div  className="col-lg-6 col-md-6">
                            <div  className="eos-circle-img-request">
                              <section>
                                <Link to="/login">
                                  <div  className="eos-request-co-img">
                                    <img src="assets/web/images/webp-img/request_a-course.webp" alt="course_request" loading="lazy"/>
                                  </div>
                                </Link>
                                <p>Request A Course</p>
                              </section>
                            </div>
                          </div>
                          <div  className="col-lg-6 col-md-6">
                            <div  className="eos-circle-img-access">
                              <section>
                                <Link to="/login">
                                  <div  className="eos-request-access-img">
                                    <img src="assets/web/images/webp-img/access-classes.webp" alt="class_access" loading="lazy"/>
                                  </div>
                                </Link>
                                <p>Access the classes</p>
                              </section>
                            </div>
                          </div>
                        </div>
                        <div  className="eos-ci-padding">
                          <div  className="row">
                            <div  className="col-lg-6 col-md-6 orange-circle-center orange-circle-center1">
                              <section>
                                <Link to="/login">
                                  <div  className="cap-eos-icon">
                                    <i  className="fa fa-desktop" ></i>
                                  </div>
                                </Link>
                              </section>
                            </div>
                            <div  className="col-lg-6 col-md-6 orange-circle-center orange-circle-center2">
                              <section>
                                <Link to="/login">
                                  <div  className="cap-eos-icon cap-eos-icon-class">
                                    <i  className="fa fa-file" ></i>
                                  </div>
                                </Link>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div  className="reg_info_for_user">
                <div  className="container">
                  <h3 style={{color:"blue",fontWeight:"bold"}}><span><b>Note: </b></span> We do not take any charges for teacher registration.</h3>
                </div>
              </div>
              <br></br>
        </>
      )
    }

export default Home



  // const benbox = benefitsData.map(function(datalist){
  //   return  <BenefitsCards benIcon={datalist.benIcon} benName={datalist.benName} benContent={datalist.benContent } />;
  // })

  // BenefitsCards.PropTypes = {benIcon: PropTypes.string.isRequired, benName: PropTypes.string.isRequired, benContent:PropTypes.string.isRequired }
  BenefitsCards.defaultProps = {
    benIcon: 'fa fa-question-circle ',
    benName: 'Set the Benefits Title',
    benContent: 'Set the Benefits Content',
  }

  
import React,{ useState } from 'react';
import '../../css/web/faqs_style.css';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Faqs() {
  const [Que_isActive, set_Que_Active] = useState("panel-collapse collapse");
  const Toggle_QUESTIONS_Style = (e) => {
    // alert()
    const answer = e.currentTarget.href;
    const answer_array = answer.split('#');
    const getclassname = document.getElementById(answer_array[1]);
    if (getclassname.className !== "panel-collapse collapse") {
      set_Que_Active("panel-collapse collapse");
      document.getElementById(answer_array[1]).className = "panel-collapse collapse in"
    }
    else if(getclassname.className === "panel-collapse collapse in"){
      alert()
      set_Que_Active("panel-collapse collapse");
    }
    else{
      set_Que_Active("panel-collapse collapse");
    }
     
   };
  return (
    <>
      <div className="faqs_sevicss_cd">
          <div className="services services-login1 services-logins ">
            <div className="container">
                <div className="row clearfix">
                    <div className="col-xs-12">
                        <div className="group-title-index">
                            <h2 className="center-title">Frequently Asked Questions</h2>
                            <div className="bottom-title"><i className="bottom-icon icon-a-1-01-01 fa fa-book"></i></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingOne">
                                    <h4 className="panel-title">
                                        <a role="button" onClick={Toggle_QUESTIONS_Style} data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What is <i>TheOnlineGurukul.com</i>?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseOne"  className={Que_isActive +"in"} role="tabpanel" aria-labelledby="headingOne">
                                    <div className="panel-body">
                                        <p>
                                            <b style={{color:"#ffa500"}}>TheOnlineGurukul.com</b> is a platform where students and tutors connect with each other. This platform provides qualified private tutors to help the students in their studies
                                            at desired location.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingThree">
                                    <h4 className="panel-title">
                                        <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What is so special about TheOnlineGurukul ?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseThree"  className={Que_isActive} role="tabpanel" aria-labelledby="headingThree">
                                    <div className="panel-body">
                                        <p>
                                            <b style={{color:"#ffa500"}}>Theonlinegurukul</b> has been developed with the core idea of real time interaction as a conventional classroom with latest technology and updated content at the desired
                                            location. it also provides a secure environment, better time management and hassle free life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingFour">
                                    <h4 className="panel-title">
                                        <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            How can I register as a student?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseFour" className={Que_isActive} role="tabpanel" aria-labelledby="headingFour">
                                    <div className="panel-body">
                                        <p>
                                            Browse <b style={{color: "#ffa500"}}>TheOnlineGurukul.com</b>, go to the registration section, Select Tuition and register as a student. Confirm your registration through a verification link sent to your
                                            given mail id.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="headingFive">
                                    <h4 className="panel-title">
                                        <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            How can I apply for tuition ?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapseFive" className={Que_isActive} role="tabpanel" aria-labelledby="headingFive">
                                    <div className="panel-body">
                                        <p>
                                            After successful registration, login as a student go to the Program offered sections, select the required class, click on the Find Subject and make a request for the desired subject.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading91">
                                    <h4 className="panel-title">
                                        <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse91" aria-expanded="false" aria-controls="collapse91">
                                            How will I get confirmation against my tuition request ?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse91" className={Que_isActive} role="tabpanel" aria-labelledby="heading91">
                                    <div className="panel-body">
                                        <p>
                                            On your request, support team will contact you for finalizing the class schedule and communicate you the fee details and mode of payment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="panel panel-default">
                                <div className="panel-heading" role="tab" id="heading92">
                                    <h4 className="panel-title">
                                        <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse92" aria-expanded="false" aria-controls="collapse92">
                                            But you did not tell me how much it would cost ?
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse92" className={Que_isActive} role="tabpanel" aria-labelledby="heading92">
                                    <div className="panel-body">
                                        <p>
                                            The tuition fee will be calculated per class bases, payable monthly/quarterly or yearly basis as per duration of the course.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="gallery-item picture">
                            <img src="https://www.theonlinegurukul.com/assets/web/images/faqs.png" className="img-responsive" alt="abc" style={{width: "100%"}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="faqs_sevicss_cd">
          <div className="services-login1 services-logins" style={{paddingTop: "2px"}}>
              <div className="container">
                  <div className="row clearfix">
                      <div className="col-xs-12">
                          <div className="group-title-index">
                              <h2 className="center-title">Frequently Asked Questions</h2>

                              <div className="bottom-title"><i className="bottom-icon icon-a-1-01-01 fa fa-book"></i></div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6">
                          <div className="gallery-item picture">
                              <img src="https://www.theonlinegurukul.com/assets/web/images/faqs.png" className="img-responsive" alt="faqs-tog" style={{width: "100%"}} />
                          </div>
                      </div>

                      <div className="col-md-6">
                          <div className="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">
                              <div className="panel panel-default">
                                  <div className="panel-heading" role="tab" id="headingOne1_student">
                                      <h4 className="panel-title">
                                          <a role="button" onClick={Toggle_QUESTIONS_Style} data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1_student" aria-expanded="true" aria-controls="collapseOne1">
                                              How can I make the payment ?
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapseOne1_student" className={Que_isActive +"in"}  role="tabpanel" aria-labelledby="headingOne1_student">
                                      <div className="panel-body">
                                          <p>
                                              Payment can be transferred into the given bank account through online and convey the transaction id to <span style={{color: "#ffa500"}}><a href="mailto:info@example.com">info@theonlinegurukul.com</a></span>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div className="panel panel-default">
                                  <div className="panel-heading" role="tab" id="headingTwo1_student">
                                      <h4 className="panel-title">
                                          <a className="collapsed"  onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapseTwo1_student" aria-expanded="false" aria-controls="collapseTwo1_student">
                                              When my class will start ?
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapseTwo1_student" className={Que_isActive} role="tabpanel" aria-labelledby="headingTwo1_student">
                                      <div className="panel-body">
                                          <p>On the successful payment, the support team will activate your sessions. Login to your account on schedule time and click on the link to join the class.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="panel panel-default">
                                  <div className="panel-heading" role="tab" id="headingThree1_student">
                                      <h4 className="panel-title">
                                          <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapseThree1_student" aria-expanded="false" aria-controls="collapseThree1_student">
                                              Do you verify your tutors ?
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapseThree1_student" className={Que_isActive} role="tabpanel" aria-labelledby="headingThree1_student">
                                      <div className="panel-body">
                                          <p><b style={{color: "#ffa500"}} >Theonlinegurukul</b>, profiles are shortlisted as per the criteria and interviewed by Board of expert members.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="panel panel-default">
                                  <div className="panel-heading" role="tab" id="headingFour1_student">
                                      <h4 className="panel-title">
                                          <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapseFour1_student" aria-expanded="false" aria-controls="collapseFour1_student">
                                              Where does the tutoring take place ?
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapseFour1_student" className={Que_isActive} role="tabpanel" aria-labelledby="headingFour1_student">
                                      <div className="panel-body">
                                          <p>It is a virtual classroom, student can attend from any desired location if you have good Internet connectivity.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="panel panel-default">
                                  <div className="panel-heading" role="tab" id="headingFive1_student">
                                      <h4 className="panel-title">
                                          <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapseFive1_student" aria-expanded="false" aria-controls="collapseFive1_student">
                                              What happen if I miss the class?
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapseFive1_student" className={Que_isActive} role="tabpanel" aria-labelledby="headingFive1_student">
                                      <div className="panel-body">
                                          <p>Recorded sessions will be available online for a period of 15 days from the date of the class. After 15 days recorded session can be made available on special request.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="panel panel-default">
                                  <div className="panel-heading" role="tab" id="headingSix1_student">
                                      <h4 className="panel-title">
                                          <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion1" href="#collapseSix1_student" aria-expanded="false" aria-controls="collapseSix1_student">
                                              What if the tutor miss the class?
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapseSix1_student" className={Que_isActive} role="tabpanel" aria-labelledby="headingSix1_student">
                                      <div className="panel-body">
                                          <p>Support team will reschedule the class with the consent of tutor and student.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="faqs_sevicss_cd">
          <div className="services-login1 services-logins" style={{paddingTop: "2px"}}>
              <div className="container">
                  <div className="row clearfix">
                      <div className="col-xs-12">
                          <div className="group-title-index">
                              <h2 className="center-title">Frequently Asked Questions</h2>

                              <div className="bottom-title"><i className="bottom-icon icon-a-1-01-01 fa fa-book"></i></div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6">
                          <div className="gallery-item picture">
                              <img src="https://www.theonlinegurukul.com/assets/web/images/faqs.png" className="img-responsive" alt="faqs-tog" style={{width: "100%"}} />
                          </div>
                      </div>

                      <div className="col-md-6">
                          <div className="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
                              <div className="panel panel-default">
                                  <div className="panel-heading" role="tab" id="headingOne1_teacher">
                                      <h4 className="panel-title">
                                          <a role="button" onClick={Toggle_QUESTIONS_Style} data-toggle="collapse" data-parent="#accordion2" href="#collapseOne1_teacher" aria-expanded="true" aria-controls="collapseOne1_teacher">
                                              I am a Parent, looking a tutor for my child. How can I contact you ?
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapseOne1_teacher" className={Que_isActive +"in"}  role="tabpanel" aria-labelledby="headingOne1_teacher">
                                      <div className="panel-body">
                                          <p>
                                              Getting in touch with us is simple, go to our website Theonlinegurukul.com and fill and submit the contact form with the profile "Parent". Support team will contact you for assistance. You can also
                                              contact us at +91-9899416555,+91-9899406555,+62-81281320491 (office hours).
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <div className="panel panel-default">
                                  <div className="panel-heading" role="tab" id="headingTwo1_teacher">
                                      <h4 className="panel-title">
                                          <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo1_teacher" aria-expanded="false" aria-controls="collapseTwo1">
                                              Why should I take 12 months subscription ?
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapseTwo1_teacher" className={Que_isActive} role="tabpanel" aria-labelledby="headingTwo1_teacher">
                                      <div className="panel-body">
                                          <p>There is no subscription fee. The fee is calculated on the bases of a number of classes as per subject.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="panel panel-default">
                                  <div className="panel-heading" role="tab" id="headingThree1_teacher">
                                      <h4 className="panel-title">
                                          <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapseThree1_teacher" aria-expanded="false" aria-controls="collapseThree1_teacher">
                                              Is tutor registration free ?
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapseThree1_teacher" className={Que_isActive} role="tabpanel" aria-labelledby="headingThree1_teacher">
                                      <div className="panel-body">
                                          <p>Yes, the tutor registration is free of cost.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="panel panel-default">
                                  <div className="panel-heading" role="tab" id="headingFour1_teacher">
                                      <h4 className="panel-title">
                                          <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapseFour1_teacher" aria-expanded="false" aria-controls="collapseFour1_teacher">
                                              How to register as a tutor in your website?
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapseFour1_teacher" className={Que_isActive} role="tabpanel" aria-labelledby="headingFour1_teacher">
                                      <div className="panel-body">
                                          <p><a href="<?=site_url('teacher/signup')?>" target="blank">Click here</a> to register as a tutor and fill the registration form. tutor can also contact for registration.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="panel panel-default">
                                  <div className="panel-heading" role="tab" id="headingFive1_teacher">
                                      <h4 className="panel-title">
                                          <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapseFive1_teacher" aria-expanded="false" aria-controls="collapseFive1_teacher">
                                              I just registered as a tutor. What should I do next?
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapseFive1_teacher" className={Que_isActive} role="tabpanel" aria-labelledby="headingFive1_teacher">
                                      <div className="panel-body">
                                          <p>Awesome! You have taken the first step. If your profile matches the requirements, then support team will contact you and guide for further steps.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="panel panel-default">
                                  <div className="panel-heading" role="tab" id="headingSix1_teacher">
                                      <h4 className="panel-title">
                                          <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion2" href="#collapseSix1_teacher" aria-expanded="false" aria-controls="collapseSix1_teacher">
                                              Can I change/add my preferred subjects I want to teach after registration?
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapseSix1_teacher" className={Que_isActive} role="tabpanel" aria-labelledby="headingSix1_teacher">
                                      <div className="panel-body">
                                          <p>Yes, the preference can be changed/added to the consultation of the support team. The multiple subject can be added.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Faqs
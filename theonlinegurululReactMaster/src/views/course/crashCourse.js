import React, {useState} from 'react';
import '../../css/course/crashcourseStyle.css';
import '../../css/web/faqs_style.css';
import TeacherCard from '../../components/course/teacherCards'
import { Link } from 'react-router-dom';

function CrashCourse() {
    const[class10thtab,setClass10thtab] = useState();
    const[class112thtab,setClass12thtab] = useState('class12accordion');
    const[classtab10Active,setClasstab10Active] = useState('active-Class');
    const[classtab12Active,setClasstab12Active] = useState('');
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
   function class12_btn_cc(){
    setClasstab10Active('');
    setClasstab12Active('active-Class');
    setClass10thtab('class10thtablistnone');
    setClass12thtab('class12accordionblock');
   }
   function class10_btn_cc(){
    setClasstab12Active('');
    setClasstab10Active('active-Class');
    setClass10thtab('');
    setClass12thtab('class12accordion');
   }
  return (
    <>
    <div className="crash_course-container">
        <div className="cc-bg-container">
            <div className="container">
                <div className="cc-page-heading">
                    <h1 style={{marginBottom:'2px'}}>Crash Course (2021-22)</h1>
                </div>
                <div className="book-icon">
                    <span>-</span> <i className="fa fa-book"></i> <span>-</span>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="cc-box">
                            <div className="cc-box-heading">
                                <h3 style={{margin:0}}> Grade-10 CBSE/Term-2</h3>
                            </div>
                            <div className="cc-covered-sub-hour" style={{marginBottom:"51px"}}>
                                <div className="cc-covered-subj">
                                    <h4> <b>Subjects covered</b> </h4>
                                    <p>
                                        <button type="button" name="button" className="btn btn-info">Science</button>
                                        <button type="button" name="button1" className="btn btn-success">Maths</button>
                                    </p>
                                </div>
                                <div className="cc-covered-hour">
                                    <h4> <b>Duration </b> </h4>
                                    <p>
                                        40 Hours
                                    </p>
                                </div>
                            </div>

                            <div className="cc-fees">
                                <div className="pp-text">
                                    Course Fees
                                </div>
                                <div className="pp-prices">
                                    <p className="actual-prices">₹6,000</p>
                                    <span className="price_off">₹8,000 </span><span>25% off</span>
                                </div>
                            </div>
                            <div className="whatsapp-register">
                                <div className="whatsapp-cc">
                                    <Link target="_blank" rel="noopener noreferrer" to="https://wa.me/919899416555"><i
                                            className="fa fa-whatsapp" aria-hidden="true"></i> +91-9899416555</Link>
                                </div>
                                <div className="register_plan-btn">
                                    <Link to="/student-register" className="buy_plan-btn">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 class12-fees-stracture">
                        <div className="cc-box">
                            <div className="cc-box-heading">
                                <h3 style={{margin:0}}> Grade-12 CBSE/Term-2</h3>
                            </div>
                            <div className="cc-covered-sub-hour">
                                <div className="cc-covered-subj">
                                    <h4> <b>Subjects covered</b> </h4>
                                    <p>
                                        <button type="button" name="button2" className="btn btn-info">Physics</button>
                                        <button type="button" name="button3" className="btn btn-success">Chemistry</button>
                                        <button type="button" name="button4" className="btn btn-primary">Maths /
                                            Biology</button>
                                    </p>
                                </div>
                                <div className="cc-covered-hour">
                                    <h4> <b>Duration </b> </h4>
                                    <p>
                                        100 Hours
                                    </p>
                                </div>
                            </div>
                            <div className="cc-covered-subj">
                                <p>
                                    <button type="button" name="button5" className="btn btn-info">Accounts</button>
                                    <button type="button" name="button6" className="btn btn-success">Business Studies</button>
                                    <button type="button" name="button7" className="btn btn-primary">Economics</button>
                                </p>
                            </div>
                            <div className="cc-fees">
                                <div className="pp-text">
                                    Course Fees
                                </div>
                                <div className="pp-prices">
                                    <p className="actual-prices">₹13,500</p>
                                    <span className="price_off">₹18,000</span><span> 25% off</span>
                                </div>
                            </div>
                            <div className="whatsapp-register">
                                <div className="whatsapp-cc">
                                    <Link target="_blank" rel="noopener noreferrer" to="https://wa.me/919899416555"><i
                                            className="fa fa-whatsapp" aria-hidden="true"></i> +91-9899416555</Link>
                                </div>
                                <div className="register_plan-btn">
                                    <Link to="/student-register"    
                                        className="buy_plan-btn">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
        <div className="container faqs_sevicss_cd">
            <div className="row">
                <div className="col-md-6">
                    <div className="services-panel">
                        <div className="service-board">
                            <h2>Key Features:</h2>
                            <ul>
                                <li>LIVE Interactive online classes</li>
                                <li>Assignments and notes</li>
                                <li>Weekly Test and Analysis</li>
                                <li>Full Course Revision</li>
                                <li>Daily Practice paper</li>
                                <li>Daily Doubt Class</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                     <div className="panel-group12">
                        <div className="cc-syllabus-btn">
                            <button type="button" name="button10" onClick={class10_btn_cc} id="class10-btn-cc" className={classtab10Active + ' btn'} ><b>Class
                                    10</b> </button>
                            <button type="button" name="button12" onClick={class12_btn_cc} id="class12-btn-cc" className={classtab12Active + ' btn'}><b>Class 12</b> </button>
                        </div>
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h4 style={{margin:0}}><b> Syllabus Covered (Term-2)</b></h4>
                            </div>
                            <div className={class10thtab +' panel-group'}  id="accordion" role="tablist" aria-multiselectable="true" style={{padding: "14px 15px"}}>
                                <div className="panel panel-default">
                                    <div className="panel-heading  panelcrashheading" role="tab" id="headingOne">
                                        <h4 className="panel-title">
                                            <a role="button" onClick={Toggle_QUESTIONS_Style} data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Maths
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne"  className={Que_isActive +"in"} role="tabpanel" aria-labelledby="headingOne">
                                        <div className="panel-body cc-subj-topic" style={{padding: "6px 3px 0px 0px"}}>
                                            <ul>
                                                <li>Algebra</li>
                                                <li>Geometry</li>
                                                <li>Trigonometry</li>
                                                <li>Mensuration</li>
                                                <li>Statistics & Probability</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingThree">
                                        <h4 className="panel-title">
                                            <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Science
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseThree"  className={Que_isActive} role="tabpanel" aria-labelledby="headingThree">
                                        <div className="panel-body cc-subj-topic" style={{padding: "6px 3px 0px 0px"}}>
                                            <ul>
                                                <li>Chemical Substances- Nature and Behaviour</li>
                                                <li>World of Living</li>
                                                <li>Effects of Current</li>
                                                <li>Light - Reflection and Refraction</li>
                                                <li>Natural Resources</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                 
                            </div>
                            <div className= {class112thtab+ ' panel-group'}  id="accordion" role="tablist" aria-multiselectable="true" style={{padding: "14px 15px"}}>
                                 
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingFour">
                                        <h4 className="panel-title">
                                            <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Physics
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseFour" className={Que_isActive} role="tabpanel" aria-labelledby="headingFour">
                                        <div className="panel-body cc-subj-topic" style={{padding: "6px 3px 0px 0px"}}>
                                            <ul>
                                                <li>Electromagnetic Waves</li>
                                                <li>Optics </li>
                                                <li>Dual Nature of Radiation and Matter </li>
                                                <li>Atoms and Nuclei </li>
                                                <li>Electronic Devices </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="headingFive">
                                        <h4 className="panel-title">
                                            <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Chemistry
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseFive" className={Que_isActive} role="tabpanel" aria-labelledby="headingFive">
                                        <div className="panel-body cc-subj-topic" style={{padding: "6px 3px 0px 0px"}}>
                                            <ul>
                                                <li>Electrochemistry</li>
                                                <li>Chemical Kinetics </li>
                                                <li>Surface Chemistry </li>
                                                <li>d -and f -Block Elements </li>
                                                <li>Coordination Compounds </li>
                                                <li>Aldehydes, Ketones and Carboxylic Acids </li>
                                                <li>Amines </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="heading91">
                                        <h4 className="panel-title">
                                            <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse91" aria-expanded="false" aria-controls="collapse91">
                                            Biology
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapse91" className={Que_isActive} role="tabpanel" aria-labelledby="heading91">
                                        <div className="panel-body cc-subj-topic" style={{padding: "6px 3px 0px 0px"}}>
                                            <ul>
                                                <li>Biology and Human Welfare</li>
                                                <li>Biotechnology and its Applications</li>
                                                <li>Ecology and Environment: Chapters </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="heading92">
                                        <h4 className="panel-title">
                                            <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse92" aria-expanded="false" aria-controls="collapse92">
                                            Accountancy
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapse92" className={Que_isActive} role="tabpanel" aria-labelledby="heading92">
                                        <div className="panel-body cc-subj-topic" style={{padding: "6px 3px 0px 0px"}}>
                                            <ul>
                                                <li>Accounting for Not-For-Profit Organisations</li>
                                                <li>Accounting for Partnership Firm</li>
                                                <li>Retirement And Death Of A Partner</li>
                                                <li>Dissolution Of Partnership Firms</li>
                                                <li>Analysis of Financial Statement</li>
                                                <li>Financial Statement of a Company</li>
                                                <li>Computerized Accounting</li>
                                                <li>Using Computerised Accounting System</li>
                                                <li>Database Management System</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="heading92">
                                        <h4 className="panel-title">
                                            <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse93" aria-expanded="false" aria-controls="collapse92">
                                            Economic
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapse93" className={Que_isActive} role="tabpanel" aria-labelledby="heading92">
                                        <div className="panel-body cc-subj-topic" style={{padding: "6px 3px 0px 0px"}}>
                                            <ul>
                                                <li>Indian Economic Development</li>
                                                <li>Development Experience (1947-90) and Economic Reforms since 1991</li>
                                                <li>Current Challenges facing Indian Economy</li>
                                                <li>Development Experience of India – A Comparison with Neighbors</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="panel panel-default">
                                    <div className="panel-heading" role="tab" id="heading92">
                                        <h4 className="panel-title">
                                            <a className="collapsed" onClick={Toggle_QUESTIONS_Style} role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse94" aria-expanded="false" aria-controls="collapse92">
                                            Business studies
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapse94" className={Que_isActive} role="tabpanel" aria-labelledby="heading92">
                                        <div className="panel-body cc-subj-topic" style={{padding: "6px 3px 0px 0px"}}>
                                            <ul>
                                            <li>Principles and Functions of Management</li>
                                            <li>Staffing</li>
                                            <li>Directing</li>
                                            <li>Controlling</li>
                                            <li>Business Finance and Marketing</li>
                                            <li>Financial Management</li>
                                            <li>Financial Markets</li>
                                            <li>Consumer Protection</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="clip-container1">
            <div className="container">
                <div className="student-img-container">
                    <div className="student-img-headline text-center">
                        <h2 style={{marginBottom:'1px'}}>Our Teachers</h2>
                    </div>
                    <div className="book-icon">
                        <span>-</span> <i className="fa fa-book"></i> <span>-</span>
                    </div>
                    <div className="student-slide-images">
                        <div className="st-mover-1">
                            
                                <TeacherCard />
                                <TeacherCard />
                                <TeacherCard />
                                <TeacherCard />
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CrashCourse
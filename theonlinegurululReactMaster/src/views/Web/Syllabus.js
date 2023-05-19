import React from 'react'
import '../../css/web/syllsbusStyles.css';

const syllabusPDFSource = [
  { 
    title: '6TH-8TH Class',
    classpdf: [
      'assets/uploads/downloads/cbse/syllabus/6TH_8TH/CBSE_Syllabus_Maths_VI_VII_VIII.pdf',
      'assets/uploads/downloads/cbse/syllabus/6TH_8TH/CBSE_Syllabus_Sanskrit_VI_VII_VIII.pdf',
      'assets/uploads/downloads/cbse/syllabus/6TH_8TH/CBSE_Syllabus_Science_VI_VII_VIII.pdf',
      'assets/uploads/downloads/cbse/syllabus/6TH_8TH/CBSE_Syllabus_Social_Science_VI_VII_VIII.pdf',
   ]
  },
  { 
    title: '9TH-10TH Class',
    classpdf: [
      'assets/uploads/downloads/cbse/syllabus/6TH_8TH/COMPUTER_APPLICATION_SYLLABUS_9TH_10TH.pdf',
      'assets/uploads/downloads/cbse/syllabus/6TH_8TH/ELEMENTS_OF_BUSINESS_9TH_10_TH_2019_20.pdf',
      'assets/uploads/downloads/cbse/syllabus/6TH_8TH/MATHS_SYLLABUS_CLASS_9TH_10TH_2019_20.pdf',
      'assets/uploads/downloads/cbse/syllabus/6TH_8TH/SCIENCE_SYLLABUS_9TH_10TH_2019_20.pdf',
      'assets/uploads/downloads/cbse/syllabus/6TH_8TH/SOCIAL_SCIENCE_SYLLABUS_9TH_10TH_2019_20.pdf',
    ]
  }
]

function Syllabus() {
  return (
    <>  
        <div className="syllabusContainer">
          <div  className="about-area pt-145 pb-155">
            <div  className="container">
                <div  className="col-md-12 panel-body" style={{textAlign: "justify"}}>
                    <h1 style={{color: "#f60"}}>CBSE BOARD SYLLABUS</h1>
                    <p>
                        CBSE BOARD Syllabus is available for class 6 to 12 can be of great help for students being aware of what's coming in the school examinations.
                    </p>
                </div>
            </div>
          </div>
        <svg id="clouds" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
                d="M-5 100 Q 0 20 5 100 Z
            M0 100 Q 5 0 10 100
            M5 100 Q 10 30 15 100
            M10 100 Q 15 10 20 100
            M15 100 Q 20 30 25 100
            M20 100 Q 25 -10 30 100
            M25 100 Q 30 10 35 100
            M30 100 Q 35 30 40 100
            M35 100 Q 40 10 45 100
            M40 100 Q 45 50 50 100
            M45 100 Q 50 20 55 100
            M50 100 Q 55 40 60 100
            M55 100 Q 60 60 65 100
            M60 100 Q 65 50 70 100
            M65 100 Q 70 20 75 100
            M70 100 Q 75 45 80 100
            M75 100 Q 80 30 85 100
            M80 100 Q 85 20 90 100
            M85 100 Q 90 50 95 100
            M90 100 Q 95 25 100 100
            M95 100 Q 100 15 105 100 Z"
            ></path>
        </svg>
        <div  className="services services-how">
            <div  className="row clearfix row-spec">
                <div  className="col-xs-12">
                    <div  className="group-title-index">
                        <h2  className="center-title">Class Wise Syllabus</h2>
                        <div  className="bottom-title"><i  className="bottom-icon icon-a-1-01-01 fa fa-book"></i></div>
                    </div>
                </div>
            </div>
            <div  className="container">
                <div  className="services-top-grids">
                  { syllabusPDFSource.map((Pdfelement,index) => (
                    <div  className="col-md-12"> 
                        <div  className="grid1 grid1-courses" style={{height: "500px"}}>
                            <img src="assets/class_icon.png" alt="classicon1"/>
                            <h4>{Pdfelement.title}</h4>
                            <b>
                                <p style={{color: "#f60"}}>
                                    Free PDF downloadable link of CBSE Syllabus for each class will help students to perform excellently in exams. They can also join <span style={{color: "#000"}}>theOnline</span>
                                    <span style={{color: "#000"}}>Gurukul</span> for Live Online Home tuitions offered by some of India’s most experienced teachers.
                                </p>
                            </b>
                            <div className="col-md-12" id="my_canvas" style={{margin: "auto", paddingBottom: "10px", height: "280px", overflow: "scroll"}}>
                                {Pdfelement.classpdf.map((data,index)=>(
                                  <ul key={index.toString()} className="contact_info">
                                      <li>
                                          <a target="blank" href={data}>
                                              <i  className="bottom-icon icon-a-1-01-01 fa fa-book"></i>{data}
                                          </a>
                                      </li>
                                  </ul>
                                 ))}
                            </div>
                        </div>
                    </div>
                  )) }
                </div>
            </div>
        </div>

        <svg id="bigTriangleColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 0 L50 100 L100 0 Z" />
        </svg>
        <div  className="about-area pt-145 pb-155">
            <div  className="container">
                <div  className="col-md-12 panel-body" style={{textAlign: "justify"}}>
                    <h1 style={{color: "#f60"}}>BENEFITS OF SYLLABUS</h1>
                    <p>
                        CBSE Board Syllabus for each class will help students to practice well for examination. They can also join  <span style={{color: "#000"}}>theOnline</span>
                                    <span style={{color: "#000"}}>Gurukul</span>  for Live Online Home
                        tuitions offered by talented &amp; experienced teachers.
                    </p>
                    <span style={{color: "#f60", fontSize: "18px"}}> <b>Share this with your friends</b></span>
                    <a
                         className="td-social-sharing-buttons td-social-whatsapp"
                        rel="nofollow"
                        href="https://web.whatsapp.com/send?text=View%20and CBSE Syllabus for each Class with Solutions for FREE from here-syllabus"
                        target="blank"
                    >
                        <img  className="td-social-icon icon-whatsapp" src="assets/out-whattsapp.png" alt="Whatsapp" />
                    </a>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Syllabus
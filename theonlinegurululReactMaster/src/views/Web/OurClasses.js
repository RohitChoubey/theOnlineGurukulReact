import React from 'react';
import '../../css/web/ourClassesStyles.css';
import { Link } from 'react-router-dom';

function OurClasses() {
  return (
    <>
        <div className="ourclasses_container">
            <br />
            <section class="tab-container">
                <div class="container">
                    <div class="class-series-txt">
                    <h2>THE ONLINE GURUKUL CLASSES</h2>
                </div>
                    <div class="tabs" id="activetab-main">
                        <div class="tab1 tabclass activetab">
                            <p>UPCOMING SESSIONS</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="upcoming-class">
                <div class="container">
                    <div className="row">
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                            <div class="master-class-cart">
                                <div class="master-cart-padding">
                                    <div class="master-live-label">

                                    </div>
                                    <div class="topic-text">
                                        <Link to="#">
                                            <h3>Analyze your Skills</h3>
                                        </Link>
                                    </div>
                                    <div class="upcoming-class-date">
                                        <div class="topic-for-class">
                                            <span>Classes&nbsp;
                                                12TH-STANDARD
                                            </span>
                                        </div>
                                        <div class="topic-starting-time">
                                            <span id="time">
                                            1:10 PM, TUESDAY, 17 MAY 2022
                                            </span>
                                        </div>
                                        <hr class="horizontal" />
                                    </div>
                                    <div class="teacherName-text">
                                        <div class="teacher-for-class">
                                            <p style={{margin:"unset"}}>TAKEN BY</p>
                                            <span>SHWETA MISHRA</span>
                                        </div>
                                        <div class="topic-teacher-subject">
                                            <span id="sub-expert">
                                                MATHEMATICS Expert
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/demo-Request">
                                    <div class="join-class-btn">
                                        <h4 class="open-request-button" >Request for Demo <i class="fa fa-long-arrow-right arrow1"></i></h4>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>
 
        </div>
    </>
  )
}

export default OurClasses
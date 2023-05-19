import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/course/courseFeesStructureStyles.css';

function CourseFeesStructure() {
  return (
    <>
      <div className="course_fees_structure_container">
        <div className="fee_structure-bg">
                <div className="fees-structure container">
                    <br />
                    <div className="fess-page-heading">
                        <h1>Course Fees Structure</h1>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="subject-selector" id="Subjectbutton">
                                <div className="row button-header-button-wrapper">
                                    <div className="col-xs-4 col-sm-4 col-md-2 col-lg-1 subj-btn row-padding button-header-button-body active1 subjectbutton11" id="78">
                                        <p>
                                            <Link style={{pointerEvents: "none"}} to="/" >
                                                <button type="button" name="button" className="btn btn-success">MATHEMATICS</button>&nbsp;
                                                <button type="button" name="button" className="btn btn-success">SCIENCE</button>
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-2 col-lg-1 subj-btn row-padding button-header-button-body subjectbutton11" id="7">
                                        <p>
                                            <Link style={{pointerEvents: "none"}}  to="/"> <button type="button" name="button" className="btn btn-success">MATHEMATICS</button> </Link>
                                        </p>
                                    </div>
                                    <div className="col-xs-4 col-sm-4 col-md-2 col-lg-1 subj-btn row-padding button-header-button-body subjectbutton11" id="8">
                                        <p>
                                            <Link style={{pointerEvents: "none"}} to="/"> <button type="button" name="button" className="btn btn-success">SCIENCE</button> </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 price-cart 78prices" style={{display: "block"}}>
                            <div className="fs-flex">
                                <div className="cc-box">
                                    <div className="cc-box-heading">
                                        <h3 style={{margin: "0px"}}>Grade 9th CBSE Board</h3>
                                    </div>
                                    <div className="cc-covered-sub-hour" style={{marginBottom: "51px"}}>
                                        <div className="cc-covered-subj">
                                            <h4><b>Subjects covered</b></h4>
                                            <p>
                                                <button type="button" name="button" className="btn btn-primary">MATHEMATICS</button>
                                                <button type="button" name="button" className="btn btn-success">SCIENCE</button>
                                            </p>
                                        </div>
                                        <div className="cc-covered-hour">
                                            <h4><b>Batch Size </b></h4>
                                            <p>
                                                Upto 10
                                            </p>
                                        </div>
                                    </div>

                                    <div className="cc-fees">
                                        <div className="pp-text">
                                            Course Fees
                                        </div>
                                        <div className="pp-prices">
                                            <p className="actual-prices">₹22500</p>
                                            <span className="price_off">₹30000 </span><span>25% off</span>
                                        </div>
                                    </div>
                                    <div className="whatsapp-register">
                                        <div className="whatsapp-cc">
                                            <Link target="_blank" to="https://wa.me/919899416555"><i className="fa fa-whatsapp" aria-hidden="true"></i> +91-9899416555</Link>
                                        </div>
                                        <div className="register_plan-btn">
                                            <Link  to="/student-register" target="_blank" className="buy_plan-btn">Register</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                          
                    </div>
                </div>
                <br />
                <br />
            </div>
                <br />
                <br />
            
            <div className="container">
                <div className="one-to-one-session">
                    <div className="one-to-one-heading">
                        <h3>Let's Connect 1 to 1 Session</h3>
                        <br />
                    </div>
                    <div className="one-to-one-dropdown-container">
                        <div className="row">
                            <div className="col-md-3 col-sm-4">
                                <select className="form-control" name="class_name" id="select_bord" required="">
                                    <option value="">Select Board</option>
                                    <option value="CBSE">CBSE </option>
                                    <option value="ICSE"> ICSE </option>
                                    <option value="IB"> IB </option>
                                    <option value="IGCSE"> IGCSE </option>
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <select className="form-control" name="course_name" id="select_class" required="">
                                    <option value="">Select Class</option>
                                    <option value="01"> Class 01 </option>
                                    <option value="02"> Class 02 </option>
                                    <option value="03"> Class 03 </option>
                                    <option value="04"> Class 04 </option>
                                    <option value="05"> Class 05 </option>
                                    <option value="06"> Class 06 </option>
                                    <option value="07"> Class 07 </option>
                                    <option value="08"> Class 08 </option>
                                    <option value="09"> Class 09 </option>
                                    <option value="10"> Class 10 </option>
                                    <option value="11"> Class 11 </option>
                                    <option value="12"> Class 12 </option>
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <select className="form-control" name="course_name" id="select_course" required="">
                                    <option value="">Select Course</option>
                                </select>
                            </div>
                            <div className="col-md-3 col-sm-12 text-center">
                                <div className="col-md-8 col-sm-8">
                                    <a href="/student-register" id="book-a-session1" className="book-a-session"><button type="button" name="button" className="btn btn-info">Book a session</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="course-Overview" style={{display: "block"}}>
                                <div className="Overview-header">
                                    <h2>Description</h2>
                                </div>
                                <div className="Overview-txt">
                                    <span>
                                    As technology advances, we must too. every day, more individuals are employing online platforms in lieu of traditional methods to further their learning. theonlinegurukul helps students broaden their horizons and advance their skills by providing an online network through which studying is made enjoyable and easy! theonlinegurukul (www.theonlinegurukul.com) is a tutoring platform which connects students and teachers worldwide. our tutors have a wide range of expertise, which allows you to gain knowledge in every field, whether it be the IB or CBSE, mathematics or french.
                                    </span>
                                    <p></p>
                                    <h4>CBSE Class 9  Math Syllabus</h4>
                                    <span>
                                    Number Systems,Polynomials, Coordinate Geometry, Linear Equations in Two Variables, Introduction to Euclids Geometry, Lines and Angles, Triangles, Quadrilaterals,Areas of Parallelograms and Triangles,Circles , Constructions, Heron’s Formula,Surface Areas and Volumes, Statistics,Probability
                                    </span>
                                    <p></p>

                                    <h5>
                                    CBSE Class 9 Science Syllabus
                                    </h5>
                                    <span>
                                        Matter in Our Surroundings, Is Matter Around Us Pure, Atoms and Molecules, Structure of the Atom, The Fundamental Unit of Life, Tissues, Diversity in Living Organisms, Motion, Force and Laws of Motion, Gravitation, Work and Energy, Sound, Why Do We Fall Ill, Natural Resources, Improvement in Food Resources.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />

      </div>
    </>
  )
}

export default CourseFeesStructure

import React from "react";
import { Link } from "react-router-dom";
// import AuthContext from "../../context/AuthProvider";
import '../../css/student/headerstyle.css'


function StudentIndex(props) {
  // const { setAuth } = useContext(AuthContext);
  // const navigate = useNavigate();

   
  return (
    <>
        <div className="student_dashboard_header_container">
              <div id="header" className="navbar navbar-default">
                  <div style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                  <div class="menu-icon">
                    <span class="first"></span>
                    <span class="second"></span>
                    <span class="third"></span>
                  </div>
                  <div className="logo">
                      <Link className="navbar-brand" to="/">
                         <img src="../assets/20.png" style={{height:"35px",width:"65px"}} alt="logo1" />
                      </Link>
                  </div>
                    <nav className="ipad_hide">
                        <ul className="nav navbar-nav navbar-left" style={{marginTop: "14px"}}>
                          <li className="padding-right-0 padding-left-0">
                              <Link to="/Student/program" className="padding_navbar">
                                  <div className="r4_counter wid-stats db_box">
                                      <div className="stats-data">
                                          <div className="stats nav1">
                                              <h3>Tog offered programs</h3>
                                          </div>
                                      </div>
                                  </div>
                              </Link>
                          </li>

                          <li className="padding-right-0 padding-left-0">
                              <Link to="/Student/practice-question" className="padding_navbar">
                                  <div className="r4_counter wid-stats wid-stats_bg1 db_box wid-satus_violet" style={{background:"#428bca"}}>
                                    <div className="stats-data">
                                        <div className="stats nav5">
                                            <h3>Quiz</h3>
                                        </div>
                                        </div>
                                    </div>
                              </Link>
                          </li>
                          <li className="padding-right-0 padding-left-0 dropdown">
                              <a className="padding_navbar dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" href="/">
                                  <div className="r4_counter wid-stats wid-stats_bg1 db_box wid-stats_red">
                                      <div className="stats-data">
                                          <div className="stats nav3">
                                              <h3>Enrolled Courses <i className="fa fa-angle-down"></i></h3>
                                          </div>
                                      </div>
                                  </div>
                              </a>
                              <ul className="dropdown-menu dropdown-menu-default dropdown_student_sets">
                                  <li>
                                      <Link to="/Student/Courses" className="nav4_1">
                                          <i className="fa fa-fw fa-hand-o-right text-red"></i>
                                          Active Courses
                                      </Link>
                                      <Link to="/Student/course_schedule" className="nav4_2">
                                          <i className="fa fa-fw fa-hand-o-right text-red"></i>
                                          Course Schedule
                                      </Link>
                                  </li>
                              </ul>
                          </li>
                          <li className="padding-right-0 padding-left-0 dropdown">
                              <a className="dropdown-toggle padding_navbar" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" href="/">
                                  <div className="r4_counter wid-stats wid-stats_bg2 db_box">
                                      <div className="stats-data">
                                          <div className="stats nav4">
                                              <h3>Class Detail <i className="fa fa-angle-down"></i></h3>
                                          </div>
                                      </div>
                                  </div>
                              </a>
                              <ul className="dropdown-menu dropdown-menu-default dropdown_student_sets">
                                  <li>
                                      <Link to="/Student/upcoming-classes" className="nav4_1">
                                          <i className="fa fa-home"></i>
                                          Upcoming Sessions
                                      </Link>
                                      <Link to="/Student/past-classes" className="nav4_2">
                                          <i className="fa fa-edit"></i>
                                          Session Completed
                                      </Link>
                                  </li>
                              </ul>
                          </li>

                          <li className="padding-right-0 padding-left-0">
                              <Link to="/Student/account" className="padding_navbar">
                                  <div className="r4_counter wid-stats wid-stats_bg1 db_box wid-satus_violet" style={{background:"#428bca"}}>
                                  <div className="stats-data">
                                      <div className="stats nav5">
                                          <h3>Account Status</h3>
                                      </div>
                                  </div>
                                  </div>
                              </Link>
                          </li>
                          <li className="padding-right-0 padding-left-0">
                              <Link to="/Student/payment" className="padding_navbar">
                                  <div className="r4_counter wid-stats wid-stats_bg db_box">
                                      <div className="stats-data">
                                          <div className="stats nav2">
                                              <h3>Payment</h3>
                                          </div>
                                      </div>
                                  </div>
                              </Link>
                          </li>

                          <li className="padding-right-0 padding-left-0">
                              <div className="r4_counter wid-stats wid-stats_bg1 db_box wid-satus_violet " style={{background:"#428bca"}}> 
                                <div className="stats-data" style={{cursor:"pointer"}}>
                                  <Link to="/Student/download_home_work">
                                      <h3>Assignment</h3>
                                  </Link>
                                  </div>
                                </div>
                          </li>
                        </ul>
                    </nav>
                    <nav className="ipad_show">
                        <ul className="nav navbar-nav navbar-left" style={{marginTop:"14px"}}>
                          <li className="padding-right-0 padding-left-0">
                              <Link to="/Student/program" className="padding_navbar">
                                  <div className="r4_counter wid-stats db_box">
                                      <div className="stats-data">
                                          <div className="stats">
                                              <h3>Tog offered programs</h3>
                                          </div>
                                      </div>
                                  </div>
                              </Link>
                          </li>
                          <li className="padding-right-0 padding-left-0">
                              <Link to="/Student/practice-question" className="padding_navbar">
                                  <div className="r4_counter wid-stats wid-stats_bg db_box">
                                      <div className="stats-data">
                                          <div className="stats">
                                              <h3>Quiz</h3>
                                          </div>
                                      </div>
                                  </div>
                              </Link>
                          </li>
                          <li className="padding-right-0 padding-left-0 dropdown">
                              <a className="dropdown-toggle padding_navbar" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" href="/">
                                  <div className="r4_counter wid-stats wid-stats_bg2 db_box">
                                      <div className="stats-data">
                                          <div className="stats">
                                            <h3>Class Detail<i class="fa fa-angle-down pull-right" style={{marginTop:"0px"}}></i></h3>
                                          </div>
                                      </div>
                                  </div>
                              </a>
                              <ul className="dropdown-menu dropdown-menu-default dropdown_student_sets">
                                  <li><Link to="/Student/Courses"> <i className="fa fa-user"></i> My Enrolled Courses</Link></li>
                                  <li><Link to="/Student/Courses"> <i className="fa fa-home"></i> Upcoming Sessions</Link></li>
                                  <li><Link to="/Student/Courses"> <i className="fa fa-edit"></i> Session Completed</Link></li>
                              </ul>
                          </li>
                          <li className="padding-right-0 padding-left-0">
                              <Link to="/Student/account" className="padding_navbar">
                                  <div className="r4_counter wid-stats wid-stats_bg1 db_box wid-satus_violet" style={{background:"#428bca"}}>
                                    <div className="stats-data">
                                      <div className="stats">
                                          <h3>Account Status</h3>
                                      </div>
                                  </div>
                                  </div>
                              </Link>
                          </li>
                          <li className="padding-right-0 padding-left-0">
                              <Link to="/Student/payment" className="padding_navbar">
                                  <div className="r4_counter wid-stats wid-stats_bg1 db_box wid-satus_violet" style={{background:"#428bca"}}>
                                  <div className="stats-data">
                                      <div className="stats">
                                          <h3>Payment</h3>
                                      </div>
                                  </div>
                                  </div>
                              </Link>
                          </li>

                          <li className="padding-right-0 padding-left-0">
                              <div className="r4_counter wid-stats wid-stats_bg1 db_box wid-satus_violet " style={{background:"#428bca"}}> 
                                  <div className="stats-data" style={{cursor:"pointer"}}>
                                    <Link to="/Student/download_home_work">
                                        <h3>Assignment</h3>
                                    </Link>  
                                    </div>
                                  </div>
                          </li>
                          </ul>
                    </nav>
                    <div className="tog_login_profile_sidebar">
                      <ul class="nav navbar-nav navbar-right header-drop-right">
                        <li class="dropdown dropdown-user">
                      <a href="/" class="dropdown-toggle padding_mobs" data-toggle="dropdown" data-hover="dropdown"
                        data-close-others="true">
                        <img src="/assets/easy-admin/images/user-img.png"
                          class="img-circle" style={{width:"40px", height:'40px'}} alt="profile1" />
                        <span class="username username-hide-on-mobile">
                          Aaditya
                          <small class="mb-5" style={{color:"#ffa500"}}>
                            <i class="fa fa-fw fa-calendar-times-o"></i>
                            <span class="city_get_1_2"></span>
                          </small>
                        </span>
                        {/* <i class="fa fa-angle-down"></i> */}
                      </a>
                      <ul class="dropdown-menu dropdown-menu-default profile_uesr_1">
                        <li class="user-header">
                          <img src="/assets/easy-admin/images/user-img.png"
                            class="float-left rounded-circle" style={{width:"100px", height:"100px"}} alt="profileimg" />
                          <p>
                            TOGS00129 <small class="mb-5">Aaditya.kataria.rocks@gmail.com</small>
                            <small class="mb-5" style={{color:"#ffa500"}}><i
                                class="fa fa-fw fa-calendar-times-o"></i>Asia/Calcutta</small>

                          </p>
                        </li>
                        <li><a href="/Student" class="home_1"><i
                              class="fa fa-home"></i> Home</a></li>
                        <li><a href="/Student/complete_profile"
                            class="edit_profile_1"><i class="fa fa-edit"></i> Edit profile</a></li>
                        <li><a href="/Student/profile"
                            class="view_profile_1"><i class="fa fa-fw fa-street-view"></i> View profile</a></li>
                        <li><a href="/Student/transaction"><i
                              class="fa fa-money"></i> Transaction</a></li>
                        <li><a href="/Student/program/request-status"><i
                              class="fa fa-quora"></i> Query &amp; Information</a></li>
                        <li><a href="/" data-target="#pwdModal"
                            data-toggle="modal" class="change_pass_1"><i class="fa fa-fw fa-exchange"></i> Change
                            Password</a></li>
                        <li><a href="/assets/uploads/app/decontog-appSetup_1.0.0.exe"
                            title="Tog App" style={{fontSize:"13px"}}><i class="fa fa-cloud-download "
                              style={{color:"blue"}}></i> Tog App</a></li>
                        <li><a href="Student/logout" class="logout_1"><i
                              class="fa fa-sign-out"></i> Log out</a></li>
                      </ul>

                    </li>

                    </ul>

                    </div>
                  </div>
              </div>
          </div>

                <div className="container-fluid" style={{backgroundColor:"gray", height:"340px"}}>

                </div>
     
    </>
  )
}

export default StudentIndex
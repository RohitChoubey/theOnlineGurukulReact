import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/web/codingStyle.css'

function Coding() {
  return (
    <>
      <div className="coding_programmingcontainer">
        <div className="main-container">
            <div className="banner-container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="banner-text">
                            <section>
                                <h2>LIVE ONLINE CODING FOR KIDS</h2>
                                <p>Start your online Coding journey today!</p>
                                <br />
                                <div className="code-class text-center">
                                   <Link to="/demo-Request"> <button>BOOK A FREE DEMO CLASS</button></Link>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className="banner-cod-img">
                            <img className="img-code1" src="assets/web/images/coding/banner1.png" alt="banner1-cod" />
                            <img className="img-code2" src="assets/web/images/coding/banner2.png" alt="banner2-cod" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="coding-milti-tab">
                <div className="container"><h2>Select Programming Languages :</h2></div>
                <div className="container cod-tab-list">
                    <ul className="nav nav-pills cod-nav-pills">
                        <li className="active">
                            <a href="#1b" data-toggle="tab">Python</a>
                        </li>
                        <li><a href="#2b" data-toggle="tab"> Java </a></li>
                        <li>
                            <a href="#3b" data-toggle="tab"><pre>HTML & CSS</pre></a>
                        </li>
                        <li><a href="#4b" data-toggle="tab">Php</a></li>
                        <li><a href="#5b" data-toggle="tab">C#</a></li>
                        <li><a href="#6b" data-toggle="tab">C++</a></li>
                        <li><a href="#7b" data-toggle="tab">JavaScript</a></li>
                    </ul>

                    <div className="tab-content clearfix cod-tab-content">
                        <div className="tab-pane active" id="1b">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5>Python Programming Introduction</h5>
                                    <p>Python is one of the most popular, flexible programming languages today. You can use it for everything from basic scripting to machine learning. Python is the language for you.</p>
                                    <h5>Why we love it:</h5>
                                    <ul>
                                        <li>Versatile and robust</li>
                                        <li>Front-End friendly</li>
                                        <li>Back-End friendly</li>
                                        <li>Enables web applications</li>
                                        <li>Game Development</li>
                                        <li>Mobile Apps</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/python.png" alt="python" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="2b">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5>Java Programming Introduction</h5>
                                    <p>
                                        Java is one of the most popular programming languages out there. Released in 1995 and still widely used today, Java has many applications, including software development, mobile applications, and large
                                        systems development. Knowing Java opens a lot of possibilities for you as a developer.
                                    </p>
                                    <h5>Why we love it:</h5>
                                    <ul>
                                        <li>Versatility</li>
                                        <li>Object-oriented programming</li>
                                        <li>Great place to start</li>
                                        <li>Excellent online documentation</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/java.png" alt="java" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="3b">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5>Markup language Introduction</h5>
                                    <p>
                                        HTML is the foundation of all web pages. It defines the structure of a page, while CSS defines its style. HTML and CSS are the beginning of everything you need to know to make your first web page! Learn both
                                        and start creating amazing websites.
                                    </p>
                                    <h5>Why we love it:</h5>
                                    <ul>
                                        <li>Power-couple</li>
                                        <li>Beginner-friendly</li>
                                        <li>Builds simple websites</li>
                                        <li>Portfolio-building</li>
                                        <li>Web literacy</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/ml.png" alt="html" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="4b">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5>Php Programming Introduction</h5>
                                    <p>
                                        PHP is a general-purpose scripting language widely used as a server-side language for creating dynamic web pages. Though its reputation is mixed, PHP is still extremely popular and is used in over 75% of all
                                        websites where the server-side programming language is known.
                                    </p>
                                    <h5>Why we love it:</h5>
                                    <ul>
                                        <li>Scalable and flexible</li>
                                        <li>Great community</li>
                                        <li>Open source</li>
                                        <li>Fast and dynamic</li>
                                        <li>Used everywhere</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/php.png" alt="php" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="5b">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5>C# Programming Introduction</h5>
                                    <p>
                                        C# is one of the most popular programming languages. It can be used for a variety of things, including mobile applications, game development, and enterprise software. Knowing C# opens a great deal of doors
                                        for you as a developer.
                                    </p>
                                    <h5>Why we love it:</h5>
                                    <ul>
                                        <li>Video games with Unity</li>
                                        <li>Web apps with ASP.NET</li>
                                        <li>Cloud Computing with Azure</li>
                                        <li>Mobile apps with Xamarin</li>
                                        <li>IoT with .NET Core</li>
                                        <li>Machine Learning with ML.NET</li>
                                        <li>Recommended</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/c.png" alt="c" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="6b">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5>C++ Programming Introduction</h5>
                                    <p>
                                        C++ is a very popular language for performance-critical applications that rely on speed and efficient memory management. It’s used in a wide range of industries including software and game development, VR,
                                        robotics, and scientific computing.
                                    </p>
                                    <h5>Why we love it:</h5>
                                    <ul>
                                        <li>Fast and flexible</li>
                                        <li>Low-level functionality</li>
                                        <li>Large programming community</li>
                                        <li>Strong documentation</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/c++.png" alt="c++" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="7b">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5>JavaScript Programming Introduction</h5>
                                    <p>JavaScript is a fun and flexible programming language. It’s one of the core technologies of web development and can be used on both the front-end and the back-end.</p>
                                    <h5>Why we love it:</h5>
                                    <ul>
                                        <li>Versatile and robust</li>
                                        <li>Front-End friendly</li>
                                        <li>Back-End friendly</li>
                                        <li>Enables web applications</li>
                                        <li>Game Development</li>
                                        <li>Mobile Apps</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/javascript.png" alt="JavaScript" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="green-box">
                <blockquote className="pull-quote">
                    <p>
                        '<span style={{color: "#007aff"}}>theOnline</span><span style={{color: "#f47629"}}>Gurukul</span>, an online platform empowering everyone to learn from home; from highly experienced faculty. One can join session from home desk or
                        from anywhere. Therefore no more travel, no more traffic jam and other hassle like security, availability of faculty etc.'
                    </p>
                </blockquote>
            </div>
        </div>
        <div className="guest_schools_benefits">
            <div className="container">
                <div className="row nopadding">
                    <div className="col-sm-6 col-md-4 col-lg-4 guest_school_box_info">
                        <div className="guist_border">
                            <div className="box_image text-center">
                                <img src="assets/web/images/coding/c1.png" data-spai="1" alt="Coding for Kids" data-spai-upd="72" />
                            </div>
                            <div className="guest_schools_head">
                                <h4 style={{color: "#08a451"}}>Professional Tools and Languages</h4>
                            </div>
                            <div className="guest_schools_text">
                                <p>
                                    students learn professional languages such as <mark>Machine Learning</mark>, <mark>Cybersecurity</mark> , and <mark>Data Science</mark> while using the same tools used at companies like Google, Facebook, and
                                    Intel.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 guest_school_box_info">
                        <div className="guist_border2">
                            <div className="box_image text-center">
                                <img src="assets/web/images/coding/c2.png" data-spai="1" alt="Coding for Kids" data-spai-upd="71" />
                            </div>
                            <div className="guest_schools_head">
                                <h4 style={{color: "#f26522"}}>Build Real Games and Software</h4>
                            </div>
                            <div className="guest_schools_text">
                                <p>Make professional grade games and software using cutting edge technology.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-4 guest_school_box_info">
                        <div className="guist_border4">
                            <div className="box_image text-center">
                                <img src="assets/web/images/coding/c5.png" data-spai="1" alt="Coding for Kids" data-spai-upd="71" />
                            </div>
                            <div className="guest_schools_head">
                                <h4 style={{color: "#ef383f"}}>Online Support from Friendly Teachers</h4>
                            </div>
                            <div className="guest_schools_text">
                                <p>Whether students require set up assistance, have a question, or need support, our team is here to help every step of the way!.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="cd-center-banner-flex">
                <div className="cd-center-banner">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="cd-center-Textile-flex">
                                <section>
                                    <h3>Create immense coding possibilities with <span style={{color: "#007aff"}}>theOnline</span><span style={{color: "#f47629"}}>Gurukul</span></h3>
                                    <Link to="/demo-Request" ><button type="button" className="btn btn-primary">Book a Free Demo Class</button></Link>
                                </section>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 row">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <div className="cd-product-box">
                                    <i className="fa fa-html5 text-danger" aria-hidden="true"></i>
                                    <p>Web Design</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <div className="cd-product-box">
                                    <i className="fa fa-gamepad text-info" aria-hidden="true"></i>
                                    <p>3D Game Development</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <div className="cd-product-box">
                                    <i className="fa fa-jsfiddle text-warning" aria-hidden="true"></i>
                                    <p>Apps Development</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <div className="cd-product-box">
                                    <i className="fa fa-code text-dark" aria-hidden="true"></i>
                                    <p>Programming</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="games-container">
            <div className="container">
                <center><h1>Online Computer Coding Classes for Kids!</h1></center>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="game-box">
                            <div className="game-image">
                                <img src="assets/web/images/coding/g1.png" data-spai="1" alt="Coding for Kids" data-spai-upd="72" />
                            </div>
                            <div className="game-header">
                                <h4>3D GAME DEVELOPMENT 1 CODAKID BATTLEFRONT</h4>
                            </div>
                            <div className="games-paragraph"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="game-box">
                            <div className="game-image">
                                <img src="assets/web/images/coding/g2.png" data-spai="1" alt="Coding for Kids" data-spai-upd="71" />
                            </div>
                            <div className="game-header">
                                <h4>Make Learning A Fun Game For Your Kid!</h4>
                            </div>
                            <div className="games-paragraph"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="game-box">
                            <div className="game-image">
                                <img src="assets/web/images/coding/g3.png" data-spai="1" alt="Coding for Kids" data-spai-upd="71" />
                            </div>
                            <div className="game-header">
                                <h4>Give Your Child The Mentors They Need For Success!</h4>
                            </div>
                            <div className="games-paragraph"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="game-box">
                            <div className="game-image">
                                <img src="assets/web/images/coding/g4.jpg" data-spai="1" alt="Coding for Kids" data-spai-upd="71" />
                            </div>
                            <div className="game-header">
                                <h4>Prepare Your Kid For The Digital Age!</h4>
                            </div>
                            <div className="games-paragraph"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Coding
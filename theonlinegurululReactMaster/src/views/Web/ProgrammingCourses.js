import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/course/ProgrammingCoursesStyles.css';

function ProgrammingCourses() {
  return (
    <>
      <div className="ProgrammingCourses_container">
        <div className="main-container">
            <div className="banner-container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="banner-text">
                            <section>
                                <h2>Expand your career opportunities</h2>
                                <p>Start your online Professional journey today!</p>
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
                <div className="container"><h2>Select Programming Courses :</h2></div>
                <div className="container cod-tab-list">
                    <ul className="nav nav-pills cod-nav-pills">
                        <li className="active">
                            <a href="#1b" data-toggle="tab">Python Programming</a>
                        </li>
                        <li><a href="#2b" data-toggle="tab">Machine Learning</a></li>
                        <li><a href="#3b" data-toggle="tab"> Data Science </a></li>
                        <li><a href="#4b" data-toggle="tab">Digital Marketing</a></li>
                        <li><a href="#5b" data-toggle="tab"> Artificial Intelligence </a></li>
                        <li><a href="#6b" data-toggle="tab"> IOT Training</a></li>
                        <li><a href="#7b" data-toggle="tab">AWS Training</a></li>
                        <li><a href="#8b" data-toggle="tab">Blockchain Training</a></li>
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
                                    <h5>Machine learning (ML) Introduction</h5>
                                    <p>
                                        Machine learning (ML) is the study of computer algorithms that can improve automatically through experience and by the use of data. It is seen as a part of artificial intelligence. Machine learning algorithms
                                        build a model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so.
                                    </p>
                                    <h5>Did you know?</h5>
                                    <ul>
                                        <li>In machine learning, a target is called a label.</li>
                                        <li>In statistics, a target is called a dependent variable.</li>
                                        <li>A variable in statistics is called a feature in machine learning.</li>
                                        <li>A transformation in statistics is called feature creation in machine learning.</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/ML.webp" alt="ML" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="3b">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5>Data Science Introduction</h5>
                                    <p>
                                        Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge
                                        and actionable insights from data across a broad range of application domains. Data science is related to data mining, machine learning and big data.
                                    </p>
                                    <h5>Who should choose Data Science Course ?:</h5>
                                    <ul>
                                        <li>
                                            Fresh Graduates or students from any discipline can choose this course to obtain better job opportunities <br />
                                            in this most demanding data science field.
                                        </li>
                                        <li>Working professionals looking to change their domain to data science field.</li>
                                        <li>Highly recommended for those who are aspiring jobs that mainly revolves around data analytics and machine learning.</li>
                                        <li>Project managers aspiring to switch to manage Data Science projects.</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/data_science.png" alt="Data Science" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="4b">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5>Digital marketing Introduction</h5>
                                    <p>
                                        Digital marketing is the component of marketing that uses internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and
                                        services. Its development during the 1990s and 2000s changed the way brands and businesses use technology for marketing. 
                                    </p>

                                    <h5>New non-linear marketing approach:</h5>
                                    <ul>
                                        <li>Search engine optimization (SEO)</li>
                                        <li>Social media marketing</li>
                                        <li>Video marketing</li>
                                        <li>Email marketing</li>
                                        <li>Blogging & affiliate marketing</li>
                                        <li>Website marketing</li>
                                        <li>Paid search/contextual advertising</li>
                                        <li>Search engine marketing</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/digital-marketing.png" alt="DM" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="5b">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5>Artificial intelligence Introduction</h5>
                                    <p>
                                        Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to natural intelligence displayed by animals including humans. Leading AI textbooks define the field as the study of
                                        "intelligent agents": any system that perceives its environment and takes actions that maximize its chance of achieving its goals.
                                    </p>
                                    <h5>4 Types of Artificial Intelligence (AI):</h5>
                                    <ul>
                                        <li>Reactive Artificial intelligence</li>
                                        <li>Limited Memory Artificial intelligence</li>
                                        <li>Theory of Mind Artificial intelligence</li>
                                        <li>Self-aware Artificial intelligence</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/artificial-intelligence.png" alt="Ai" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="6b">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5>Internet of things Introduction</h5>
                                    <p>
                                        The Internet of things (IoT) describes physical objects (or groups of such objects) that are embedded with sensors, processing ability, software, and other technologies that connect and exchange data with
                                        other devices and systems over the Internet or other communications networks.
                                    </p>
                                    <h5>Top 5 Benefits of IoT:</h5>
                                    <ul>
                                        <li>Achieve Customer-Centricity</li>
                                        <li>Gathering Rich Data</li>
                                        <li>Enhanced Security Measures</li>
                                        <li>Reduction in Operational Cost</li>
                                        <li>Use of Smart Devices</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/IOT-training.png" alt="IOT" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="7b">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5>Amazon Web Services Introduction</h5>
                                    <p>
                                        Amazon Web Services (AWS) is a secure cloud services platform that helps to improve efficiency and provides assistance to run business operations smoothly. The Amazon AWS training courses aim to provide
                                        candidates with extensive knowledge of AWS to build and design an IT infrastructure on AWS to help business growth.
                                    </p>
                                    <h5>Uses of AWS:</h5>
                                    <ul>
                                        <li>It is used for programming models, operating systems, databases, and architectures.</li>
                                        <li>It is used to perform complex OLAP queries.</li>
                                        <li>It is used for AWS service to create a fully managed search engine for your website.</li>
                                        <li>It is used for hosting an app or website and create a shared file system for your team.</li>
                                        <li>It is used for serving large files, sending transactional email, and adding a CDN (Content Delivery Network) in AWS.</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/aws-tranning.png" alt="Aws tranning" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="8b">
                            <div className="row">
                                <div className="col-md-8">
                                    <h5>Blockchain Introduction</h5>
                                    <p>
                                        A blockchain is a growing list of records, called blocks, that are linked together using cryptography.Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data
                                        (generally represented as a Merkle tree). The timestamp proves that the transaction data existed when the block was published in order to get into its hash.
                                    </p>
                                    <h5>Blockchain Types:</h5>
                                    <ul>
                                        <li>Public blockchains</li>
                                        <li>Private blockchains</li>
                                        <li>Hybrid blockchains</li>
                                        <li>Sidechains</li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className="cod-lang-logo">
                                        <img src="assets/web/images/coding/blockChain.png" alt="Blockchain" />
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
                        <span style={{color: "#007aff"}}>theOnline</span><span style={{color: "#f47629"}}>Gurukul</span>, an online platform empowering everyone to learn from home; from highly experienced faculty. One can join session from home desk or
                        from anywhere. Therefore no more travel, no more traffic jam and other hassle like security, availability of faculty etc.'
                    </p>
                </blockquote>
            </div>
        </div>

        <div className="games-container">
            <div className="container">
                <center><h1>WHAT YOU WILL LEARN</h1></center>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="game-box">
                            <div className="game-image">
                                <img src="assets/web/images/coding/profectional1.png" data-spai="1" alt="Coding for Kids" data-spai-upd="72" />
                            </div>
                            <div className="game-header">
                                <h4>Leadership and Self</h4>
                                <p>Courses build that & nurture leadership potential. A peer-group of future tech leaders</p>
                            </div>
                            <div className="games-paragraph"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="game-box">
                            <div className="game-image">
                                <img src="assets/web/images/coding/profectional2.png" data-spai="1" alt="Coding for Kids" data-spai-upd="71" />
                            </div>
                            <div className="game-header">
                                <h4>Real World Projects</h4>
                                <p>Solve real world problems through challenge lab and capstone projects</p>
                            </div>
                            <div className="games-paragraph"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="game-box">
                            <div className="game-image">
                                <img src="assets/web/images/coding/profectional3.png" data-spai="1" alt="Coding for Kids" data-spai-upd="71" />
                            </div>
                            <div className="game-header">
                                <h4>Beyond technical core of AI and ML</h4>
                                <p>Coursework beyond technology depth to include desing thinking, human computer interaction, grand challenge that are hands-on & experiential</p>
                            </div>
                            <div className="games-paragraph"></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="game-box">
                            <div className="game-image">
                                <img src="assets/web/images/coding/profectional4.png" data-spai="1" alt="Coding for Kids" data-spai-upd="71" />
                            </div>
                            <div className="game-header">
                                <h4>Deep skills in Tech and Entrepreneurship</h4>
                                <p>Build a deep understanding of Artificial Intelligence and Machine Learning along with problem solving, design thinking and systems thinking</p>
                            </div>
                            <div className="games-paragraph"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <h2 className="text-orange">Importance of Professional Courses</h2>
            <div className="professional_course_important">
                <ul>
                    <li>
                        A good training in any of the professional courses listed below gives you the confidence at the workplace and assists <br />
                        you in fruitful interaction with the employer, colleagues and the work force in general.
                    </li>
                    <br />
                    <li>
                        It also increases the thinking horizon by helping one arrange different kinds of activities at the workplace <br />
                        for all the employees.
                    </li>
                    <br />
                    <li>
                        There is another section of a workplace that can be targeted, i.e. behavioural problems. It helps one resolve issues <br />
                        and problems with colleagues and other employees.
                    </li>
                    <br />
                    <li>
                        Beneficial and valuable communication with stakeholders, clients, colleagues is one of the most important aspects <br />
                        that he/she learns on the job.
                    </li>
                    <br />
                </ul>
            </div>
        </div>
        <div className="bg-info">
            <div className="container">
                <br />
                <h1>FAQ’s on List of Professional Courses</h1>
                <div className="faq_profectional_">
                    <p>
                        <strong>Question 1.</strong> <br />
                        How to choose a professional course?
                    </p>
                    <strong>Answer:</strong>
                    <p>
                        To select a professional course, a student should list down his or her interests, research about <br />
                        the topics, talk to a consultant and start tracking the college information.
                    </p>
                    <br />
                </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default ProgrammingCourses

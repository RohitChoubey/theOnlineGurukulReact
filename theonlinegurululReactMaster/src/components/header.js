import React, {useState} from 'react';
import '../css/headerStyle.css';
import { Link } from "react-router-dom";
import TopHeader from './home/topHeader';
import Popup from './home/Popup';
import Popup2 from './home/Popup';
import ModelBoxsimple from './modelBoxsimple';
// import Footer from './footer';

    
function Header() {
    const [loginmodalShow, setLoginModalShow] = React.useState(false);

    const [popImage, setPopImage] = useState(false);
    const [popImage2, setPopImage2] = useState(false);
    function popupImg(e){
        setPopImage(!popImage);
        // document.querySelector('body').style.overflow = 'hidden';
        e.stopPropagation(); 
        e.preventDefault();
      }
      function popupImg2(e){
        setPopImage2(!popImage2);
        // document.querySelector('body').style.overflow = 'hidden';
        e.stopPropagation(); 
        e.preventDefault();
      }
      const popupClose = function(e){
        document.querySelector('body').style.overflow = "auto";
        document.getElementById("showhidden").classList.remove("hidden");
        popupImg();
        e.stopPropagation();
        e.preventDefault();
      }
      const popupClose2 = function(e){
        document.querySelector('body').style.overflow = "auto";
        document.getElementById("showhidden1").classList.remove("hidden");
        popupImg2();
        e.stopPropagation();
        e.preventDefault();
      }
    const pathname = window.location.pathname.replace('/', "");
    const [activehome,  setActivehome] = useState("");
    const [activecourse,  setActivecourse] = useState("");
    const [activeourclass,  setActiveourclass] = useState("");
    const [activecrashcourse,  setActivecrashcourse] = useState("");
    const [activedemoclass,  setActivedemoclass] = useState("");
    const [activeddays,  setActiveddays] = useState("");
    window.onload = function() {
        if(pathname === 'home' || pathname === 'index' || pathname === ''){
              setActivehome('active');
        }else if (pathname === 'courses' || pathname === 'courses-fees') {
             setActivecourse('active');
        }
        else if (pathname === 'our-classes') {
             setActiveourclass('active');
        }
        else if (pathname === 'crash-course') {
             setActivecrashcourse('active');
        }
        else if (pathname === 'demo-classes') {
            setActivedemoclass('active');
       }
       else if (pathname === 'D-days') {
        setActiveddays('active');
       }
        
        
    }
    
  return ( 
      <>
        <div style={styled.headerfixed}>  
        <TopHeader fcn={popupImg} fcn2={popupImg2} />   
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="logo" /></Link>
                    <button className="navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-label="Toggle navigation" aria-expanded="false">
                        <span className="my-1 mx-2 close">X</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav nav nav-pills" id="pills-tab" role="tablist">
                            <li key="1" className="nav-item" role="presentation">
                                <div  className={activehome +' nav-link navbtn' }    id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"  role="tab" aria-controls="pills-home" >
                                    <Link to="/home" > Home  </Link>
                                </div>
                            </li>
                            <li key="2" className="nav-item">
                                <div className={activecourse +' nav-link navbtn' } id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"  role="tab" aria-controls="pills-profile" >
                                    <Link to="/courses-fees"> Courses & fees  </Link>
                                </div>
                            </li>
                            <li key="3" className="nav-item">
                                <div button className={activeourclass +' nav-link navbtn' } id="pills-our-classes-tab" data-bs-toggle="pill" data-bs-target="#pills-our-classes"  role="tab" aria-controls="pills-our-classes" >
                                    <Link to="/our-classes"> Our Classes </Link>
                                </div>
                            </li>
                            <li key="4" className="nav-item">
                                <div button className={activecrashcourse +' nav-link navbtn' } id="pills-crash-course-tab" data-bs-toggle="pill" data-bs-target="#pills-crash-course"  role="tab" aria-controls="pills-crash-course" >
                                    <Link to="/crash-course"> Crash Course </Link>
                                </div>
                            </li>
                            <li key="5" className="nav-item">
                                <div button className={activedemoclass +' nav-link navbtn' } id="pills-demo-classes-tab" data-bs-toggle="pill" data-bs-target="#pills-demo-classes"  role="tab" aria-controls="pills-demo-classes" >
                                    <Link to="/Demo-Classes"> Demo Classes </Link>
                                </div>
                            </li>
                            <li key="6" className="nav-item">
                                <div button className={activeddays +' nav-link navbtn' } id="pills-demo-classes-tab" data-bs-toggle="pill" data-bs-target="#pills-demo-classes"  role="tab" aria-controls="pills-demo-classes" >
                                    <Link to="/D-days"> D-Days </Link>
                                </div>
                            </li>
                            <li key="7" className="nav-item dropdown">
                                
                                <Link className="nav-link dropdown-toggle navbtn" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
                                    Study Material
                                </Link>
                                <ul className="dropdown-menu" style={styled.DropdownSection} aria-labelledby="navbarDropdown">
                                    <li key="11"><Link className="dropdown-item" to="/syllabus">Syllabus</Link></li>
                                    <li key="12"><Link className="dropdown-item" to="/CBSE-question-paper">CBSE Question Paper</Link></li>
                                    <li key="13"><Link className="dropdown-item" to="/previous-year-question-paper">Previous Year Question Paper</Link></li>
                                    {/* <li key="14"><Link className="dropdown-item" to="/">NCRT Solution</Link></li> */}
                                    {/* <li key="15"><Link className="dropdown-item" to="/">Popular Books Solutions</Link></li> */}
                                    {/* <li key="16"><Link className="dropdown-item" to="/">Competitive Exams</Link></li> */}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle navbtn" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
                                    More
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-right" style={styled.DropdownSection} aria-labelledby="navbarDropdown">
                                    <li key="21"><Link to='/register-type' className="dropdown-item"> Register </Link>  </li>
                                    <li key="22"><Link className="dropdown-item" to="/how-it-works">How it works</Link></li>
                                    <li key="23"><Link className="dropdown-item" to="/faq">Faq's </Link></li>
                                    <li key="24"><Link className="dropdown-item" to="/our-teachers">Our Teachers </Link></li>
                                    <li key="25"><Link className="dropdown-item" to="/contact-us">Contact Us </Link></li>
                                    <li key="26"><Link className="dropdown-item" to="/term-and-conditions">Term & Conditions </Link></li>
                                    <li key="27"><Link className="dropdown-item" to="/privacy-policy">Privacy Policy </Link></li>
                                    <li key="28"><Link className="dropdown-item" to="/blog">Blog </Link></li>
                                    <li key="29"><Link to='/login' className="dropdown-item"> Login </Link>  </li>
                                </ul>
                            </li>
                        </ul>
                        
                            
                    </div>
                </div>
            </nav>
        </div>
            <Popup popupClose = {popupClose} imgAlt="popup baneer" popImage={popImage ? "hidden":""} popupImgUrl="/assets/web/images/webp-img/refferal_mailer_FINAL.webp"/>
            <Popup2 popupClose2 = {popupClose2} imgAlt="popup baneer2" popImage2={popImage2 ? "hidden":""} popupImgUrl2="/assets/web/images/webp-img/collboration_final.webp"/>
       
        <div className="absolute_login_btn">
            <button className="login-btn-toggle" onClick={() => setLoginModalShow(true) }>
                <img className="callBanck_img" src="/assets/web/images/login-here.png" alt="loginbtnpop-right" />
            </button>
        </div>
        <div className="login_model_box_contaiber">
            <ModelBoxsimple show={loginmodalShow}  onHide={() => setLoginModalShow(false)} />
        </div>
        <div className="container-fluid" style={{width:"100%"}}>
            <div className="absolute_request_header_btn">
                <Link to="/demo-Request">
                    <button className="request-btn-toggle">
                    <img src="/assets/demo_icon.png" alt="requestbtnpop-right" />
                    REQUEST FOR FREE DEMO
                    </button>
                </Link>
            </div>
        </div>
    </>
  )
}


const styled = {
    DropdownSection: {
        left: '-86.3px',
        paddingTop: 0,
        paddingBottom: 0,
    },
    headerfixed:{
        position:'fixed',
        top:0,
        zIndex:9999,
        width: '100%',
    } 
     
}


export default Header

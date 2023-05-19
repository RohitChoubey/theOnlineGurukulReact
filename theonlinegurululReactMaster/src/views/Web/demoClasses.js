import React from 'react'
import '../../css/web/demoClassesStyles.css'

const demoVideodata = [
    {
        posterImg: 'assets/work-power_machines.png',
        videoUrl: 'https://www.youtube.com/watch?v=bP8r0He7_ZA&list=UUlaMTpEL5It4Jo-gBlihdTA&index=59'
    },
    {
        posterImg: 'assets/demo-video-banner/Prok.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=S-Kx1mZXaBc&list=UUlaMTpEL5It4Jo-gBlihdTA&index=44'
    },
    {
        posterImg: 'assets/biology_topic_heart.png',
        videoUrl: 'https://www.youtube.com/watch?v=A294vmCd1RI'
    },
    {
        posterImg: 'assets/physic_ohm_resistance.png',
        videoUrl: 'https://www.youtube.com/watch?v=Ir_eVEtUYmc'
    },
    {
        posterImg: 'assets/demo-video-banner/loops(python).jpg',
        videoUrl: 'https://www.youtube.com/watch?v=Uoff8EI21j0&t=1s'
    },
    {
        posterImg: 'assets/demo-video-banner/data_type(python).png',
        videoUrl: 'https://www.youtube.com/watch?v=ESyKC-awovc&t=495s'
    },
    {
        posterImg: 'assets/voltage_registance.png',
        videoUrl: 'https://www.youtube.com/watch?v=CEARSyRCOHE'
    },
    {
        posterImg: 'assets/demo-video-banner/Perimeter.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=zeKhbvzba4k&t=73s'
    },
];

function DemoClasses() {
  return (
    <>
      <div className="demoClasses_container">
        <div className="about-area" style={{padding:"40px 0px 20px 0"}}>
            <div className="container">
                <div className="col-md-12 panel-body" style={{textAlign: "justify"}}>
                    <h1 style={{color:"#f60"}}>Demo Classes</h1>
                    <p>
                    These are some of demo classes list which may help you to understand the how live session go when you take classes from your home or your comfortable
                    place.As you can see in the demo classes student sit at their home go live with the teacher and take their class as they took classes at their school.
                    In school, teacher at their front of physically but at <span style={{color:"#007aff"}}>theOnline</span><span style={{color:"#f47629"}}>Gurukul</span>
                    teacher is present in front of student virtually with the strength of 6 to 8 student at live class, Besides that if student want, he can go with the
                    teacher one to one class session. Recorded classes help student to learn the topic again
                    after the class is over.Recorded session of their live class  help student to learn the topic as it is without putting extra class to understand the same topic.
                    </p>
                    <p>
                    Become a class topper with the most experienced teachers as per the syllabus and the latest exam pattern.
                    You can also checkout the latest sample papers available on <span style={{color:"#007aff"}}>theOnline</span><span style={{color:"#f47629"}}>Gurukul</span> website will improve the chances of scoring higher marks in the  final examination
                    </p>
                </div>
            </div>
        </div>
        <div className="about-area">
            <div className="container">
                <div className="col-md-12 row">
                    { demoVideodata.map((data,index) =>
                        <div key={index.toString()} className="col-md-6">
                            <div  className="about-imgs1">
                                <div  className="about-imgs">
                                    <img src={data.posterImg} alt="tog-class-video" className="img-responsive"/>
                                    <div className="start-video1 video play-demo1" id="video1s">
                                        <a href={data.videoUrl} className="themeix-video-play" target="blank">
                                            <i className="fa fa-play"></i>
                                            <div className="iq-waves">
                                                <div className="waves wave-1"> </div>
                                                <div className="waves wave-2"> </div>
                                                <div className="waves wave-3"> </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}                           
                </div>
            </div>
        </div>

    </div>
    <svg id="bigTriangleColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
         <path d="M0 0 L50 100 L100 0 Z" />
        </svg>
                <div  className="about-area pt-145 pb-155">
                    <div  className="container">
                    <div  className="col-md-12 panel-body" style={{textAlign:"justify"}}>
                        <h1 style={{color:"#f60"}}> BENEFITS OF LIVE ONLINE TUITION CLASSES</h1>
                        <p>
                        Don't have to step out for your day to day coaching classes, simply log in to <span style={{color:"#007aff"}}>theOnline</span><span style={{color:"#f47629"}}>Gurukul</span>
                        and enjoy the hassle free daily coaching of any subject with one of the best faculty at very affordable prices.
                        </p>
                        <p>
                        Experience better interaction and smooth communication with the online gurukul tutors. Unlike classrooms, a student won’t feel shy to ask questions
                        and will be more comfortable chatting with the online tutor.
                        </p>
                        <p>
                        One of the striking benefits of online tuition is that the students get instant feedback from the tutor.
                        In this way, they correct their mistakes on time, so that they can have better understanding of the problem.
                        </p>
                        <p>
                        Sending a child out for a late evening tuition can make parents worry about their safety as they are not mature enough to deal with the hardships of life.
                        In this scenario, online tuition comes as a saviour as it lets a child study inthe comfort of the home at any time.
                        </p>
                </div>
        <span style={{color:"#f60", fontSize: "18px"}}> <b>Share this with your friends</b></span>
            <a  className="td-social-sharing-buttons td-social-whatsapp" href="https://web.whatsapp.com/send?text=View%20and Checkout live recorded Demo classes for FREE from here" target="blank">
                <img  className="td-social-icon icon-whatsapp" src="assets/out-whattsapp.png" alt="Whatsapp"/>
            </a>

        </div>
      </div>
    </>
  )
}

export default DemoClasses

import React from 'react';
// import { Link } from 'react-router-dom';
import SlideshowImage from '../../components/course/SlideshowImage';
import TabPanelTog from '../../components/tabPanel'
import '../../css/course/coursefeesStyle.css';
import EventsCards from '../../components/course/EventsCards';
import Latestnews from '../../components/course/latestnews';
import TogGallery from '../../components/course/TogGallery';

const slideImages = [
  {
    url: 'assets/img/home/slider/slider_image_1.jpg',
    captionHead: 'Turning dreams in to reality ',
    contant: '<span>theOnline</span><span>Gurukul</span><span> is an online platform where speaker and listener can be connected from anywhere without any restriction on geographical boundaries. So now you  can learn from home, your picnic spot or from any other location.</span>'
  },
  {
    url: 'assets/img/home/slider/slider_image_2.jpg',
    captionHead: 'Learning anywhere, any time',
    contant: '<span>theOnline</span><span>Gurukul</span><span>, an online platform empowering everyone to learn from home; from highly experienced faculty. One can join session from home desk or from anywhere. Therefore no more travel, no more traffic jam and other hassle like security, availability of faculty etc.'
  },
  {
    url: 'assets/img/home/slider/slider_image_4.jpg',
    captionHead: 'Commute free & Secured learning environment',
    contant: 'Welcome to <span>theOnline</span><span>Gurukul</span><span> a virtual environment to have personalized class room study where the core concept of real time interaction, high quality supporting material has been integrated for value addition to your study.'
  },
];
const courseFessStructureData = [
  {tabnavbar:["CBSE","ICSE","IB ⁄ IGCSE","Competitive Exams","Corporate Training" ,"Languages"]},
  {tabcantant:
    [
    {pagetablink:["Grade 04","Grade 05","Grade 06","Grade 07","Grade 08","Grade 09","Grade 10","Grade 11","Grade 12"]},
    {pagetablink:["Grade 04","Grade 05","Grade 06","Grade 07","Grade 08","Grade 09","Grade 10","Grade 11","Grade 12"]},
    {pagetablink:["Grade 06","Grade 07","Grade 08","Grade 09","Grade 10","Grade 11","Grade 12"]},
    {pagetablink:["Bank classes","GMAT classes","IAS classes","JEE classes","SSC classes"]},
    {pagetablink:["Machine Learning","Artificial Intelligence","Data Science","Digital Marketing","Python Programming","IOT Training","AWS Training","Quantom Computing","Robot Process Automation","Blockchain Training"]},
    {pagetablink:["Hindi","English","French","Spanish","German","Bahasa Indonesia","Mandarin"]},
    ]}
]
const Upcomming_Eventdata = [
  {
    backgroundImage:"assets/web/images/iot2.png",
    Event_name:"Seminar On IOT",
    Event_content:"The vast network of devices connected to Internet, including smart phones and tablets and almost anything with a sensor on it."},
  {
    backgroundImage:"assets/web/images/parent_counselling.png",
    Event_name:"Parenting",
    Event_content:"Training is being offered to enhance the skills and activities of children, so that children and family receive high quality growth and development."},
  {
    backgroundImage:"assets/web/images/code-images/dcoder.png",
    Event_name:"Coding for kids",
    Event_content:"Introducing kids coding at a young age can truly set up your child for skills that are necessary for the bright future and joining kids coding classes during one’s formative years can prove to be highly resourceful."},
  {
    backgroundImage:"assets/web/images/Disaster.png",
    Event_name:"Disaster Management Training",
    Event_content:"Awareness Webinar, conferences and Trainings are being offered to bring awareness about Disaster Management"},
];

const latestnewsdata = [
  {
    url: 'assets/web/images/yoga.png',
    title: ['Yoga','Health'],
    contant: 'This Program help in strengthen our body,calm our mind,regain our focus and improve self Confidenece.'
  },
  {
    url: 'assets/web/images/Disaster34.png',
    title: ['Disaster Awareness', 'Training'],
    contant: 'Our objective to spread awareness about disaster management through our workshop,seminars and conferences.'
  },
  {
    url: 'assets/web/images/IoT.png',
    title: ['IoT','Technology'],
    contant: 'The vast network of devices connected to Internet,including smart phones and tablets and almost anything with a sensor on it.'
  },
];
const gallery = [[
  {hrefLink:'assets/web/images/big/gallery-1-large.jpg', imgUrl:'assets/web/images/1-gallery.png',},
  {hrefLink:'assets/web/images/big/gallery-2-large.jpg', imgUrl:'assets/web/images/2-gallery.png',},
  {hrefLink:'assets/web/images/big/gallery-3-large.jpg', imgUrl:'assets/web/images/3-gallery.png',}
],
[
  {hrefLink:'assets/web/images/big/gallery-4-big.jpg', imgUrl:'assets/web/images/4-gallery.png',},
  {hrefLink:'assets/web/images/big/pexels-photo-236730.jpeg', imgUrl:'assets/web/images/5-gallery.png',},
  {hrefLink:'assets/web/images/big/gallery-6-large.jpg', imgUrl:'assets/web/images/6-gallery.png',},
]
];

function CourseFees() {
  return (
    <>
      <div className="coursefees_container">
          <SlideshowImage slideImagesObj={slideImages} />
            <div className="container">
              <div className="Course-contant" style={{marginBottom: "-30px"}}>
                <p style={{marginTop:"20px"}}>
                  <span style={{color:"#007aff"}}>theOnline</span><span style={{color:"#f47629"}}>Gurukul</span> is having high-quality tutors that ensure quality education to students.
                    Each course is designed to help students learn, grow and thrive.
                </p>
              </div>
              <br />
              <br />
              <h3 style={{marginBottom:"22px", marginTop: "0px"}}>Course Fees Structure</h3>
              <TabPanelTog tabdata={courseFessStructureData }/>
            </div>

            <br />
            <br />
            <div className="aboutArea">
              <div className="container">
                <div className="row clearfix">
                  <div className="col-xs-12">
                      <div className="group-title-index">
                        <h2 className="center-title">Upcoming Events</h2>
                        <div className="bottom-title"><i className="bottom-icon icon-a-1-01-01 fa fa-book"></i></div>
                      </div>
                  </div> 
                </div> 
                <div className="about_inner clearfix" style={{ textAlign: "center"}}>
                  <div className="row">
                      <EventsCards bootstrapClass="col-xs-6 col-sm-3" alldata={Upcomming_Eventdata[0]}/>
                      <EventsCards bootstrapClass="col-xs-6 col-sm-3" alldata={Upcomming_Eventdata[1]}/>
                      <EventsCards bootstrapClass="col-xs-6 col-sm-3" alldata={Upcomming_Eventdata[2]}/>
                      <EventsCards bootstrapClass="col-xs-6 col-sm-3" alldata={Upcomming_Eventdata[3]}/>
                  </div>
                </div>
              </div> 
            </div>

            <div className="container news-section padding">
                <div className="row clearfix row-spec">
                    <div className="col-sm-6 col-md-6 col-xs-12">
                        <div className="related_post_sec single_post news-content">
                            <div className="sectionTitle title-block">
                                <h3>Latest News</h3>
                            </div>

                            <div id="Carousel1" className="carousel slide news-test">
                                <ol className="carousel-indicators">
                                    <li data-target="#Carousel1" data-slide-to="0" className="active"></li>
                                    <li data-target="#Carousel1" data-slide-to="1"></li>
                                    <li data-target="#Carousel1" data-slide-to="2"></li>
                                    <li data-target="#Carousel1" data-slide-to="3"></li>
                                </ol>

                                <div className="carousel-inner letest_carousel-inner">
                                    <Latestnews latestnewsdata={latestnewsdata}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-xs-12">
                        <div className="upcoming_events event-col news-content news-contentx">
                            <div className="related_post_sec single_post">
                                <div className="sectionTitle title-block">
                                    <h3>Our Gallery</h3>
                                </div>

                                  <div className="rel_right">
                                    <div className="photo_gallery custom">
                                        <ul className="gallery popup-gallery gallery-3col garlley-block">
                                          <TogGallery photosUrl={gallery[0]}/>
                                         </ul>
                                         <ul className="gallery popup-gallery gallery-3col garlley-block">
                                          <TogGallery photosUrl={gallery[1]}/>
                                         </ul>
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

export default CourseFees


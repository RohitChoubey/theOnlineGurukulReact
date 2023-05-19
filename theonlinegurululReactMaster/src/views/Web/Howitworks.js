import React from 'react'
// import PropTypes from 'prop-types';
import '../../css/web/Howitworks_style.css'
import BenefitsCards from '../../components/home/BenefitsCards';


const BenefitsData = [
  {
    benIcon: "fa fa-commenting-o",
    benName: "REAL TIME INTERACTION",
    benContent: "Offer interactive Video session for knowledge transfer, meeting, webinar and training.",
  },
  {
    benIcon: "fa fa-bar-chart",
    benName: "Polling Result",
    benContent: "The instant polling system provided for feedback mechanism and better understanding.",
  },
  {
    benIcon: "fa fa-desktop",
    benName: "Learning Methodology",
    benContent: "theOnlineGurukul provides Traditional Method Of Learning With the help of Modern Technology.",
  },
  {
    benIcon: "fa fa-desktop",
    benName: "Ease of Learning",
    benContent: "Hassle free life for parents, No Travel, No Safety Concern, Eco Friendly & better time utilization for students.",
  },
  {
    benIcon: "fa fa-desktop",
    benName: "Cost Effective Learning",
    benContent: "Multiple Students in a class makes it feel like a regular tuition class with the added advantage of sitting at their home & having a very cost effective class.",
  },
  {
    benIcon: "fa fa-share-square-o",
    benName: "Media Sharing",
    benContent: "Real time media sharing in various format enhance the power of teaching and learning.",
  },
  {
    benIcon: "fa fa-bell-o",
    benName: "Notification",
    benContent: "Priority notifications of meeting and session always keeps you on the board.",
  },
  {
    benIcon: "fa fa-microphone",
    benName: "Recorded Session",
    benContent: "Recorded sessions can be used for later review and references.",
  },
  {
    benIcon: "fa fa-book",
    benName: "Updated Content",
    benContent: "Best and Latest study material available for teaching. Digital and 3D content for better understanding of concept.",
  },
];

function Howitworks() {
  return (
    <>
      <div className="howIts_work_section">
        <div className="container">
          <div className="row row-viedo">
              <div className="col-md-12">
                  <div className="video">
                      <div className="px-video-container" id="myvid">
                          <div className="px-video-img-captions-container">
                              <div className="px-video-captions hide"></div>
                            <video  loop autoplay="true" muted  width="1150"  height="100%" poster="https://www.theonlinegurukul.com/assets/web/video/poster2.png" controls>
                              <source src="https://www.theonlinegurukul.com/assets/web/video/ease_of_learning_1.mp4" type="video/mp4"/>
                              <source src="https://www.theonlinegurukul.com/assets/web/video/ease_of_learning_1.webm" type="video/webm"/>
                            </video>
                          </div>
                          <div className="px-video-controls"></div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="special_services_section">
          <div className="container">
            <div className="group-title-index">
              <br />
                  <h2 className="center-title">SPECIAL FEATURE</h2>
                  <div className="bottom-title"><i  className="bottom-icon icon-a-1-01-01 fa fa-book"></i></div>
              </div>
              <div className="row">
                <BenefitsCards benefitsData={BenefitsData} />
              </div>
          </div>    
        </div>
      </div>
      <br />
      <br />
    </>
  )
}

export default Howitworks

  BenefitsCards.defaultProps = {
    benIcon: 'fa fa-question-circle ',
    benName: 'Set the Benefits Title',
    benContent: 'Set the Benefits Content',
  }
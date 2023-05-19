import React from 'react';
import Particles from 'react-tsparticles';
import '../../css/d_daysStyle.css';


function Ddays() {
  return (
    <>
    <div className="Ddays_Blogheader_section">
    <div className="blog-outer-container">
      <div className="patience-movemant">
      <Particles
      id="tsparticles"
      options={{
        fpsLimit: 120,
        interactivity: {
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 20,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ff6600",
          },
          links: {
            color: "#000000",
            distance: 70,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "star",
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
        }}
      />
       <div className="container">
         <div className="Blogheader ">
             <h1 style={styled.Blogheader}>List of Important Days and Dates: National and international Days</h1>
           </div>
         </div>
         <div className="container">
            <div className="main-celebration-bl-container" style={{marginLeft: "unset"}}>
                <div className="main-celebration-bl1">
                  <div className="openblog-contant" data-toggle="modal" data-target="#blog_open">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="blog_main_heading">
                          <div className="blogtitle01">
                             <h3>Indian Army Day</h3>
                          </div>
                          <div className="blogcontant-headers0">
                            <p>Every year 15 January is observed as Indian Army Day because on this day in 1949 field Marshal Kodandera M Cariappa took 
                              over as the first Commander-in-Chief of the Indian Army from General Sir Francis Butcher, the last British Commander-in-Chief. 
                              Makar Sankranti is considered a day of happiness and prosperity by Hindus. It is believed that taking a bath in the Ganges, 
                              on this day, is auspicious. Devotees also pay tribute to the Sun God and express gratitude towards him for blessing us with his warm and glowing rays.
                              </p>
                          </div>
                          <div id="blogcontant-header0" style={{display:"none"}}>
                            <p>d-days contant d-days contant d-days contant d-days contant d-days contant d-days contant</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="image-field" style={{width:"100%"}}>
                            <img className="main-image1 pull-right" src={process.env.PUBLIC_URL + '/assets/Blog_image/1_(5).jpg'} alt="IMG"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          </div>
           <div className="container">
            <div className="main-celebration-second_container">
                  <div className="col-lg-4 col-md-4 col-sm-6" style={{marginLeft: "unset"}} >
                      <div className="main-celebration-bl">
                        <div className="openblog-contant"  data-toggle="modal" data-target="#blog_open">
                            <div className="image-field">
                                <img className="main-image" src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="blog-img" />
                            </div>
                            <div className="blog_main_heading">
                              <div className="blogtitle">
                                Happy Makar Sankranti
                              </div>
                              <div id="blogcontant-header" className="blogcontant-header">
                                Every year 15 January is observed as Indian Army Day because on this day in 1949 
                              </div>
                              <div id="expend_element_hideen" style={{display:"none"}}>
                                Every year 15 January is observed as Indian Army Day because on this day in 1949 field Marshal Kodandera M Cariappa 
                                took over as the first Commander-in-Chief of the Indian Army from General Sir Francis Butcher, the last British Commander-in-Chief.
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
            </div>
          </div>
       </div> 
       {/* Modal */}
    <div className="modal blog_model_container fade" id="blog_open" tabIndex="1" role="dialog" aria-labelledby="blog_openModalLabel" style={{marginTop:"15px",zIndex:9999,backgroundColor:"#4e4e4efa"}}>
        <div  className="modal-dialog " role="document">
          <div className="modal-content" style={styled.modelContent}>
            <div className="modal-header">
              <h2 className="modal-title" id="blog_openModalLabel">Indian Army Day</h2>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="container-fluid pull-right" >
                  <img src={process.env.PUBLIC_URL + '/assets/Blog_image/1_(5).jpg'} alt="blg-img2" id="blg-model-img" className="blg-model-img" />
                </div>
                <div className="container-fluid" >
                  <div className="watermark-logo">
                    <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="watermark-logo" />
                  </div>
                  <div id="para_contant">
                      <p>
                      Every year 15 January is observed as Indian Army Day because on this day in 1949 field Marshal Kodandera M Cariappa took over as the first Commander-in-Chief of the Indian Army from General Sir Francis Butcher, the last British Commander-in-Chief. Makar Sankranti is considered a day of happiness and prosperity by Hindus. It is believed that taking a bath in the Ganges, on this day, is auspicious. Devotees also pay tribute to the Sun God and express gratitude towards him for blessing us with his warm and glowing rays.
                      </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" id="close_model_animeted" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}

const styled = {
    Blogheader:{
        marginTop:'0',
        zIndex:'11',
    },
    modelContent: {
        borderTop: '4px solid #ff6200',
        width: '1167px'
    }
}

export default Ddays





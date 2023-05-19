import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/web/blog_style.css'
import { Link } from 'react-router-dom';

function Blog() {
  return (
    <section>
     <div className="Blogheader">
          <img width="330" src="/assets/web/images/blog.png" alt="blog_title" />
      </div>
      <div className="blog-outer-container blogger_blogList_container">
          <div className="container">
              <h2 style={{position: "absolute", margin: "-48px 23px 0px 20px"}} >Latest</h2>
              <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6" style={{marginLeft: "unset"}}>
                    <div className="main-celebration-bl">
                        <div className="blogbox-cd">
                            <Link className="openblog-contant" to="/blog-details" >
                                <div className="image-field">
                                    <img width="40" style={{position: "absolute", padding: "4px"}} src="https://www.theonlinegurukul.com/assets/web/images/20.png" alt="bog img" />
                                    <img className="main-image" src="https://www.theonlinegurukul.com/./uploads/blogger_banner/16517511431648546377Capture.PNG" alt="blog image1" />
                                </div>
                                <div className="blogtitle">Good News For Applicants Of National Eligibility Entrance Test</div>
                            </Link>
                        </div>
                        <div className="Date-field">
                            03/29/2022
                        </div>
                    </div>
                </div> 
                <div className="col-lg-4 col-md-4 col-sm-6" style={{marginLeft: "unset"}}>
                    <div className="main-celebration-bl">
                        <div className="blogbox-cd">
                            <Link className="openblog-contant" to="/blog-details" >
                                <div className="image-field">
                                    <img width="40" style={{position: "absolute", padding: "4px"}} src="https://www.theonlinegurukul.com/assets/web/images/20.png" alt="blog img1"/>
                                    <img className="main-image" src="https://www.theonlinegurukul.com/./uploads/blogger_banner/1648446126A_New_Design_-_Made_with_PosterMyWall_(1).jpg" alt="blog image1" />
                                </div>
                                <div className="blogtitle">Planning To Appear In Neet 2022? Read What Toppers Suggest.</div>
                            </Link>
                        </div>
                        <div className="Date-field">
                            03/28/2022
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6" style={{marginLeft: "unset"}}>
                    <div className="main-celebration-bl">
                        <div className="blogbox-cd">
                            <Link className="openblog-contant" to="/blog-details" >
                                <div className="image-field">
                                    <img width="40" style={{position: "absolute", padding: "4px"}} src="https://www.theonlinegurukul.com/assets/web/images/20.png"  alt="blog1"/>
                                    <img className="main-image" src="https://www.theonlinegurukul.com/./uploads/blogger_banner/1477401369165190376925International_Womens_Day_2022_.jpg" alt="blog image1" />
                                </div>
                                <div className="blogtitle">That's Why We Celebrate "international Women's Day". What's The History, Significance &amp; Theme, Know Here.</div>
                            </Link>
                        </div>
                        <div className="Date-field">
                            03/05/2022
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>

      <div className="container">
          <div className="viewall-latestblog">
              <center>
                  <div className="btn">
                      View All &gt;&gt;
                  </div>
              </center>
          </div>
      </div>

    </section>
  )
}

export default Blog
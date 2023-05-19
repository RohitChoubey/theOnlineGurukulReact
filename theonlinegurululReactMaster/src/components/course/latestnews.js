import React from 'react';
import '../../css/course/latestnewsStyle.css';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Latestnews(props) {
  return (
    <>
            <Slide>
            {props.latestnewsdata.map((newsitem, index)=> (
                <div className="item">
                    <div className="row news-box">
                        <div className="col-sm-12 col-md-12 col-xs-12">
                            <div className="news-boxInner row">
                                <div className="col-md-3">
                                    <span className="rel_thumb course-thumb">
                                        <Link to="#"><img src={newsitem.url} alt="Imager12" className="imgs-dis" /></Link>
                                    </span>
                                </div>
                                <div className="rel_right col-md-9">
                                    <strong style={{fontWeight: "bold", color: "#ffa500"}}>{newsitem.title[0]}<span className="testi"> | {newsitem.title[1]}</span></strong>
                                    <p>{newsitem.contant}</p>
                                    <div className="meta">
                                        <div className="meta1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  ))} 
            </Slide>
        
    </>
  )
}

export default Latestnews
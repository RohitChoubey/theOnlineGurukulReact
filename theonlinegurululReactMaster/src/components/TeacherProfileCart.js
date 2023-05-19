import React, { useState } from 'react'
import '../css/web/OurTeachers_style.css'
import ModelBox from './ModelBox';

function TeacherProfileCart(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const [modeldata, setModelData] = useState(null);
  return (
    <>
       {  props.teacherData.map(function(datalist){ 
           return(
            <div className="col-lg-4 col-md-6">
            <div className="our-team-main our-team-main-profile">
                <div className="team-front team-front-flex" variant="primary" onClick={() => {setModalShow(true); setModelData(datalist) } } >
                    <div className="card-teacher-image">
                        <img src={'http://localhost/narender/theonlinegurukul5/'+datalist.teacher_image} alt="teacher_image" />
                    </div>
                    <div className="card-teacher-basic-info flex-property">
                        <section>
                            <h4 className="card-title-teacher">{datalist.fname +' '+ datalist.lname }</h4>
                            <div className="color_be">
                                <p>{datalist.teaching_subject} Expert</p>
                            </div>
                            <div className="tutor-rate text-center">
                                <span>
                                    <font><b>Teaching Experience: </b> </font>
                                    <label>{datalist.teaching_experience} + years</label>
                                </span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div> 
           ) 
        })}
        <ModelBox  show={modalShow} dataValue={modeldata}  onHide={() => setModalShow(false)}
      />
        
                

    </>
  )
}

export default TeacherProfileCart

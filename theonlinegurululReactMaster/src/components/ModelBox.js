import React from 'react'
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import '../css/web/OurTeachers_style.css';
function ModelBox(props) {
// console.log(props.dataValue.teacher_image);
  return (
    <>
        <div className="our_teacherProfile_container">
        <Modal {...props} size="lg" className="our_teacherProfile_container teacher_model" id="teacher_model_open" aria-labelledby="contained-modal-title-vcenter" style={{marginTop:"-30px",zIndex: "99999"}} centered  >
      <Modal.Body style={{borderTop: "4px solid #ff6200"}}>
        {props.dataValue===null ? 'Teacher model not exit' :
                    (
                    <div class="row">
					 <div class="col-md-4">
						 <div class="container-fluid-pull-right">
  						 <img style={{maxWidth: "256px",maxHeight: "255px"}} src={'http://localhost/narender/theonlinegurukul5/'+props.dataValue.teacher_image} alt="teacher-img2" id="teacher-model-img" />
  					    </div>
					 </div>
					 <div class="col-md-8">
					 	<div class="flex-property">
							<section class="th-details-section">
								<div class="teacher-name-model">
									<h2 id="th-full_name-model">{props.dataValue.fname+' '+props.dataValue.lname}</h2> <span id="subject_expert-th"> {props.dataValue.teaching_subject} </span>
								</div>
								<div class="th-cd-mod">
									<p><i class="fa fa-graduation-cap" aria-hidden="true"></i> <b>Qualification:</b> <span id="qualification-th"> {props.dataValue.qualification} </span> </p>
									<p><i class="fa fa-check-circle" aria-hidden="true"></i> <b> <span id="th-experience-year">{props.dataValue.teaching_experience}</span>+ years</b> of Teaching experience</p>
									<p><i class="fa fa-volume-up" aria-hidden="true"></i> <b>Teacher Speak:</b> <span id="th-speaks-language">{props.dataValue.speaks}</span> </p>
									<p><i class="fa fa-map-marker" aria-hidden="true"></i> <b> <span id="thlocation">{props.dataValue.from_location+', '+props.dataValue.country}</span></b> </p>
									<p><span id="des-th-icon"></span> <span id="th-description"></span> </p>
								</div>
							</section>
					 	</div>
					 </div>
				 </div>
                    )
                  }
      </Modal.Body>
	  <button type="button" class="close close-signmodelBoxsimple" onClick={props.onHide}>
                <span aria-hidden="true" class="fadeandscale_close fand-clase">
                    <img src="/assets/web/images/close-pop.png" alt="close-pop.png"/></span>
            </button>
      {/* <Modal.Footer style={{padding:"0px 18px",zIndex:999}}>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    </div>
    </>
  )
}

export default ModelBox
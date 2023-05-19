import React from 'react';
import { Link } from 'react-router-dom';


function FormCards(props) {
  return (
    <>
        <div className="aboutImage">
            <div className="imahbounce">
                <Link to={props.formurl}>
                    <img src={process.env.PUBLIC_URL + props.bannnerimg } alt="student-tog"
                        className="img-responsive" />
                    <div className="overlay"></div>
                    <span className="captionLink">{props.cardtitle}<span></span></span>
                </Link>
            </div>
        </div>
    </>
  )
}
function RequestCard(){
    return (
        <>
            <Link to="/demo-Request">
                <div className="round-button text-center">
                    <div className="round-button-circle">
                        <img src={process.env.PUBLIC_URL + '/assets/images/2_training-old.png' } alt="training-tog"
                            className="img-responsive round-btn-training" style={{cursor: "pointer"}} />
                    </div>
                </div>
            </Link>
            <div className="name-course text-center"
                style={{color: "black", cursor: "pointer", textAlign: "center !important", marginTop: "10px"}}>
                <b>Request A Demo Class</b>
            </div>
        </>
    )
}

export default FormCards
export {RequestCard}

import React from 'react';
import '../../css/forms/registerTypeStyle.css';
import FormCards, { RequestCard } from './FormCards';

function RegisterType() {
  return (
    <>
        <div className="services-login services-login1">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <FormCards formurl="/student-register" bannnerimg="/assets/images/student.jpg" cardtitle="I am Student"/>
                    </div>
                    <div className="col-md-4">
                        <RequestCard/>
                    </div>
                    <div className="col-md-4">
                        <FormCards formurl="/teacher-register" bannnerimg="/assets/images/teacher.png" cardtitle="I am Teacher"/>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default RegisterType

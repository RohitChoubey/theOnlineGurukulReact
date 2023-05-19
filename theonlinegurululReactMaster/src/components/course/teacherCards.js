import React from 'react';

function TeacherCards() {
  return (
    <>
        <section>
            <div className="st-img-sl">
                <div className="st-photo-circle text-center">
                    <img className="img-circle" src={process.env.PUBLIC_URL + '/assets/images/profile_image.jpg'} alt="th-img" />
                </div>
                <div className="student-info text-center">
                <p> Piyush Kumar </p>
                <p> <span>Qualification-</span> B-tech </p>
                <p>
                    <button type="button"  className="btn btn-primary">Subject expert</button> &nbsp;
                    <button type="button"  className="btn btn-primary">5+ years</button>
                    </p>
                </div>
            </div>
        </section>  
    </>
  )
}

export default TeacherCards
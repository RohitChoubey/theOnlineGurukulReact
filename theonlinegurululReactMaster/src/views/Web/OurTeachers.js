// import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
// import ModelBox from '../../components/ModelBox';
import TeacherProfileCart from '../../components/TeacherProfileCart';
import '../../css/web/OurTeachers_style.css'


function OurTeachers() {
  // const [teacherProfile,setTeacherProfile] = useState(null);
  // useEffect(() => { 
    //  axios.post("http://localhost/narender/theonlinegurukul5/Cron_api/our_teachers").then((responseGet) => {
      //  console.log(responseGet.data)
      // var myObject = JSON.parse(responseGet.data);
      // setTeacherProfile(myObject.data);
  //   });
  // },[]);
  
  return (
    <>
      <div className="our_teacherProfile_container">
        <section className="breadcumb_area">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <div className="breadcumb_section">
                    <div className="page_title">
                        <h3>Our Teachers</h3>
                    </div>
                    <div className="page_pagination">
                        <ul>
                            <li> 
                              <Link to="/home"> Home&nbsp; </Link>
                             </li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i></li>
                            <li> &nbsp;Our Teachers </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
        </section>

        <div className="section section-padding choose-course" style={{padding: "20px 0"}} >
            <div className="container">
                <div className="group-title-index" style={{marginBottom:"0px"}}>
                    <h2 className="center-title">Our Teachers</h2>
                    <div className="bottom-title"><i className="bottom-icon icon-a-1-01-01 fa fa-book"></i></div>
                </div>
                <div className="row">
                   <TeacherProfileCart teacherData={teacherProfile} />
                </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default OurTeachers


const teacherProfile = [
  {
    "id": "54",
    "user_id": "1367",
    "fname": "alisha",
    "lname": "sachdeva",
    "from_location": "Delhi, Delhi",
    "speaks": "English",
    "teaching_experience": "4",
    "qualification": "M.SC,B.E(IIt Kanpur)",
    "description": "Join a community of 100s of students and discuss your most critical doubts",
    "teaching_subject": "MATH",
    "teaching_class": "12TH",
    "country": "India",
    "gender": "female",
    "teacher_image": "./uploads/our_teachers/alisha1633688247WhatsApp_Image_2021-10-04_at_4_09_19_PM.png",
    "status": "1"
  },
  {
    "id": "55",
    "user_id": "1399",
    "fname": "megha",
    "lname": "juneja",
    "from_location": "New Delhi, Delhi",
    "speaks": "English,Hindi",
    "teaching_experience": "6",
    "qualification": "Bsc,Msc (MDU UNIVERSITY)",
    "description": "",
    "teaching_subject": "Science",
    "teaching_class": "11th,12th",
    "country": "India",
    "gender": "female",
    "teacher_image": "./uploads/our_teachers/megha1633688465WhatsApp_Image_2021-08-15_at_12_33_12_PM_(4).png",
    "status": "1"
  },
  {
    "id": "56",
    "user_id": "1317",
    "fname": "simran",
    "lname": "kaur",
    "from_location": "New Delhi, Delhi",
    "speaks": "English,Hindi, franch",
    "teaching_experience": "5",
    "qualification": "Msc (KUKUNIVERSITY)",
    "description": "Taught Speech and Drama to students and conducted musical drama concerts",
    "teaching_subject": "Physics",
    "teaching_class": "10th,12th",
    "country": "India",
    "gender": "female",
    "teacher_image": "./uploads/our_teachers/simran1633755906WhatsApp_Image_2021-06-05_at_10_00_40_AM.png",
    "status": "1"
  },
  {
    "id": "57",
    "user_id": "1306",
    "fname": "monika",
    "lname": "jain",
    "from_location": "Sonipat, Haryana",
    "speaks": "English",
    "teaching_experience": "3",
    "qualification": "Bsc,Msc (YMCA UNIVERSITY)",
    "description": "",
    "teaching_subject": "Science",
    "teaching_class": "12TH",
    "country": "India",
    "gender": "female",
    "teacher_image": "./uploads/our_teachers/monika1633756316WhatsApp_Image_2021-09-24_at_10_31_33_AM.jpeg",
    "status": "1"
  }
];
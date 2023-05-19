import React,{useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';
import '../../css/forms/studentForm_style.css';

// const api = axios.create({
//     baseURL: process.env.REACT_APP_API_URL,
// })
function StudentForm() {
    const [countrymaster, setCountrymaster] = useState([]);
    const [userinfoData,setuserinfoData] = new useState({
        FirstName: "",
        LastName: "",
        Code: "",
        Gender: "",
        Email: "",
        Mobile: "",
        Country: "",
        Password:"",
        ConfPassword:"",
        EmailConfirmed: false,
        Appronal: false,
        Date: new Date(),
        Status: true,
        TermsandConditions:false,
        Designation:"Student",
    });
    
    // useEffect( async () => {
    //     axios.get('/userinfo').then(res => console.log(res.data));
    // }, [])
        const inputEvents = (event) =>{
        const {name,value} = event.target;
        setuserinfoData({...userinfoData, [name]:value});
       
        }
    const navigate = useNavigate();
    const onSubmits = (event) =>{
        console.log(userinfoData)
        event.preventDefault();
        axios.post('/userinfo',  userinfoData )
          .then(res =>{ 
              if(res.status===201)
                {
                    navigate('/login');
                    $("#successMessage").text("successfully submit");
                }
              else
              alert(res.status + "Server Error")
         })
         .catch((err) => {
            console.log(err.response.status+" (Bad Request)");
            alert("Please Fill Details");
          });
        
        ;

    }
    useEffect(() => {
        axios.get('/countrymaster')
        .then(res => {
            const countries = res.data;
            setCountrymaster(countries);
            // console.log(countries)
            }) 
        },[]);
  return (
      <>
      <div className="student_container">
       <div className="container">
       <span style={{color:"green",fontSize:"13px"}} id="successMessage"></span>
       <section>
      <div className="col-md-6 col-lg-6">
        <div className="stFormGroup">
            <div className="col-12 text-center">
                <h3 style={{color:"orange"}} > Registration For Scholarship Program </h3>
            </div>
            <hr />
            <form className="row g-3 needs-validation" onSubmit={onSubmits} >
                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                    <label htmlFor="FirstName" className="form-label">First name</label>
                    <input type="text" name="FirstName" className="form-control" id="stfname" onChange={inputEvents}  placeholder="Please Enter First Name"  required />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                    <label htmlFor="LastName" className="form-label">Last name</label>
                    <input type="text" name="LastName" className="form-control" id="stlname" onChange={inputEvents}  placeholder="Please Enter Last Name"   required />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" name="Email" className="form-control" id="stemail" onChange={inputEvents}  placeholder="example@gmail.com"  required />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                    <label htmlFor="Mobile" className="form-label">Mobile Number</label>
                    <input type="text" name="Mobile" className="form-control" id="mobNumber" onChange={inputEvents}  placeholder="0988765446"   required />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                    <label htmlFor="Gender" className="form-label">Gender</label>
                    <select className="form-select form-control" id="stgender" onChange={inputEvents}  name="Gender" required>
                        <option value=''>Select Gender</option>
                        <option value="Male"> Male </option>
                        <option value="Female"> Female </option>
                        <option value="Others"> Others </option>
                    </select>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                    <label htmlFor="Country" className="form-label">Country</label>
                    <select className="form-select form-control" id="stCountry" onChange={inputEvents}  name="Country"  required>
                        <option key="1011" value="">Select Country</option>
                            {countrymaster.map((cntry,index) => 
                                <option key={(index+'cnty').toString()} value={cntry._id}>{(cntry.Country.substring(0,2)) + ' | '+cntry.Country}</option>
                            ) }
                    </select>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" name="Password" onChange={inputEvents}  placeholder="Please Enter password" required />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                    <label htmlFor="ConfPassword" className="form-label">Confirm password</label>
                    <input type="password" className="form-control" id="confPassword4" name="ConfPassword" onChange={inputEvents}  placeholder="Please Enter Confirm password"  required />
                </div>
                <div className="col-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox"  id="invalidCheck" name="invalidCheck" onChange={inputEvents} value={userinfoData.TermsandConditions}  required />
                    <label className="form-check-label" htmlFor="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    </div>
                </div>
                <div className="col-12">
                    <button  className="btn btn-primary pull-right"  type="submit">Submit form</button>
                </div>
            </form>
        </div>
    </div>
    </section>
        </div>
      </div>
    </>
  )
}



export default StudentForm

import React,{useState,useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import $ from 'jquery';
import '../../css/forms/studentForm_style.css';

function DemoRequest() {
    const [countrymaster, setCountrymaster] = useState([]);
    const [demouserinfoData,setDemouserinfoData] = new useState({
        Name: "",
        Email: "",
        Phone: "",
        Class: "",
        Subject: "",
        Gender: "",
        Country: "",
        Profile: "Student",
        Date: new Date(),
        Status: true,
        Designation:"Student",
    });
    
     
        const inputEvents = (event) =>{
        const {name,value} = event.target;
        setDemouserinfoData({...demouserinfoData, [name]:value});
       
        }
    const navigate = useNavigate();
    const onSubmits = (event) =>{
        console.log(demouserinfoData)
        event.preventDefault();
        axios.post('/DemoClass',  demouserinfoData )
          .then(res =>{ 
              if(res.status===201)
                {   
                  navigate('/demo-Request');
                //   console.log(res);
                    $("#successMessage").text("successfully submit !");
                }
              else
              alert(res.status + "Server Error")
         })
         .catch((err) => {
            // console.log(+" (Bad Request)");
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
        <div className="demoRequest_container student_container">
            <div className="container">
                <span style={{color:"green",fontSize:"17px"}} id="successMessage"></span>
                <section>
                <div className="col-md-6 col-lg-6">
                    <div className="Demoform stFormGroup">
                        <div  className="form-popup" id="myForm" style={{display: "block"}}>
                            <form onSubmit={onSubmits}  className="form-container form-container-margin"  method="post" acceptCharset="utf-8">
                                <div className="col-12 text-center request_from_header">
                                    <h3 style={{color:"orange"}} > REQUEST FOR DEMO </h3>
                                </div>
                                <hr style={{ marginBottom:"1px"}} />
                                <div  className="request_from_container">
                                    <label htmlFor="Name" className="pt-1 pb-1">Name</label>
                                    <input type="text" name="Name" className="form-control" onChange={inputEvents} placeholder="Please Enter Full Name" required="required"  />

                                    <label htmlFor="Email" className="pt-1 pb-1">Email</label>
                                    <input type="text" name="Email" className="form-control" onChange={inputEvents} placeholder="Please Enter Email Address" required="required" />

                                    <label htmlFor="phone" className="pt-1 pb-1" >Mobile</label>
                                    <input type="text" name="Phone" className="form-control" onChange={inputEvents} placeholder="Please Enter Phone No" required="required" />

                                    <div className="row pt-2" >
                                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                            <label htmlFor="class" className="pt-1 pb-1">Class</label>
                                            <input type="text" name="Class" className="form-control" onChange={inputEvents} placeholder="Please Enter Class" required="required" />
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                            <label htmlFor="subject" className="pt-1 pb-1">Subject</label>
                                            <input type="text" name="Subject" className="form-control" onChange={inputEvents} placeholder="Please Enter Subject" required="required" />
                                        </div>
                                    </div>
                
                                    <div className="row pt-2">
                                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                            <label htmlFor="gender" className="form-label">Gender</label>
                                            <select className="form-select form-control"  id="stgender"  name="Gender" onChange={inputEvents} required>
                                                <option value=''>Select Gender</option>
                                                <option value="Male"> Male </option>
                                                <option value="Female"> Female </option>
                                                <option value="Others"> Others </option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                            <label htmlFor="Country" className="form-label">Country</label>
                                            <select className="form-select form-control" onChange={inputEvents} id="stCountry"  name="Country"  required>
                                                <option key="1011" value="">Select Country</option>
                                                    {countrymaster.map((cntry,index) => 
                                                        <option key={(index+'cnty').toString()} value={cntry._id}>{(cntry.Country.substring(0,2)) + ' | '+cntry.Country}</option>
                                                    ) }
                                            </select>
                                        </div>
                                    </div>
                                    {/* <button type="submit" id="submit-slider13" name="submit"  className="btn btn-default send-btns logins-btn btn-block" style={{backgroundColor: "#0d6efd !important"}}>Send Request</button> */}
                                    {/* <button type="button"  className="btn cancel">Close</button> */}
                                    <div className="col-12 pt-3" style={{textAlign: "end"}}> 
                                        <button  className="btn btn-primary"  type="submit">Submit form</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default DemoRequest


// Only elasticemail is supported as an SMTP host. To open an account please visit https://elasticemail.com/account#/create-account?r=20b444a2-b3af-4eb8-bae7-911f6097521c
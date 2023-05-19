import React, { useState,useEffect } from 'react'
import $ from 'jquery';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../css/forms/TeacherFormStyle.css';


function TeacherForm() {
    
    const AllQualification = ["10TH",  "12TH",  "B.A",  "M.A",  "B.E",  "M.E",  "B.TECH",  "M.TECH",  "B.SC",  "M.SC",  "BBA",  "MBA",  "BCA",  "MCA",  "PH.D",  "M.PHIL",  "B.ARCH",  "MBBS",  "MD",  "BDS",  "MDS",  "BPT",  "B.PHARM",  "M.PHARM",  "B.COM",  "M.COM",  "ICWA",  "B.CS",  "LLB",  "M.S"];
    const timeArray =["11-12 pm","12-01 pm","11-12 pm","12-01 pm","01-02 pm","02-03 pm","03-04 pm","04-05 pm","05-06 pm","06-07 pm","07-08 pm","08-09 pm","09-10 pm","10-11 Pm","11-12 am","12-01 am","01-02 am","02-03 am","03-04 am","04-05 am","05-06 am","06-07 am","07-08 am","08-09 am","09-10 am","10-11 am"];
    const [validatefild, setValidatefild] = useState();
    const [countrymaster, setCountrymaster] = useState([]);
    const [statesmaster, setStatesmaster] = useState([]);
    const [citysmaster, setCitymaster] = useState([]);
    const [classestmaster, setClassestmaster] = useState([]);
    const [subjecttmaster, setSubjecttmaster] = useState([]);
    useEffect(() => {
        axios.get('/countrymaster')
        .then(res => {
            const countries = res.data;
            setCountrymaster(countries);
            // console.log(countries)
            }) 
        },[]);
        useEffect(() => {
                axios.get('/classmaster')
            .then(res => {
                const classlist = res.data;
                setClassestmaster(classlist);
                })
            },[])
        const handleChangecountry = () => {
            const countryId = $("#sel_country").val();
        // useEffect(() => {
            axios.get('/statebycountry/'+countryId)
            .then(res => {
                const states = res.data;
                setStatesmaster(states);
                // console.log(countries)
                })
            // },[])
    }
    const handleChangeState = () => {
            const stateId = $("#sel_state").val();
            axios.get('/citybystate/'+stateId)
            .then(res => {
                const city = res.data;
                setCitymaster(city);
                })
    }
    const handleChangeClass = () => {
        const pre_classesId = $("#pre_classes").val();
            axios.get('/SubjectByClass/'+pre_classesId)
            .then(res => {
                const subject = res.data;
                setSubjecttmaster(subject);
                // console.log(subject)
                })
    }
    
    function first_form_validate(){
        var first_name			=	$("#first_name").val();
        var last_name			=	$("#last_name").val();
        var gender				=	$("#gender").val();
        var datepicker			=	$("#datepicker").val();
        var email				=	$("#email").val();
        var mobile				=	$("#mobile").val();
        var password			=	$("#password").val();
        var confirm_password	=	$("#conf_password").val();
        var country				=	$("#sel_country").val();
        var state				=	$("#sel_state").val();
        var city				=	$("#sel_city").val();
        var zip_code			=	$("#zip_code").val();

        if (first_name === null || first_name === "") {
            setValidatefild("Field Required");
            $("#first_name + .status_nameerror").addClass("has-error");
        } else {
            $("#first_name + .status_nameerror").removeClass("has-error");
        }
        if (last_name === null || last_name === "") {
            setValidatefild("Field Required");
            $("#last_name+ .status_nameerror").addClass("has-error");
        } else {
            $("#last_name + .status_nameerror").removeClass("has-error");
        }
        if (gender === null || gender === "") {
            setValidatefild("Field Required");
            $("#gender+ .status_nameerror").addClass("has-error");
        } else {
            $("#gender + .status_nameerror").removeClass("has-error");
        }
        if (datepicker === null || datepicker === "") {
            setValidatefild("Field Required");
            $("#datepicker + .status_nameerror").addClass("has-error");
        } else {
            $("#datepicker + .status_nameerror").removeClass("has-error");
        }
        if (email === null || email === "") {
            setValidatefild("Field Required");
            $("#email + .status_nameerror").addClass("has-error");
        } else {
            $("#email + .status_nameerror").removeClass("has-error");
        }
        if (mobile === null || mobile === "") {
            setValidatefild("Field Required");
            $("#mobile+ .status_nameerror").addClass("has-error");
        }
        if (password === null || password === "") {
            setValidatefild("Field Required");
            $("#password + .status_nameerror").addClass("has-error");
        } else {
            $("#password + .status_nameerror").removeClass("has-error");
        }
        if (confirm_password === null || confirm_password === "") {
            setValidatefild("Field Required");
            $("#conf_password + .status_nameerror").addClass("has-error");
        } else {
            $("#conf_password + .status_nameerror").removeClass("has-error");
        }
        if (country === null || country === "") {
            setValidatefild("Field Required");
            $("#sel_country + .status_nameerror").addClass("has-error");
        } else {
            $("#sel_country + .status_nameerror").removeClass("has-error");
        }
        if (state === null || state === "") {
            setValidatefild("Field Required");
            $("#sel_state+ .status_nameerror").addClass("has-error");
        } else {
            $("#sel_state + .status_nameerror").removeClass("has-error");
        }
        if (city === null || city === "") {
            setValidatefild("Field Required");
            $("#sel_city+ .status_nameerror").addClass("has-error");
        } else {
            $("#sel_city + .status_nameerror").removeClass("has-error");
        }
        if (zip_code === null || zip_code === "") {
            setValidatefild("Field Required");
            $("#zip_code + .status_nameerror").addClass("has-error");
        } else {
            $("#zip_code + .status_nameerror").removeClass("has-error");
        }
    
    }
    
  return (
    <>
        <div className="teacherForm_container pt-3">
            <section>
                <div className="row clearfix row-spec pt-3 pb-3">
                    <div className="text-center">
                        <div className="aboutTitle">
                            <h2 className="what-offer offer-spec register-stu register-teacher">Teacher Registration Process
                                <span className="what-offer-span register-stu1">Already have an Account?
                                <Link to="/login" className="popup-with-zoom-anim hvr-underline-from-left register-pops">Login Here</Link></span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container overflow-hidden">
                    <div className="multisteps-form" >
                        {/* progress bar */}
                        <div className="row">
                            <div className="col-12 col-lg-11 ml-auto mr-auto mb-3">
                                <div className="multisteps-form__progress">
                                <button className="multisteps-form__progress-btn step_bullateBtn1 js-active" type="button" title="User Info">BASIC INFORMATION</button>
                                <button className="multisteps-form__progress-btn step_bullateBtn2" type="button" title="Address">QUALIFICATION DETAILS</button>
                                <button className="multisteps-form__progress-btn step_bullateBtn3" type="button" title="Order Info">PREFERRED CLASSES & SUBJECTS</button>
                                <button className="multisteps-form__progress-btn step_bullateBtn4" type="button" title="Comments">BANK DETAILS  </button>
                                <button className="multisteps-form__progress-btn step_bullateBtn5" type="button" title="Comments">OTHER INFO AND UPLOADS   </button>
                                </div>
                            </div>
                        </div>
                        {/* form panels */}
                        <div className="row">
                            <div className="col-12 col-lg-11 m-auto" style={{minHeight: "490px"}}>
                                <form action="/" className="multisteps-form__form">
                                {/* single Basic Information form panel */}
                                <div className="multisteps-form__panel shadow pt-4 pb-4 pl-4 pr-4 rounded bg-white js-active"  data-animation="scaleIn">
                                    <h3 className="multisteps-form__title ">Basic Information</h3>
                                    <div className="multisteps-form__content" id="basic_info">
                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" className="form-control input-sm" id="first_name" autoComplete="false" name="first_name" placeholder="First Name" />
                                                <span className="text-danger status_nameerror">{validatefild}</span>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" className="form-control input-sm" id="last_name" autoComplete="false" name="last_name" placeholder="Last Name" />
                                                <span className="text-danger status_nameerror">{validatefild}</span>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>
                                        </div>
                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <select name="gender" id="gender" className="form-control input-sm">
                                                    <option value="">Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Others</option>
                                                </select>
                                                <span className="text-danger status_nameerror">{validatefild}</span>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="date" className="form-control input-sm hasDatepicker" id="datepicker" name="dob" autoComplete="off" placeholder="Date of Birth (MM/DD/YYYY)" />
                                                <span className="text-danger status_nameerror">{validatefild}</span>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>
                                        </div>
                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="email" className="form-control input-sm" id="email" name="email" autoComplete="off" placeholder="Email" />
                                                <span className="text-danger status_nameerror">{validatefild}</span>
                                                <span id="email_status" className="text-danger"></span><span id="email_status2" className="text-danger"></span>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="password" className="form-control input-sm" id="password" autoComplete="off" maxLength="15" minLength="8" name="password" placeholder="Password" />
                                                <span className="text-danger status_nameerror">{validatefild}</span>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>
                                        </div>
                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="password" className="form-control input-sm" id="conf_password" autoComplete="off" name="conf_password" maxLength="15" minLength="8" placeholder="Confirm Password" />
                                                <span className="text-danger status_nameerror">{validatefild}</span>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                    <input type="text" className="form-control input-sm" id="mobile" name="mobile" placeholder="Mobile Number" maxLength="10" />
                                                    <span className="text-danger status_nameerror">{validatefild}</span>
                                                    <div className="required-icon"><div className="text">*</div></div>
                                                </div>
                                        </div>
                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <select id="sel_country"  onChange={handleChangecountry} className="form-control input-sm countries" name="country">
                                                    <option key="1011" value="">Select Country</option>
                                                    {countrymaster.map((cntry,index) => 
                                                        <option key={(index+'cnty').toString()} value={cntry._id}>{(cntry.Country.substring(0,2)) + ' | '+cntry.Country}</option>
                                                    ) }
                                                </select>
                                                <span className="text-danger status_nameerror">{validatefild}</span>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <select id="sel_state" onChange={handleChangeState} className="form-control input-sm countries" name="state">
                                                    <option key="456s" value="">Select State</option> 
                                                    {statesmaster.map((statelist,index) => 
                                                        <option key={(index+'stt').toString()} value={statelist._id}>{(statelist.State.substring(0,2)) + ' | '+statelist.State}</option>
                                                    ) }
                                                </select>
                                                <span className="text-danger status_nameerror">{validatefild}</span>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>
                                        </div>
                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <select id="sel_city" className="form-control input-sm countries" name="city">
                                                    <option value="">Select City</option>
                                                    {citysmaster.map((citylist,index) => 
                                                        <option key={(index+'city').toString()} value={citylist._id}>{(citylist.City.substring(0,2)) + ' | '+citylist.City}</option>
                                                    ) }
                                                </select>
                                                <span className="text-danger status_nameerror">{validatefild}</span>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" className="form-control input-sm" id="zip_code" name="zip_code" autoComplete="off" placeholder="Zip code" maxLength="6" />
                                                <span className="text-danger status_nameerror">{validatefild}</span>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>
                                        </div>
                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" className="form-control input-sm" id="aadhar_id" name="aadhar_id" autoComplete="off" placeholder="Aadhar ID" maxLength="15" />
                                            </div>
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" className="form-control input-sm" id="pan_id" name="pan_id" autoComplete="off" placeholder="Pan No" maxLength="15" />
                                            </div>
                                        </div>
                                        <div className="button-row d-flex">
                                            <button className="btn btn-primary ml-auto js-btn-next" type="button" onClick={first_form_validate} title="Next">Next</button>
                                        </div>
                                    </div>
                                </div>
                                {/* single QUALIFICATION DETAILS form panel */}
                                <div className="multisteps-form__panel shadow p-4 rounded bg-white"  data-animation="scaleIn">
                                    <h3 className="multisteps-form__title">QUALIFICATION DETAILS</h3>
                                    <div className="multisteps-form__content" id="qualification_details">
                                            <div className="row margin-form">
                                                <div className="form-group margin-form col-lg-3 col-md-3 col-sm-3">
                                                    <select name="primary_qualification1" id="primary_qualification1" className="form-control country-select input-sm">
                                                        <option key="101" value="" >Select First Qualification</option>
                                                         {AllQualification.map((option,index) => 
                                                             <option key={(index+10).toString()} value={index}>{option}</option>
                                                         ) }
                                                    </select>
                                                    <div className="required-icon"><div className="text">*</div></div>
                                                </div>
                                                <div className="form-group margin-form form-group-university col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" className="form-control input-sm" id="university1" name="university1" placeholder="University/Institution" />
                                                    <div className="required-icon"><div className="text">*</div></div>
                                                </div>
                                                <div className="form-group margin-form col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" name="year_of_passing1"  id="year_of_passing1" className="form-control input-sm" placeholder="Year of Passing"  />
                                                    <div className="required-icon"><div className="text">*</div></div>
                                                </div>
                                                <div className="form-group margin-form form-group-university col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" className="form-control input-sm" id="grade_percentage1" name="grade_percentage1" placeholder="Grade/Percentage" />
                                                    <div className="required-icon"><div className="text">*</div></div>
                                                </div>
                                            </div>
                                            <div className="row margin-form">
                                                <div className="form-group margin-form col-lg-3 col-md-3 col-sm-3">
                                                    <select name="primary_qualification2" data-field-form="2" id="primary_qualification2" className="form-control country-select input-sm add-validation">
                                                    <option key="101" value="" >Select First Qualification</option>
                                                         {AllQualification.map((option,index) => 
                                                             <option key={(index+111).toString()} value={index}>{option}</option>
                                                         ) }
                                                    </select>
                                                </div>
                                                <div className="form-group margin-form form-group-university col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" className="form-control input-sm" id="university2" name="university2" placeholder="University/Institution" />
                                                </div>
                                                <div className="form-group margin-form col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" name="year_of_passing2" id="yrId2"  className="form-control input-sm" placeholder="Year of Passing" />
                                                </div>
                                                <div className="form-group margin-form form-group-university col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" className="form-control input-sm" id="grade_percentage2" name="grade_percentage2" placeholder="Grade/Percentage" />
                                                </div>
                                            </div>
                                            <div className="row margin-form">
                                                <div className="form-group margin-form col-lg-3 col-md-3 col-sm-3">
                                                    <select name="primary_qualification3" data-field-form="3" id="primary_qualification3" className="form-control country-select input-sm add-validation">
                                                    <option key="101" value="" >Select First Qualification</option>
                                                         {AllQualification.map((option,index) => 
                                                             <option key={(index+1000).toString()} value={index}>{option}</option>
                                                         ) }
                                                    </select>
                                                </div>
                                                <div className="form-group margin-form form-group-university col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" className="form-control input-sm" id="university3" name="university3" placeholder="University/Institution" />
                                                </div>
                                                <div className="form-group margin-form col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" name="year_of_passing3" id="yrId3" className="form-control input-sm" placeholder="Year of Passing" />
                                                </div>
                                                <div className="form-group margin-form form-group-university col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" className="form-control input-sm" id="grade_percentage3" name="grade_percentage3" placeholder="Grade/Percentage" />
                                                </div>
                                            </div>
                                            <div className="row margin-form">
                                                <div className="form-group margin-form col-lg-3 col-md-3 col-sm-3">
                                                    <select name="primary_qualification4" data-field-form="4" id="primary_qualification4" className="form-control country-select input-sm add-validation">
                                                        <option key="101" value="" >Select First Qualification</option>
                                                            {AllQualification.map((option,index) => 
                                                                <option key={(index+200).toString()} value={index}>{option}</option>
                                                            ) }
                                                    </select>
                                                </div>
                                                <div className="form-group margin-form form-group-university col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" className="form-control input-sm" id="university4" name="university4" placeholder="University/Institution" />
                                                </div>
                                                <div className="form-group margin-form col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" name="year_of_passing4" id="yrId4"  className="form-control input-sm" placeholder="Year of Passing" />
                                                </div>
                                                <div className="form-group margin-form form-group-university col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" className="form-control input-sm" id="grade_percentage4" name="grade_percentage4" placeholder="Grade/Percentage" />
                                                </div>
                                            </div>
                                            <div className="row margin-form">
                                                <div className="form-group margin-form col-lg-3 col-md-3 col-sm-3">
                                                    <select name="primary_qualification5" data-field-form="5" id="primary_qualification5" className="form-control country-select input-sm add-validation">
                                                    <option key="101" value="" >Select First Qualification</option>
                                                            {AllQualification.map((option,index) => 
                                                                <option key={(index+300).toString()} value={index}>{option}</option>
                                                            ) }
                                                    </select>
                                                </div>
                                                <div className="form-group margin-form form-group-university col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" className="form-control input-sm" id="university5" name="university5" placeholder="University/Institution" />
                                                </div>
                                                <div className="form-group margin-form col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" name="year_of_passing5" id="yrId5" className="form-control input-sm" placeholder="Year of Passing"/>
                                                </div>
                                                <div className="form-group margin-form form-group-university col-lg-3 col-md-3 col-sm-3">
                                                    <input type="text" className="form-control input-sm" id="grade_percentage5" name="grade_percentage5" placeholder="Grade/Percentage" />
                                                </div>
                                            </div>
                                            <div className="button-row d-flex mt-4">
                                                <button className="btn btn-primary js-btn-prev" type="button" title="Prev">Prev</button>
                                                <button className="btn btn-primary ml-auto js-btn-next" type="button" title="Next">Next</button>
                                            </div>
                                    </div>
                                </div>
                                {/* single PREFERRED CLASSES & SUBJECTS form panel */}
                                <div  className="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
                                    <h3  className="multisteps-form__title">PREFERRED CLASSES & SUBJECTS</h3>
                                    <div className="multisteps-form__content">
                                    <div className="row margin-form">
                                            <div className="form-group margin-form col-md-3">
                                                <select name="pre_classes" onChange={handleChangeClass} id="pre_classes" className="form-control country-select input-sm">
                                                    <option key="class0" value="">Select First Class</option>
                                                    {classestmaster.map((option,index) => 
                                                             <option key={(index+'class').toString()} value={option._id}>{option.Class}</option>
                                                         ) }
                                                </select>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>

                                            <div className="form-group margin-form form-group-university col-md-3">
                                                <div className="SumoSelect sumo_primary_subject"  role="button" aria-expanded="false">
                                                    <select id="primary_subject" name="primary_subject[]" className="form-control country-select input-sm SlectBox SumoUnder" >
                                                        <option key="subject123" value="">Primary Subject</option>
                                                        {subjecttmaster.map((option,index) => 
                                                             <option key={(index+'subject').toString()} value={option._id}>{option.Subject}</option>
                                                         ) }
                                                    </select>
                                                </div>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>
                                            <div className="form-group margin-form form-group-university col-md-3">
                                                <div className="SumoSelect sumo_secondary_subject"  role="button" aria-expanded="false">
                                                    <select id="secondary_subject" name="secondary_subject[]" className="form-control country-select input-sm SlectBox SumoUnder" >
                                                        <option key="subject231" value="">Secondary Subject</option>
                                                        {subjecttmaster.map((option,index) => 
                                                             <option key={(index+'subject12').toString()} value={option._id}>{option.Subject}</option>
                                                         ) }
                                                    </select>
                                                </div>
                                                <div className="required-icon"><div className="text">*</div></div>
                                            </div>
                                            <div className="form-group margin-form form-group-university col-md-3">
                                                <input type="text" className="form-control input-sm" id="others" name="others" placeholder="Others" />
                                            </div>
                                    </div>

                                   {  

                                    [...Array(5)].map((data, index) => 
                                    <>
                                        <div key={(index+'index').toString()} className="row margin-form">
                                                <div className="form-group margin-form col-md-3">
                                                    <select name="pre_classes2" onChange={handleChangeClass} id={'pre_classes'+index} data-field-form="2" className="form-control country-select input-sm add-validation1">
                                                        <option value="">Select Second Class</option>
                                                        {classestmaster.map((option,index) => 
                                                             <option key={(index+'class').toString()} value={option._id}>{option.Class}</option>
                                                         ) }
                                                    </select>
                                                </div>
                                                <div className="margin-form form-group-university col-md-3">
                                                    <div className="SumoSelect sumo_primary_subject2" role="button" aria-expanded="false">
                                                        <select id={'primary_subject'+index} name={'primary_subject2'+index+'[]'} className="form-control country-select input-sm SlectBox SumoUnder" tabIndex="-1">
                                                        <option key="subject1123" value="">Primary Subject</option>
                                                        {subjecttmaster.map((option,index) => 
                                                             <option key={(index+'subject').toString()} value={option._id}>{option.Subject}</option>
                                                         ) }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="margin-form form-group-university col-md-3">
                                                    <div className="SumoSelect sumo_secondary_subject2" role="button" aria-expanded="false">
                                                        <select id={'secondary_subject2'+index} name={'secondary_subject2'+index+'[]'} className="form-control country-select input-sm SlectBox SumoUnder" tabIndex="-1">
                                                        <option key="subject2131" value="">Secondary Subject</option>
                                                        {subjecttmaster.map((option,index) => 
                                                             <option key={(index+'subject12').toString()} value={option._id}>{option.Subject}</option>
                                                         ) }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group margin-form form-group-university col-md-3">
                                                    <input type="text" className="form-control input-sm" id={'others'+index} name="others2" placeholder="Others" />
                                                </div>
                                        </div>
                                    </>
                                    )
                                    }
                                    <div className="row">
                                        <div className="button-row d-flex mt-4 col-12">
                                        <button className="btn btn-primary js-btn-prev" type="button" title="Prev">Prev</button>
                                        <button className="btn btn-primary ml-auto js-btn-next" type="button" title="Next">Next</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* single Bank Details form panel */}
                                <div className="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
                                    <h3 className="multisteps-form__title">Bank Details</h3>
                                    <div className="multisteps-form__content">
                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" className="form-control input-sm" id="bank_name" name="bank_name" placeholder="Bank Name" />
                                            </div>
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" className="form-control input-sm" id="branch_name" name="branch_name" placeholder="Branch Name" />
                                            </div>
                                        </div>

                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" className="form-control input-sm" id="account_holder_name" name="account_holder_name" placeholder="Name as in Account" />
                                            </div>
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" className="form-control input-sm" id="account_no" name="account_no" placeholder="Account-Number" maxLength="20" />
                                            </div>
                                        </div>
                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" className="form-control input-sm" id="ifsc_code" name="ifsc_code" placeholder="IFSC-Code" />
                                            </div>
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" className="form-control input-sm" id="micr_code" name="micr_code" placeholder="MICR-Code" />
                                            </div>
                                        </div>

                                    <div className="row">
                                        <div className="button-row d-flex mt-4 col-12">
                                        <button className="btn btn-primary js-btn-prev" type="button" title="Prev">Prev</button>
                                        <button className="btn btn-primary ml-auto js-btn-next" type="button" title="Next">Next</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* single NETWORK INFO | UPLOADS form panel */}
                                <div className="multisteps-form__panel shadow p-4 rounded bg-white" data-animation="scaleIn">
                                    <h3 className="multisteps-form__title">NETWORK INFO | UPLOADS</h3>
                                    <div className="multisteps-form__content" id="network_info">
                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <input type="text" className="form-control input-sm" id="current_occupation" name="current_occupation"
                                                    placeholder="Current Occupation" />
                                                <div className="required-icon">
                                                    <div className="text">*</div>
                                                </div>
                                            </div>

                                            <div className="margin-form col-lg-6 col-md-6 col-sm-6">
                                                <div className="sumo_days_available">
                                                    <select name="days_available[]" id="days_available" className="form-control country-select input-sm SlectBox SumoUnder" tabIndex="-1">
                                                            <option value="">Days Available for teaching</option>
                                                            <option value="monday">Monday</option>
                                                            <option value="tuesday">Tuesday</option>
                                                            <option value="wednesday">Wednesday</option>
                                                            <option value="thrusday">Thrusday</option>
                                                            <option value="friday">Friday</option>
                                                            <option value="saturday">Saturday</option>
                                                            <option value="sunday">Sunday</option>
                                                    </select>
                                                </div>
                                                <div className="required-icon">
                                                    <div className="text">*</div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <select name="hours_week_ends_available" id="hours_week_ends_available"
                                                    className="form-control country-select  input-sm">
                                                    <option key="hour11" value="">Hours daily Available</option>
                                                    <option key="hour12" value="1">1 Hours</option>
                                                    <option key="hour13" value="2">2 Hours</option>
                                                    <option key="hour14" value="3">3 Hours</option>
                                                    <option key="hour15" value="4">4 Hours</option>
                                                    <option key="hour16" value="5">5 Hours</option>
                                                    <option key="hour17" value="6">6 Hours</option>
                                                    <option key="hour18" value="7">7 Hours</option>
                                                    <option key="hour19" value="8">8 Hours</option>
                                                </select>
                                                <div className="required-icon">
                                                    <div className="text">*</div>
                                                </div>
                                            </div>

                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <div className="sumo_available_timings">
                                                    <select name="available_timings[]" id="available_timings"
                                                        className="form-control country-select input-sm " tabIndex="-1">
                                                        <option value="">Preferred time for teaching</option>
                                                        {timeArray.map((option,index) => 
                                                             <option key={(index+'time').toString()} value={index}>{option}</option>
                                                         ) }
                                                    </select>
                                                </div>
                                                <div className="required-icon">
                                                    <div className="text">*</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <select name="total_teaching_experience" id="total_teaching_experience" className="form-control input-sm">
                                                    <option key="exprince11" value="">Total Teaching Experience</option>
                                                    <option key="exprince12" value="Less than a year"> Less than a year </option>
                                                    <option key="exprince13" value="Less Two years"> Less Two years </option>
                                                    <option key="exprince14" value="Less Four years"> Less Four years </option>
                                                    <option key="exprince15" value="More than 5 years"> More than 5 years </option>
                                                </select>
                                                <div className="required-icon">
                                                    <div className="text">*</div>
                                                </div>
                                            </div>

                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <select name="type_of_connection" className="form-control input-sm" id="type_of_connection">
                                                    <option key="connection11" value="">Type of Connection</option>
                                                    <option key="connection12" value="Broadband">Broadband</option>
                                                    <option key="connection13" value="Wifi">Wifi</option>
                                                    <option key="connection14" value="Dongle">Dongle</option>
                                                    <option key="connection15" value="Mobile">Mobile</option>
                                                    <option key="connection16" value="Cable">Cable</option>
                                                </select>
                                                <div className="required-icon">
                                                    <div className="text">*</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <select name="down_internet_conn_speed" className="form-control input-sm" id="down_internet_conn_speed">
                                                    <option key="speed11" value="">Download speed of Internet Connection</option>
                                                    <option key="speed12" value="512-kbps">512 Kbps</option>
                                                    <option key="speed13" value="1-mbps">1 Mbps</option>
                                                    <option key="speed14" value="2-mbps">2 Mbps</option>
                                                    <option key="speed15" value="4-mbps">4 Mbps</option>
                                                    <option key="speed16" value="More than 4 mbps">More than 4 mbps</option>
                                                </select>
                                                <div className="required-icon">
                                                    <div className="text">*</div>
                                                </div>
                                            </div>

                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <select name="up_internet_conn_speed" className="form-control input-sm" id="up_internet_conn_speed">
                                                    <option key="upload11" value="">Upload speed of Internet Connection</option>
                                                    <option key="upload12" value="512-kbps">512 Kbps</option>
                                                    <option key="upload13" value="1-mbps">1 Mbps</option>
                                                    <option key="upload14" value="2-mbps">2 Mbps</option>
                                                    <option key="upload15" value="4-mbps">4 Mbps</option>
                                                    <option key="upload16" value="More than 4 mbps">More than 4 mbps</option>
                                                </select>
                                                {/* <div className="required-icon">
                                                    <div className="text">*</div>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <label className="b-submit__main-file-label btn m-btn">
                                                    <input type="file" name="screenshot_speed" id="screenshot_speed" className="form-control input-sm" />
                                                    <label htmlFor="screenshot_speed" className="ch1-img">Net Speed
                                                        Screenshot</label>
                                                    <span className="fa fa-angle-right choose-img"></span>
                                                </label>
                                                <div className="required-icon">
                                                    <div className="text">*</div>
                                                </div>
                                            </div>

                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <label className="b-submit__main-file-label btn m-btn">
                                                    <input type="file" name="upload_profile_pic" id="upload_profile_pic" className="form-control input-sm" />
                                                    <label htmlFor="upload_profile_pic" className="ch1-img">Upload Your
                                                        profile pic</label>
                                                    <span className="fa fa-angle-right choose-img"></span>
                                                    <div className="required-icon">
                                                        <div className="text">*</div>
                                                    </div>
                                                </label>

                                            </div>
                                        </div>
                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <label className="b-submit__main-file-label btn m-btn">
                                                    <input type="file" name="upload_resume" id="upload_resume" className="form-control input-sm" />
                                                    <label htmlFor="upload_resume" className="ch1-img" style={{fontWeight:"100",cursor:"pointer"}}>Upload Your
                                                        CV</label>
                                                    <span className="fa fa-angle-right choose-img"></span>
                                                </label>
                                                <div className="required-icon">
                                                    <div className="text">*</div>
                                                </div>
                                            </div>

                                            <div className="form-group margin-form col-lg-6 col-md-6 col-sm-6">
                                                <select name="association_with_gurukul" className="form-control input-sm" id="association_with_gurukul">
                                                    <option key="gurukul11" value="">Association with gurukul is</option>
                                                    <option key="gurukul12" value="primary-source-of-income">Primary source of Income</option>
                                                    <option key="gurukul13" value="additional-source-of-income">Additonal source of Income</option>
                                                    <option key="gurukul14" value="pursue-your-passion">Pursue your passion</option>
                                                </select>
                                                <div className="required-icon">
                                                    <div className="text">*</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row margin-form">
                                            <div className="form-group margin-form col-lg-12 col-md-12 col-sm-12">
                                                <textarea className="form-control input-sm" type="textarea" placeholder="How you come to know with theonlinegurukul"
                                                    maxLength="100" rows="2" name="come_to_know_tog_status" id="come_to_know_tog_status"></textarea>
                                            </div>
                                        </div>

                                    <div className="button-row d-flex mt-4">
                                        <button className="btn btn-primary js-btn-prev" type="button" title="Prev">Prev</button>
                                        <button className="btn btn-success ml-auto" type="button" title="Send">Send</button>
                                    </div>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default TeacherForm

$(document).ready(function(){
  //DOM elements
    const DOMstrings = {
    stepsBtnClass: 'multisteps-form__progress-btn',
    stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
    stepsBar: document.querySelector('.multisteps-form__progress'),
    stepsForm: document.querySelector('.multisteps-form__form'),
    stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
    stepFormPanelClass: 'multisteps-form__panel',
    stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
    stepPrevBtnClass: 'js-btn-prev',
    stepNextBtnClass: 'js-btn-next'
  };
  
  //remove class from a set of items
  const removeClasses = (elemSet, className) => {
    
    elemSet.forEach(elem => {
      
      elem.classList.remove(className);
      
    });
    
  };
  
  //return exect parent node of the element
  const findParent = (elem, parentClass) => {
    
    let currentNode = elem;
  
    while(! (currentNode.classList.contains(parentClass))) {
      currentNode = currentNode.parentNode;
    }
    
    return currentNode;
    
  };
  
  //get active button step number
  const getActiveStep = elem => {
    return Array.from(DOMstrings.stepsBtns).indexOf(elem);
  };
  
  //set all steps before clicked (and clicked too) to active
  const setActiveStep = (activeStepNum) => {
    
    //remove active state from all the state
    removeClasses(DOMstrings.stepsBtns, 'js-active');
    
    //set picked items to active
    DOMstrings.stepsBtns.forEach((elem, index) => {
      
      if(index <= (activeStepNum) ) {
        elem.classList.add('js-active');
      }
      
    });
  };
  
  //get active panel
  const getActivePanel = () => {
    
    let activePanel;
    
    DOMstrings.stepFormPanels.forEach(elem => {
      
      if(elem.classList.contains('js-active')) {
        
        activePanel = elem;
        
      }
      
    });
    
    return activePanel;
                                      
  };
  
  //open active panel (and close unactive panels)
  const setActivePanel = activePanelNum => {
    
    //remove active class from all the panels
    removeClasses(DOMstrings.stepFormPanels, 'js-active');
    
    //show active panel
    DOMstrings.stepFormPanels.forEach((elem, index) => {
      if(index === (activePanelNum)) {
        
        elem.classList.add('js-active');
     
        setFormHeight(elem);
        
      }
    })
    
  };
  
  //set form height equal to current panel height
  const formHeight = (activePanel) => {
    
    const activePanelHeight = activePanel.offsetHeight;
    
    DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
    
  };
  
  const setFormHeight = () => {
    const activePanel = getActivePanel();
  
    formHeight(activePanel);
  }
  
  //STEPS BAR CLICK FUNCTION
  DOMstrings.stepsBar.addEventListener('click', e => {
    
    //check if click target is a step button
    const eventTarget = e.target;
    
    if(!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
      return;
    }
    
    //get active button step number
    const activeStep = getActiveStep(eventTarget);
    
    //set all steps before clicked (and clicked too) to active
    setActiveStep(activeStep);
    
    //open active panel
    setActivePanel(activeStep);
  });
  
  //PREV/NEXT BTNS CLICK
  DOMstrings.stepsForm.addEventListener('click', e => {
    
    const eventTarget = e.target;
    
    //check if we clicked on `PREV` or NEXT` buttons
    if(! ( (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) || (eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`)) ) ) 
    {
      return;
    }
    
    //find active panel
    const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
    
    let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
    
    //set active step and active panel onclick
    if(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
      activePanelNum--;
    
    } else {
      
      activePanelNum++;
    
    }
    
    setActiveStep(activePanelNum);
    setActivePanel(activePanelNum);
    
  });
  
  //SETTING PROPER FORM HEIGHT ONLOAD
  window.addEventListener('load', setFormHeight, false);
  
  //SETTING PROPER FORM HEIGHT ONRESIZE
  window.addEventListener('resize', setFormHeight, false);
  
  //changing animation via animation select !!!YOU DON'T NEED THIS CODE (if you want to change animation type, just change form panels data-attr)
  
  const setAnimationType = (newType) => {
    DOMstrings.stepFormPanels.forEach(elem => {
      elem.dataset.animation = newType;
    })
  };
   
        setAnimationType('slideHorz');

       
  });





  
import React, { useState,useEffect } from 'react'
import $ from 'jquery';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import '../../css/web/ContactUs_style.css';

// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const teaxtArea_styles  = {
    minHeight:'178px',
    padding:'9px',
    boxSizing:'border-box',
    fontSize:'15px'
  };
function ContactUs() {
    const [countrymaster, setCountrymaster] = useState([]);
    const [statesmaster, setStatesmaster] = useState([]);
    const [citysmaster, setCitymaster] = useState([]);

    const [userinfoData,setuserinfoData] = new useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Mobile: "",
        Country: "",
        State: "",
        City: "",
        zipcode: "",
        Profile:"",
        Subject:"",
        Message: "",
        Appronal: false,
        Date: new Date(),
        Status: true,
        TermsandConditions:false,
        Designation:"Student",
    });
    
   
        const inputEvents = (event) =>{
        const {name,value} = event.target;
        setuserinfoData({...userinfoData, [name]:value});
       
        }
    const navigate = useNavigate();
    const onSubmits = (event) =>{
        // console.log(userinfoData)
        event.preventDefault();
        axios.post('/ContactUs',  userinfoData )
          .then(res =>{ 
              if(res.status===201)
                {
                  navigate('/contact-us');
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
        const handleChangecountry = () => {
            const countryId = $("#sel_country").val();
            axios.get('/statebycountry/'+countryId)
            .then(res => {
                const states = res.data;
                setStatesmaster(states);
                // console.log(countries)
                })
        }

        const handleChangeState = () => {
            const stateId = $("#sel_state").val();
            axios.get('/citybystate/'+stateId)
            .then(res => {
                const city = res.data;
                setCitymaster(city);
                })
         }
    
    
  return (
    <>
      <div className="ContactUs_container">
         <div className="row row-spec">
                <div className="col-md-12 padding-01">
                <img src="./assets/web/images/contact-us.png" alt="contact-us-tog" className="img-responsive" style={{width: "100%"}}/>
                </div>
          </div>
          <div className="custom_content custom">
              <div className="container large">
                  <div className="row">
                      <div className="col-xs-12 col-sm-6 custom_right1">
                          <div className="single_content_left">
                              <div className="contact_form">
                                  <form onSubmit={onSubmits} encType="multipart/form-data" method="post" acceptCharset="utf-8">
                                      <div className="form-area">
                                          <br style={{clear: "both"}} />
                                          <h3 style={{marginBottom: "18px", textAlign: "center"}}>Contact Form</h3>
                                          <div className="arrow-right"></div>
                                          <div className="form-group contact_forms row">
                                              <div className="form-group contact_forms col-lg-6 col-md-6 col-sm-6">
                                                  <input type="text" className="form-control input-sm" id="name" onChange={inputEvents} name="FirstName" placeholder="Name" required="" />
                                              </div>
                                              <div className="form-group contact_forms col-lg-6 col-md-6 col-sm-6">
                                                  <input type="text" className="form-control input-sm" id="last Name" onChange={inputEvents} name="LastName" placeholder="last Name" required="" />
                                              </div>
                                          </div>
                                          <div className="form-group contact_forms row">
                                              <div className="form-group contact_forms col-lg-6 col-md-6 col-sm-6">
                                                  <input type="text" className="form-control input-sm" id="last" onChange={inputEvents} name="Email" placeholder="Email" required="" />
                                              </div>
                                              <div className="form-group contact_forms col-lg-6 col-md-6 col-sm-6">
                                                  <input type="text" className="form-control input-sm" id="mobile" onChange={inputEvents} name="Mobile" placeholder="Mobile Number" maxLength="10" required="" />
                                              </div>
                                          </div>
                                          <div className="form-group contact_forms row">
                                              <div className="form-group contact_forms col-lg-6 col-md-6 col-sm-6">
                                                  <select name="Country" className="form-control country-select input-sm" id="sel_country"  onChange={(event) => {handleChangecountry(); inputEvents(event)}}>
                                                  <option key="1011" value="">Select Country</option>
                                                    {countrymaster.map((cntry,index) => 
                                                        <option key={(index+'cnty').toString()} value={cntry._id}>{(cntry.Country.substring(0,2)) + ' | '+cntry.Country}</option>
                                                    ) }
                                                  </select>
                                              </div>
                                              <div className="form-group contact_forms col-lg-6 col-md-6 col-sm-6">
                                                  <select name="State" id="sel_state"  onChange={(event) => {handleChangeState(); inputEvents(event)}} className="form-control input-sm">
                                                  <option key="456s" value="">Select State</option> 
                                                    {statesmaster.map((statelist,index) => 
                                                        <option key={(index+'stt').toString()} value={statelist._id}>{(statelist.State.substring(0,2)) + ' | '+statelist.State}</option>
                                                    ) }
                                                  </select>
                                              </div>
                                          </div>
                                          <div className="form-group contact_forms row">
                                              <div className="form-group contact_forms col-lg-6 col-md-6 col-sm-6">
                                                  <select name="City" id="sel_city" onChange={inputEvents} className="form-control input-sm"> 
                                                  <option value="">Select City</option>
                                                    {citysmaster.map((citylist,index) => 
                                                        <option key={(index+'city').toString()} value={citylist._id}>{(citylist.City.substring(0,2)) + ' | '+citylist.City}</option>
                                                    ) }
                                                  </select>
                                              </div>
                                              <div className="form-group contact_forms col-lg-6 col-md-6 col-sm-6">
                                                  <input type="text" className="form-control input-sm" id="zip code" onChange={inputEvents} name="zipcode" placeholder="zip code" maxLength="6" required="" />
                                              </div>
                                          </div>
                                          <div className="form-group contact_forms row">
                                              <div className="form-group contact_forms col-lg-6 col-md-6 col-sm-6">
                                                  <select name="Profile" onChange={inputEvents} className="form-control country-select input-sm">
                                                      <option value="">Profile</option>
                                                      <option value="Student">STUDENT</option>
                                                      <option value="Teacher">TEACHER</option>
                                                      <option value="Parent">PARENT</option>
                                                  </select>
                                              </div>
                                              <div className="form-group contact_forms col-lg-6 col-md-6 col-sm-6">
                                                  <input type="text" className="form-control input-sm" id="date" onChange={inputEvents} name="Subject" placeholder="subject" required="" />
                                              </div>
                                          </div>

                                          <div className="form-group contact_forms row">
                                              <div className="form-group contact_forms col-lg-12 col-md-12 col-sm-12">
                                                  <textarea style={teaxtArea_styles} className="form-control input-sm" type="textarea" onChange={inputEvents} name="Message" id="message" placeholder="Message" maxLength="300" rows="13"></textarea>
                                              </div>
                                          </div>
                                          
                                          <input type="submit" name="submit" value="Send message" className="btn btn-primary btn btn-default send-btns" />
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>

                      <div className="col-xs-12 col-sm-6 custom_left">
                          <div className="sidebar">
                              <div className="list_block sidebar_item side_items">
                                  <h3 style={{textTransform: "uppercase", margin: "0 0 14px"}}>Contacts</h3>
                                  <ul className="contact_info">
                                      <li>
                                          <Link target="_blank" to="https://maps.google.com/?q=116 Phase IV, Udyog Vihar, Sector 18 Gurugram, Haryana 122008">
                                              <i className="fa fa-home contact-home"></i>plot no : 116, First Floor,Near Atlas Chowk, Udhyog Vihar, Phase – 4, 122015, Gurugram, Haryana, India
                                          </Link>
                                      </li>
                                      <li><i className="fa fa-envelope contact-home"></i> <Link to="mailto:info@theonlinegurukul.com">info@theonlinegurukul.com</Link></li>
                                      <li><i className="fa fa-globe contact-home"></i> <Link to="/">https://theonlinegurukul.com</Link></li>
                                      <li>
                                          <Link  to="tel:+919899416555"><i className="fa fa-phone"></i> <span>Phone : </span> +91-9899416555, 9899406555</Link>
                                      </li>
                                      <li>
                                          <p to="#" target="_blank"><i className="fa fa-building"></i> <span>Decon Edu Pvt Ltd.</span> </p>
                                      </li>
                                  </ul>
                                  <hr />
                                  <ul className="contact_info">
                                      <li>
                                          <Link  target="_blank" to="https://maps.google.com/?q=RT.8/RW.5, Manggarai, Tebet, South Jakarta City, Jakarta, Indonesia">
                                              <i className="fa fa-home contact-home"></i>JL. Dr. Sahario No. 15, RT 004/RW 05 Kelurahan Manggarai, Kacamatan Tebet, Jakarta Selatan 12850
                                          </Link>
                                      </li>
                                      <li><i className="fa fa-envelope contact-home"></i> <Link to="mailto:info@theonlinegurukul.com">info@theonlinegurukul.com</Link></li>
                                      <li><i className="fa fa-globe contact-home"></i> <Link to="/">https://theonlinegurukul.com</Link></li>
                                      <li>
                                          <Link to="tel:+62-81387360795"><i className="fa fa-phone"></i> <span>Phone : </span> +62-81387360795</Link>
                                      </li>
                                      <li>
                                          <p target="_blank"><i className="fa fa-building"></i> <span>Decon Edu Pvt Ltd.</span> </p>
                                      </li>
                                  </ul>
                              </div>
                              <div className="list_block">
                                  <h3 style={{textTransform: "uppercase", margin: "0 0 14px"}}>HELP DESK</h3>
                                  <ul className="contact_info">
                                      <li><strong>Monday-Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10 AM to 8 PM</li>
                                      <li>
                                          <strong>Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10 AM to 3 PM
                                      </li>
                                      <li>
                                          <strong>Sunday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </strong>
                                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Closed
                                      </li>
                                  </ul>
                              </div>
                              
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>
          <h3 style={{textTransform: "uppercase", margin: "-35px 0 46px 0", textAlign: "center"}}>All india Presence</h3>
            <div className="container">
                <div className="row" style={{marginTop: "-35px"}}>
                    <div className="col-xs-12 col-sm-6">
                        <div className="sidebar">
                            <div className="list_block sidebar_item">
                                <h3 style={{margin: "0 0 14px"}}>East Zone</h3>
                                <ul className="contact_info">
                                    <li>
                                        <Link target="_blank" to="#"> <i className="fa fa-home contact-home"></i>Mohalla Bank Colony , Indira Nagar Road No-4 Post GPO Thana Zakan Pur Patna-800001, Bihar </Link>
                                    </li>
                                </ul>
                                <hr className="horizontal-line" />
                                <ul className="contact_info">
                                    <li>
                                        <Link target="_blank" to="#"> <i className="fa fa-home contact-home"></i>Hilland Willows , HIG Cypress-1,Flat No-208,New town Rajarhat ,Kolkata-700156 , Kolkata </Link>
                                    </li>
                                </ul>
                                <hr className="horizontal-line" />
                                <ul className="contact_info">
                                    <li>
                                        <Link target="_blank" to="#"> <i className="fa fa-home contact-home"></i>Ground Floor House No.3143/8348 Pandara Rasulgarh,PS Mancheswar Dist. Khordha Bhuwneshwar-751010 , Odisha </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 custom_left">
                        <div className="sidebar">
                            <div className="list_block sidebar_item">
                                <h3 style={{margin: "0 0 14px"}}>South Zone</h3>
                                <ul className="contact_info">
                                    <li>
                                        <Link target="_blank" to="#"> <i className="fa fa-home contact-home"></i>166 BTM 1st stage 6th main Keb Layout, Bangalore-560029, Bangalore </Link>
                                    </li>
                                </ul>
                                <hr className="horizontal-line" />
                                <ul className="contact_info">
                                    <li>
                                        <Link target="_blank" to="#"> <i className="fa fa-home contact-home"></i>302 MM heights toli chowki hyderabad, telangana, 500008 </Link>
                                    </li>
                                </ul>

                                <hr className="horizontal-line" />
                                <ul className="contact_info">
                                    <li>
                                        <Link target="_blank" to="#"> <i className="fa fa-home contact-home"></i>Flate No-G2, IG Prestige Apartments, Edayapalayam Coimbatore Tamilnadu-641025 , Coimbatore </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <div className="container">
              <div className="row">
                  <div className="col-xs-12 col-sm-6">
                      <div className="sidebar">
                          <div className="list_block sidebar_item">
                              <h3 style={{margin: "0 0 14px"}}>West Zone</h3>
                              <ul className="contact_info">
                                  <li>
                                      <Link target="_blank" to="#"> <i className="fa fa-home contact-home"></i>Scheme 136 B/670 Kabir Khedi Near Sica School Indore-452010 , MP </Link>
                                  </li>
                              </ul>
                              <hr className="horizontal-line" />
                              <ul className="contact_info">
                                  <li>
                                      <Link target="_blank" to="#"> <i className="fa fa-home contact-home"></i>Flat No.719, Seventh Floor Builing No.1 Ganeshwadi Kondivita Road M.I.D.C Andheri East Mumbai-400093, Mumbai </Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 custom_left">
                      <div className="sidebar">
                          <div className="list_block sidebar_item">
                              <h3 style={{margin: "0 0 14px"}}>North Zone</h3>
                              <ul className="contact_info">
                                  <li>
                                      <Link target="_blank" to="#"> <i className="fa fa-home contact-home"></i>House No.631/177 Mulayam Nagar , Ismail Ganj Lucknow-226010 , Lucknow </Link>
                                  </li>
                              </ul>
                              <hr className="horizontal-line" />
                              <ul className="contact_info">
                                  <li>
                                      <Link target="_blank" to="#"> <i className="fa fa-home contact-home"></i>Flat No.405, Sunny Square ,Budh singh Pura ,Sanganer Jaipur Rajasthan-302029 , Jaipur </Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="contact_map">
	  	      <iframe src="https://maps.google.com/maps?q=28.4940200,77.0798990&z=15&output=embed" width="100%" height="350" frameBorder="0" title="officemap1" style={{border:"0"}}></iframe>
          </div>
          <div className="contact_map">
              <iframe src="https://maps.google.com/maps?q=-6.210021,106.847424&z=15&output=embed" width="100%" height="350" title="officemap2" frameBorder="0" style={{border:"0"}}></iframe>
          </div>
      </div>
    </>
  )
}

export default ContactUs

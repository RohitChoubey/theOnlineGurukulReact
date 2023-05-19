import React from 'react';
import '../../css/headerStyle.css';
import { Link } from 'react-router-dom';

function TopHeader(props) {
  return (
    <>
    <div className="top-black-bg bg-dark text-white">
        <div className="top-head-banner">
           <div className="flex-header-cd">
             <div className="header-popup-earn-btn-Refer" onClick={props.fcn}><span className="text-zoom-in-zoom-out"> Refer & Earn </span></div>
             <div className="header-popup-earn-btn-collab" onClick={props.fcn2}><span className="text-zoom-in-zoom-out"> Collaboration Program </span></div>
             <div> <i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:+91-9899406555">+91-9899406555 </a> </div>
             <div> <i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:+91-9899416555"> +91-9899416555 </a> </div>
             <div> <i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:info@theonlinegurukul.com">info@theonlinegurukul.com </a> </div>
             <div> <i className="fa fa-user" aria-hidden="true"></i>
                <Link className="anchor20_" title="Login" to={'/login'} > Login </Link> /
                <Link className="anchor20_" title="Register" to={'/register-type'} > Register </Link> /
                <Link className="anchor20_" title="Mock Test" to={'/mock-test'} > Mock Test </Link> 
              </div>
           </div> 
        </div>
      </div>
    </>
  )
}


export default TopHeader

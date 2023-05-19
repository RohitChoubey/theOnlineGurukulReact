import React from 'react'
import { Link } from 'react-router-dom';
import '../css/tabPanelStyle.css';

function TabPanelTog(props) {
  return (
    <>
        <div className="tog_tabpanel_container">
        <div id="exTab2" className="tab container">	
              <ul className="nav nav-tabs">
                      {props.tabdata[0].tabnavbar.map(function(object, i){
                            return (
                                <li key={i.toString()} className={i===0 ? "active":""} >
                                    <Link  to={"#"+(i)} data-toggle="tab">{object}</Link>
                                </li>
                            );
                        })}
                  </ul>

                    <div className="tab-content ">
                        
                    { props.tabdata[0].tabnavbar.map((object1, j) => ( 
                            <>
                            <div key={j.toString()+"a" } className={j===0 ? 'tab-pane text-center active':'tab-pane text-center'} id={j}>
                                <h3 className="tabbings-center"> { (object1==="CBSE" || object1==="ICSE" || object1==="IB ⁄ IGCSE")? object1+ " Board" :object1}   </h3>
                                <div className="row">
                                {  props.tabdata[1].tabcantant[j].pagetablink.map((object2, k) => (  
                                    <div key={k.toString()+"b" } className="count_inner col-xs-12 col-sm-2 col-md-2">
                                        <Link  target="_blank" to="/courses-fees-structure" >
                                            <h2 className="8th-course1" style={{textTransform: "capitalize", fontSize:"17px"}}> {object2} </h2>
                                        </Link>
                                    </div>
                                       ))}  
                                </div>
                            </div>
                            </>
                        ))}
                       
                    </div>
                </div>
        </div>
    </>
  )
}

export default TabPanelTog
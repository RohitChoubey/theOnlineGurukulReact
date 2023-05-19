import React from 'react';
import '../../css/course/coursefeesStyle.css';
 

const navigationOptions = [
    {
      tabname: 'home',
      tabcontent: "You know, there's a million fine looking women",
      color: "red"
    },
    {
      tabname: 'likes',
      tabcontent: "My friend here's trying to convince me that",
      color: "blue"
    },
    {
      tabname: 'search',
      tabcontent: "In light of this lurid tale, I don't even",
      color: "orange"
    },
    {
      tabname: 'profile',
      tabcontent: "I don't care if she's my cousin or not, I'm gonna ",
      color: "gray"
    }
  ];

function TabPanelShow() {
    // const [tabdata, setTabData] = useState(0);

    // const handleClick = (para,e) => {
    //     alert()
    //     e.preventDefault();
    //     setTabData(para);
    //     alert(para);
    // }
     

  return (
    <>
    <br />
        <div className="pricesheader-text" >
            <h3>Course Fees Structure</h3>
        </div>
        <div className="tabBar-container">
            <div className="tabs">
                <ul id="tabs-nav">
                    {navigationOptions.map((element,index)=> (
                        <li key={index}><a href={'#tab'+index}> {element.tabname} </a></li>
                    ))}
                </ul>  
                <div id="tabs-content">
                    {navigationOptions.map((element,index)=> (
                        <div key={index} id="tab1" className="tab-content">
                            <h2>{element.tabname}</h2>
                            <p>{element.tabcontent}</p>
                        </div>
                    ))}
                </div>  
            </div>  
        </div> 
    </>
  )
}

export default TabPanelShow

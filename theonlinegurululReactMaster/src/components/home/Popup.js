import React from 'react';
import '../../css/headerStyle.css';


function Popup(props) {
  
  return (
    <>  
      {(props.imgAlt === "popup baneer") ?
        <div className="header-popup-earn">
            <div id="showhidden" className={"show " +props.popImage } >
                <div className="overlay"></div>
                <div className="img-show">
                <span onClick={props.popupClose }>X</span>
                <img src={props.popupImgUrl} alt={props.imgAlt} />
                </div>
            </div>
        </div>
        :
        <div className="header-popup-earn">
            <div id="showhidden1" className={"show " +props.popImage2 } >
                <div className="overlay"></div>
                <div className="img-show">
                <span onClick={props.popupClose2}>X</span>
                <img src={props.popupImgUrl2} alt={props.imgAlt} />
                </div>
            </div>
        </div>
      }
    </>
  )
}

export default Popup


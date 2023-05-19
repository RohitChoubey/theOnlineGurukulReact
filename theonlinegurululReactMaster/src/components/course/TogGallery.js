import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/course/TogGalleryStyles.css';

function TogGallery(props) {
  return (
    <>
        {props.photosUrl.map((data, index) => (
           
                <li>
                    {/* <Link to={data.hrefLink} title={"Photo "+index} > */}
                    <Link to={'../'+data.imgUrl} title={"Photo "+index} target="_blank" >
                        <img src={data.imgUrl} alt={"1-gallery"+index} />
                        <div className="overlay">
                            <span className="zoom">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </Link>
                </li>
           
        ))}
    </>
  )
}

export default TogGallery
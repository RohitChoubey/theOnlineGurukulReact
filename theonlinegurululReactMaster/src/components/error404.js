import  "../css/error404_style.css";
// import { Link} from "react-router-dom";

function Error404(){
  
    return (
        <>
            <div className="bg-purple">
                    
                    <div className="stars">
                        <div className="custom-navbar">
                            {/* <div className="brand-logo">
                                <img src="assets/images/logo.png" width="80px" alt="imgage" />
                            </div> */}
                            {/* <div className="navbar-links">
                                <ul>
                                <li><a href="/" >Home</a></li>
                                <li><a href="/" >About</a></li>
                                <li><a href="/" >Features</a></li>
                                <li><a href="/" className="btn-request" >Request A Demo</a></li>
                                </ul>
                            </div> */}
                        </div>
                        <div className="central-body">
                            <img className="image-404" src={process.env.PUBLIC_URL + '/assets/icons/404.svg'} width="300px" alt="imgage" />
                            <a href={process.env.PUBLIC_UR +'/'} className="btn-go-home" >GO BACK HOME</a>
                        </div>
                        <div className="objects">
                            <img className="object_rocket" src={process.env.PUBLIC_URL + '/assets/icons/rocket.svg'} width="40px" alt="imgage" />
                            <div className="earth-moon">
                                <img className="object_earth" src={process.env.PUBLIC_URL + '/assets/icons/earth.svg'} width="100px" alt="imgage" />
                                <img className="object_moon" src={process.env.PUBLIC_URL + '/assets/icons/moon.svg'} width="80px" alt="imgage" />
                            </div>
                            <div className="box_astronaut">
                                <img className="object_astronaut" src={process.env.PUBLIC_URL + '/assets/icons/astronaut.svg'} width="140px" alt="imgage" />
                            </div>
                        </div>
                        <div className="glowing_stars">
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>

                        </div>

                    </div>

                </div>
                
            </>
        
    );
   
}
 
// const styles = StyleSheet.create({

//     map:{
//         height
//     },
//     button: {
//         alignItems: 'center',
//        // marginTop: 150
//     }
// })

 

export default Error404;
